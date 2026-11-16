/**
 * Offline Pure-JS QR Code Generator (Model 2, Byte mode, EC Level L, Versions 1-10)
 * Renders directly to an offscreen <canvas> and returns a PNG Data URL.
 */
(function (global) {
    'use strict';

    // [totalCodewords, dataCodewords, ecPerBlock, g1Blocks, g1Data, g2Blocks, g2Data]
    const VERSION_TABLE = [
        null,
        [26, 19, 7, 1, 19, 0, 0],
        [44, 34, 10, 1, 34, 0, 0],
        [70, 55, 15, 1, 55, 0, 0],
        [100, 80, 20, 1, 80, 0, 0],
        [134, 108, 26, 1, 108, 0, 0],
        [172, 136, 18, 2, 68, 0, 0],
        [196, 156, 20, 2, 78, 0, 0],
        [242, 194, 24, 2, 97, 0, 0],
        [292, 232, 30, 2, 116, 0, 0],
        [346, 274, 18, 2, 68, 2, 69]
    ];

    const ALIGN_POS = [
        null,
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50]
    ];

    // Galois Field GF(256) with primitive polynomial 0x11D
    const GF_EXP = new Uint8Array(512);
    const GF_LOG = new Uint8Array(256);
    (function initGF() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
            GF_EXP[i] = x;
            GF_LOG[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= 0x11d;
        }
        for (let i = 255; i < 512; i++) {
            GF_EXP[i] = GF_EXP[i - 255];
        }
    })();

    function gfMul(a, b) {
        if (a === 0 || b === 0) return 0;
        return GF_EXP[GF_LOG[a] + GF_LOG[b]];
    }

    function rsGeneratorPoly(degree) {
        let poly = [1];
        for (let i = 0; i < degree; i++) {
            const next = new Array(poly.length + 1).fill(0);
            const root = GF_EXP[i];
            for (let j = 0; j < poly.length; j++) {
                next[j] ^= poly[j];
                next[j + 1] ^= gfMul(poly[j], root);
            }
            poly = next;
        }
        return poly;
    }

    function rsComputeEC(data, ecLen) {
        const gen = rsGeneratorPoly(ecLen);
        const res = new Uint8Array(data.length + ecLen);
        res.set(data);
        for (let i = 0; i < data.length; i++) {
            const coef = res[i];
            if (coef !== 0) {
                for (let j = 0; j < gen.length; j++) {
                    res[i + j] ^= gfMul(gen[j], coef);
                }
            }
        }
        return res.slice(data.length);
    }

    function encodeBytesUTF8(str) {
        if (typeof TextEncoder !== 'undefined') {
            return Array.from(new TextEncoder().encode(str));
        }
        const utf8 = unescape(encodeURIComponent(str));
        const arr = [];
        for (let i = 0; i < utf8.length; i++) arr.push(utf8.charCodeAt(i));
        return arr;
    }

    function selectVersion(byteLen) {
        for (let v = 1; v <= 10; v++) {
            const dataCapBits = VERSION_TABLE[v][1] * 8;
            const countBits = v <= 9 ? 8 : 16;
            const neededBits = 4 + countBits + byteLen * 8;
            if (neededBits <= dataCapBits) return v;
        }
        return -1;
    }

    function buildCodewords(bytes, version) {
        const [, dataCap, ecPerBlock, g1Blocks, g1Data, g2Blocks, g2Data] = VERSION_TABLE[version];
        const bits = [];
        const pushBits = (val, len) => {
            for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
        };

        // Mode indicator: Byte (0100)
        pushBits(0b0100, 4);
        // Character count
        pushBits(bytes.length, version <= 9 ? 8 : 16);
        // Data bytes
        for (let i = 0; i < bytes.length; i++) pushBits(bytes[i], 8);

        const maxBits = dataCap * 8;
        // Terminator (up to 4 zero bits)
        const termLen = Math.min(4, maxBits - bits.length);
        for (let i = 0; i < termLen; i++) bits.push(0);
        // Align to 8 bits
        while (bits.length % 8 !== 0) bits.push(0);

        const dataCodewords = [];
        for (let i = 0; i < bits.length; i += 8) {
            let b = 0;
            for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
            dataCodewords.push(b);
        }

        // Pad codewords
        let padToggle = 0;
        while (dataCodewords.length < dataCap) {
            dataCodewords.push(padToggle === 0 ? 0xec : 0x11);
            padToggle ^= 1;
        }

        // Split into blocks & compute EC
        const dataBlocks = [];
        const ecBlocks = [];
        let offset = 0;
        for (let i = 0; i < g1Blocks; i++) {
            const block = Uint8Array.from(dataCodewords.slice(offset, offset + g1Data));
            offset += g1Data;
            dataBlocks.push(block);
            ecBlocks.push(rsComputeEC(block, ecPerBlock));
        }
        for (let i = 0; i < g2Blocks; i++) {
            const block = Uint8Array.from(dataCodewords.slice(offset, offset + g2Data));
            offset += g2Data;
            dataBlocks.push(block);
            ecBlocks.push(rsComputeEC(block, ecPerBlock));
        }

        // Interleave data then EC
        const result = [];
        const maxDataLen = Math.max(g1Data, g2Data);
        for (let col = 0; col < maxDataLen; col++) {
            for (let b = 0; b < dataBlocks.length; b++) {
                if (col < dataBlocks[b].length) result.push(dataBlocks[b][col]);
            }
        }
        for (let col = 0; col < ecPerBlock; col++) {
            for (let b = 0; b < ecBlocks.length; b++) {
                result.push(ecBlocks[b][col]);
            }
        }
        return result;
    }

    function createMatrix(size) {
        const modules = Array.from({ length: size }, () => new Uint8Array(size));
        const isFunction = Array.from({ length: size }, () => new Uint8Array(size));
        return { size, modules, isFunction };
    }

    function setFunc(ctx, r, c, dark) {
        if (r < 0 || r >= ctx.size || c < 0 || c >= ctx.size) return;
        ctx.modules[r][c] = dark ? 1 : 0;
        ctx.isFunction[r][c] = 1;
    }

    function drawFinder(ctx, row, col) {
        for (let dr = -1; dr <= 7; dr++) {
            for (let dc = -1; dc <= 7; dc++) {
                const r = row + dr;
                const c = col + dc;
                if (r < 0 || r >= ctx.size || c < 0 || c >= ctx.size) continue;
                const inOuter = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
                const onBorder = dr === 0 || dr === 6 || dc === 0 || dc === 6;
                const inInner = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
                setFunc(ctx, r, c, inOuter && (onBorder || inInner));
            }
        }
    }

    function drawAlignment(ctx, row, col) {
        for (let dr = -2; dr <= 2; dr++) {
            for (let dc = -2; dc <= 2; dc++) {
                const dark = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
                setFunc(ctx, row + dr, col + dc, dark);
            }
        }
    }

    function drawFunctionPatterns(ctx, version) {
        const n = ctx.size;
        drawFinder(ctx, 0, 0);
        drawFinder(ctx, 0, n - 7);
        drawFinder(ctx, n - 7, 0);

        // Alignment patterns
        const coords = ALIGN_POS[version];
        for (let i = 0; i < coords.length; i++) {
            for (let j = 0; j < coords.length; j++) {
                const r = coords[i];
                const c = coords[j];
                if (ctx.isFunction[r][c]) continue;
                drawAlignment(ctx, r, c);
            }
        }

        // Timing patterns
        for (let i = 8; i < n - 8; i++) {
            setFunc(ctx, 6, i, i % 2 === 0);
            setFunc(ctx, i, 6, i % 2 === 0);
        }

        // Dark module
        setFunc(ctx, 4 * version + 9, 8, true);

        // Reserve format areas
        for (let i = 0; i < 9; i++) {
            if (!ctx.isFunction[8][i]) setFunc(ctx, 8, i, false);
            if (!ctx.isFunction[i][8]) setFunc(ctx, i, 8, false);
        }
        for (let i = n - 8; i < n; i++) {
            setFunc(ctx, 8, i, false);
        }
        for (let i = n - 7; i < n; i++) {
            setFunc(ctx, i, 8, false);
        }

        // Reserve & draw version info for >= 7
        if (version >= 7) {
            let rem = version;
            for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
            const verBits = (version << 12) | rem;
            for (let i = 0; i < 18; i++) {
                const dark = ((verBits >>> i) & 1) === 1;
                const a = Math.floor(i / 3);
                const b = n - 11 + (i % 3);
                setFunc(ctx, a, b, dark);
                setFunc(ctx, b, a, dark);
            }
        }
    }

    function placeDataBits(ctx, codewords) {
        const n = ctx.size;
        let bitIdx = 0;
        const totalBits = codewords.length * 8;
        let upward = true;

        for (let right = n - 1; right >= 1; right -= 2) {
            if (right === 6) right = 5;
            for (let step = 0; step < n; step++) {
                const r = upward ? n - 1 - step : step;
                for (let dx = 0; dx < 2; dx++) {
                    const c = right - dx;
                    if (ctx.isFunction[r][c]) continue;
                    let dark = false;
                    if (bitIdx < totalBits) {
                        const byte = codewords[bitIdx >> 3];
                        dark = ((byte >>> (7 - (bitIdx & 7))) & 1) === 1;
                        bitIdx++;
                    }
                    ctx.modules[r][c] = dark ? 1 : 0;
                }
            }
            upward = !upward;
        }
    }

    function maskPredicate(mask, r, c) {
        switch (mask) {
            case 0: return (r + c) % 2 === 0;
            case 1: return r % 2 === 0;
            case 2: return c % 3 === 0;
            case 3: return (r + c) % 3 === 0;
            case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
            case 5: return ((r * c) % 2 + (r * c) % 3) === 0;
            case 6: return (((r * c) % 2 + (r * c) % 3) % 2) === 0;
            case 7: return (((r + c) % 2 + (r * c) % 3) % 2) === 0;
            default: return false;
        }
    }

    function drawFormatBits(ctx, mask) {
        const n = ctx.size;
        // EC Level L = 01
        const data = (0b01 << 3) | mask;
        let rem = data;
        for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
        const bits = ((data << 10) | rem) ^ 0x5412;

        // Place bit 0..14 (LSB to MSB)
        for (let i = 0; i <= 5; i++) setFunc(ctx, 8, i, ((bits >>> (14 - i)) & 1) === 1);
        setFunc(ctx, 8, 7, ((bits >>> 8) & 1) === 1);
        setFunc(ctx, 8, 8, ((bits >>> 7) & 1) === 1);
        setFunc(ctx, 7, 8, ((bits >>> 6) & 1) === 1);
        for (let i = 9; i < 15; i++) setFunc(ctx, 14 - i, 8, ((bits >>> (14 - i)) & 1) === 1);

        for (let i = 0; i < 7; i++) setFunc(ctx, n - 1 - i, 8, ((bits >>> (14 - i)) & 1) === 1);
        for (let i = 7; i < 15; i++) setFunc(ctx, 8, n - 15 + i, ((bits >>> (14 - i)) & 1) === 1);
    }

    function applyMask(ctx, mask) {
        const n = ctx.size;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (!ctx.isFunction[r][c] && maskPredicate(mask, r, c)) {
                    ctx.modules[r][c] ^= 1;
                }
            }
        }
    }

    function calcPenalty(ctx) {
        const n = ctx.size;
        const m = ctx.modules;
        let penalty = 0;

        // Rule 1: adjacent modules in row/col
        for (let r = 0; r < n; r++) {
            let runColor = m[r][0], runLen = 1;
            for (let c = 1; c < n; c++) {
                if (m[r][c] === runColor) {
                    runLen++;
                    if (runLen === 5) penalty += 3;
                    else if (runLen > 5) penalty += 1;
                } else {
                    runColor = m[r][c];
                    runLen = 1;
                }
            }
        }
        for (let c = 0; c < n; c++) {
            let runColor = m[0][c], runLen = 1;
            for (let r = 1; r < n; r++) {
                if (m[r][c] === runColor) {
                    runLen++;
                    if (runLen === 5) penalty += 3;
                    else if (runLen > 5) penalty += 1;
                } else {
                    runColor = m[r][c];
                    runLen = 1;
                }
            }
        }

        // Rule 2: 2x2 blocks
        for (let r = 0; r < n - 1; r++) {
            for (let c = 0; c < n - 1; c++) {
                const v = m[r][c];
                if (v === m[r][c + 1] && v === m[r + 1][c] && v === m[r + 1][c + 1]) {
                    penalty += 3;
                }
            }
        }

        // Rule 4: dark ratio
        let darkCount = 0;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) darkCount += m[r][c];
        }
        const pct = (darkCount * 100) / (n * n);
        penalty += Math.floor(Math.abs(pct - 50) / 5) * 10;

        return penalty;
    }

    function generateQRMatrix(text) {
        const bytes = encodeBytesUTF8(text);
        const version = selectVersion(bytes.length);
        if (version === -1) return null;

        const codewords = buildCodewords(bytes, version);
        const size = 17 + 4 * version;

        let bestMask = 0;
        let bestPenalty = Infinity;
        let bestModules = null;

        for (let mask = 0; mask < 8; mask++) {
            const ctx = createMatrix(size);
            drawFunctionPatterns(ctx, version);
            placeDataBits(ctx, codewords);
            applyMask(ctx, mask);
            drawFormatBits(ctx, mask);
            const p = calcPenalty(ctx);
            if (p < bestPenalty) {
                bestPenalty = p;
                bestMask = mask;
                bestModules = ctx.modules;
            }
        }

        return bestModules;
    }

    /**
     * Generates a PNG Data URL for the given text.
     */
    global.generateQRDataURL = function (text, pixelSize, fgColor, bgColor) {
        if (!text) return '';
        const matrix = generateQRMatrix(text);
        if (!matrix) return '';

        const quiet = 3;
        const count = matrix.length;
        const totalModules = count + quiet * 2;
        const scale = Math.max(2, Math.floor((pixelSize || 160) / totalModules));
        const canvasSize = totalModules * scale;

        const canvas = document.createElement('canvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = bgColor || '#ffffff';
        ctx.fillRect(0, 0, canvasSize, canvasSize);

        ctx.fillStyle = fgColor || '#000000';
        for (let r = 0; r < count; r++) {
            for (let c = 0; c < count; c++) {
                if (matrix[r][c]) {
                    ctx.fillRect((c + quiet) * scale, (r + quiet) * scale, scale, scale);
                }
            }
        }
        return canvas.toDataURL('image/png');
    };
})(window);
