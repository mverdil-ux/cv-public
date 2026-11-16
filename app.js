// Storage & Constants
const STORAGE_KEY = 'cv_builder_profiles_v2';

const I18N = {
    tr: {
        appTitle: 'CV Hazırlayıcı',
        tabEditor: 'düzenle',
        tabPreview: 'önizle',
        langLabel: 'Dil: TR',
        designSettings: 'Tasarım Ayarları',
        templateSelect: 'Şablon Seçimi (20)',
        palettePresets: 'Hazır Renk Paletleri',
        customColors: 'Özel Renk Ayarları',
        colorAccent: 'Vurgu Rengi',
        colorText: 'Yazı Rengi',
        colorBg: 'Arka Plan',
        colorSecondary: 'Yan Panel / Kutu',
        typography: 'Yazı Tipi & Sayfa Sığdırma',
        fontFamily: 'Yazı Tipi (Font)',
        fontTemplate: 'Şablona Özel (Varsayılan)',
        fontSizeLabel: 'Yazı Boyutu:',
        lineHeightLabel: 'Satır Aralığı:',
        pagePaddingLabel: 'Sayfa Kenar Boşluğu:',
        resetDesign: 'Tasarımı Varsayılana Sıfırla',
        activeProfile: 'Aktif CV Taslağı',
        fillDemo: 'Örnek Doldur',
        exportJson: 'Yedek Al (JSON)',
        importJson: 'Yedek Yükle',
        clearBtn: 'Temizle',
        personalInfo: 'Kişisel Bilgiler & Bağlantılar',
        uploadPhoto: 'Fotoğraf Yükle',
        removePhoto: 'Kaldır',
        photoShape: 'Şekil:',
        shapeCircle: 'Yuvarlak',
        shapeRounded: 'Kare (Yumuşak)',
        lblFullname: 'Ad Soyad',
        phFullname: 'Adınız Soyadınız',
        lblJobtitle: 'Ünvan / Meslek',
        phJobtitle: 'Örn: Yazılım Mühendisi',
        lblPhone: 'Telefon',
        phPhone: '0555 123 45 67',
        lblEmail: 'E-posta',
        phEmail: 'ornek@email.com',
        lblAddress: 'Adres / Şehir',
        phAddress: 'İstanbul, Türkiye',
        lblLinkedin: 'LinkedIn',
        lblGithub: 'GitHub',
        lblWebsite: 'Portfolyo / Web Sitesi',
        phWebsite: 'https://siteniz.com',
        showQr: "CV'de QR Kod Göster",
        qrAuto: 'Otomatik (Web / LinkedIn / GitHub / E-posta)',
        qrWebsite: 'Web Sitesi',
        qrLinkedin: 'LinkedIn',
        qrGithub: 'GitHub',
        qrEmail: 'E-posta',
        qrWebLabel: 'Web',
        qrPortfolioLabel: 'Portfolyo',
        summaryCard: 'Hakkımda (Özet)',
        phSummary: 'Kendinizden kısaca bahsedin...',
        addBtn: '+ Ekle',
        goToPreview: 'Önizlemeye Git',
        downloadWord: 'Word (Metin) İndir',
        downloadPdf: 'PDF İndir',
        previewHint: '💡 İpucu: PDF İndir\'e bastığınızda açılan yazdırma ekranında "PDF olarak kaydet" seçeneğini kullanın.',
        privacyFooter: '🔒 <strong>Gizlilik Garantisi:</strong> Girdiğiniz veriler hiçbir sunucuya gönderilmez; yalnızca kendi cihazınızda (tarayıcı hafızasında) saklanır.',
        summary: 'Hakkımda',
        experience: 'İş Deneyimi',
        education: 'Eğitim',
        projects: 'Projeler',
        skills: 'Yetenekler',
        languages: 'Diller',
        certificates: 'Sertifikalar',
        references: 'Referanslar',
        defaultName: 'Ad Soyad',
        defaultTitle: 'Ünvan'
    },
    en: {
        appTitle: 'CV Builder',
        tabEditor: 'editor',
        tabPreview: 'preview',
        langLabel: 'Lang: EN',
        designSettings: 'Design Settings',
        templateSelect: 'Templates (20)',
        palettePresets: 'Color Presets',
        customColors: 'Custom Colors',
        colorAccent: 'Accent Color',
        colorText: 'Text Color',
        colorBg: 'Background',
        colorSecondary: 'Sidebar / Box',
        typography: 'Typography & Page Fit',
        fontFamily: 'Font Family',
        fontTemplate: 'Template Default',
        fontSizeLabel: 'Font Size:',
        lineHeightLabel: 'Line Height:',
        pagePaddingLabel: 'Page Margin:',
        resetDesign: 'Reset Design to Default',
        activeProfile: 'Active CV Draft',
        fillDemo: 'Fill Sample',
        exportJson: 'Backup (JSON)',
        importJson: 'Restore JSON',
        clearBtn: 'Clear',
        personalInfo: 'Personal Info & Links',
        uploadPhoto: 'Upload Photo',
        removePhoto: 'Remove',
        photoShape: 'Shape:',
        shapeCircle: 'Circle',
        shapeRounded: 'Rounded Square',
        lblFullname: 'Full Name',
        phFullname: 'Your Full Name',
        lblJobtitle: 'Job Title / Profession',
        phJobtitle: 'e.g. Software Engineer',
        lblPhone: 'Phone',
        phPhone: '+1 555 123 4567',
        lblEmail: 'Email',
        phEmail: 'name@example.com',
        lblAddress: 'Location / City',
        phAddress: 'London, UK',
        lblLinkedin: 'LinkedIn',
        lblGithub: 'GitHub',
        lblWebsite: 'Portfolio / Website',
        phWebsite: 'https://yoursite.com',
        showQr: 'Show QR Code on CV',
        qrAuto: 'Auto (Web / LinkedIn / GitHub / Email)',
        qrWebsite: 'Website',
        qrLinkedin: 'LinkedIn',
        qrGithub: 'GitHub',
        qrEmail: 'Email',
        qrWebLabel: 'Web',
        qrPortfolioLabel: 'Portfolio',
        summaryCard: 'About Me (Summary)',
        phSummary: 'Write a brief summary about yourself...',
        addBtn: '+ Add',
        goToPreview: 'Go to Preview',
        downloadWord: 'Download Word (Text)',
        downloadPdf: 'Download PDF',
        previewHint: '💡 Tip: In the print dialog opened by Download PDF, choose "Save as PDF".',
        privacyFooter: '🔒 <strong>Privacy Guarantee:</strong> Your data is never sent to any server; it is stored locally on your own device only.',
        summary: 'About Me',
        experience: 'Work Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills',
        languages: 'Languages',
        certificates: 'Certificates',
        references: 'References',
        defaultName: 'Full Name',
        defaultTitle: 'Job Title'
    }
};

const PALETTE_PRESETS = [
    { nameTr: 'Klasik Mavi', nameEn: 'Classic Blue', accent: '#2563eb', text: '#1f2937', bg: '#ffffff', secondary: '#f3f4f6' },
    { nameTr: 'Lacivert & Altın', nameEn: 'Navy & Gold', accent: '#1e3a8a', text: '#111827', bg: '#ffffff', secondary: '#fef3c7' },
    { nameTr: 'Zümrüt Yeşili', nameEn: 'Emerald', accent: '#059669', text: '#1f2937', bg: '#ffffff', secondary: '#ecfdf5' },
    { nameTr: 'Bordo & Krem', nameEn: 'Burgundy', accent: '#9f1239', text: '#292524', bg: '#fffbeb', secondary: '#fef2f2' },
    { nameTr: 'Gece Modu', nameEn: 'Dark Mode', accent: '#38bdf8', text: '#f1f5f9', bg: '#0f172a', secondary: '#1e293b' },
    { nameTr: 'Siyah & Beyaz', nameEn: 'Monochrome', accent: '#111827', text: '#111827', bg: '#ffffff', secondary: '#f3f4f6' }
];

const STATIC_TEXT_IDS = ['fullname', 'jobtitle', 'phone', 'email', 'address', 'linkedin', 'github', 'website', 'summary'];

const LIST_CONFIG = {
    experiences: {
        editorId: 'experience-list',
        previewId: 'p-experience-list',
        sectionId: 'sec-experience',
        template: () => ({ id: Date.now() + Math.random(), title: '', company: '', date: '', desc: '' }),
        fields: [
            { key: 'title', placeholder: { tr: 'Pozisyon', en: 'Job Title' }, type: 'text' },
            { key: 'company', placeholder: { tr: 'Şirket Adı', en: 'Company Name' }, type: 'text' },
            { key: 'date', placeholder: { tr: 'Tarih Aralığı (Örn: 2020 - 2024)', en: 'Date Range (e.g. 2020 - 2024)' }, type: 'text' },
            { key: 'desc', placeholder: { tr: 'Açıklama', en: 'Description' }, type: 'textarea' }
        ],
        renderPreview: (item) => `
            <div class="cv-item">
                <div class="cv-item-title"><span>${escapeHtml(item.title)}</span><span class="cv-item-date">${escapeHtml(item.date)}</span></div>
                <div class="cv-item-subtitle">${escapeHtml(item.company)}</div>
                <p>${escapeHtml(item.desc)}</p>
            </div>`
    },
    educations: {
        editorId: 'education-list',
        previewId: 'p-education-list',
        sectionId: 'sec-education',
        template: () => ({ id: Date.now() + Math.random(), school: '', degree: '', date: '' }),
        fields: [
            { key: 'school', placeholder: { tr: 'Okul / Üniversite', en: 'School / University' }, type: 'text' },
            { key: 'degree', placeholder: { tr: 'Bölüm / Derece', en: 'Degree / Major' }, type: 'text' },
            { key: 'date', placeholder: { tr: 'Mezuniyet Yılı', en: 'Graduation Year' }, type: 'text' }
        ],
        renderPreview: (item) => `
            <div class="cv-item">
                <div class="cv-item-title"><span>${escapeHtml(item.school)}</span><span class="cv-item-date">${escapeHtml(item.date)}</span></div>
                <div class="cv-item-subtitle">${escapeHtml(item.degree)}</div>
            </div>`
    },
    projects: {
        editorId: 'projects-list',
        previewId: 'p-projects-list',
        sectionId: 'sec-projects',
        template: () => ({ id: Date.now() + Math.random(), name: '', role: '', link: '', desc: '' }),
        fields: [
            { key: 'name', placeholder: { tr: 'Proje Adı', en: 'Project Name' }, type: 'text' },
            { key: 'role', placeholder: { tr: 'Teknolojiler / Rol (Örn: React, Node.js)', en: 'Technologies / Role (e.g. React, Node.js)' }, type: 'text' },
            { key: 'link', placeholder: { tr: 'Proje Linki (Opsiyonel)', en: 'Project Link (Optional)' }, type: 'text' },
            { key: 'desc', placeholder: { tr: 'Kısa Açıklama', en: 'Short Description' }, type: 'textarea' }
        ],
        renderPreview: (item) => `
            <div class="cv-item">
                <div class="cv-item-title"><span>${escapeHtml(item.name)}</span></div>
                ${item.role ? `<div class="cv-item-subtitle">${escapeHtml(item.role)}</div>` : ''}
                ${item.link ? `<div class="cv-item-link">${escapeHtml(item.link)}</div>` : ''}
                ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : ''}
            </div>`
    },
    skills: {
        editorId: 'skills-list',
        previewId: 'p-skills-list',
        sectionId: 'sec-skills',
        compact: true,
        template: () => ({ id: Date.now() + Math.random(), name: '' }),
        fields: [{ key: 'name', placeholder: { tr: 'Yetenek (Örn: JavaScript)', en: 'Skill (e.g. JavaScript)' }, type: 'text' }],
        renderPreview: (item) => `<li>${escapeHtml(item.name)}</li>`
    },
    languages: {
        editorId: 'languages-list',
        previewId: 'p-languages-list',
        sectionId: 'sec-languages',
        template: () => ({ id: Date.now() + Math.random(), name: '', level: '' }),
        fields: [
            { key: 'name', placeholder: { tr: 'Dil (Örn: İngilizce)', en: 'Language (e.g. English)' }, type: 'text' },
            { key: 'level', placeholder: { tr: 'Seviye (Örn: C1 / İleri)', en: 'Level (e.g. C1 / Fluent)' }, type: 'text' }
        ],
        renderPreview: (item) => `<li><span>${escapeHtml(item.name)}</span><span>${escapeHtml(item.level)}</span></li>`
    },
    certificates: {
        editorId: 'certificates-list',
        previewId: 'p-certificates-list',
        sectionId: 'sec-certificates',
        template: () => ({ id: Date.now() + Math.random(), name: '', issuer: '', date: '' }),
        fields: [
            { key: 'name', placeholder: { tr: 'Sertifika Adı', en: 'Certificate Name' }, type: 'text' },
            { key: 'issuer', placeholder: { tr: 'Veren Kurum', en: 'Issuing Organization' }, type: 'text' },
            { key: 'date', placeholder: { tr: 'Yıl', en: 'Year' }, type: 'text' }
        ],
        renderPreview: (item) => `
            <div class="cv-item">
                <div class="cv-item-title"><span>${escapeHtml(item.name)}</span><span class="cv-item-date">${escapeHtml(item.date)}</span></div>
                ${item.issuer ? `<div class="cv-item-subtitle">${escapeHtml(item.issuer)}</div>` : ''}
            </div>`
    },
    references: {
        editorId: 'references-list',
        previewId: 'p-references-list',
        sectionId: 'sec-references',
        template: () => ({ id: Date.now() + Math.random(), name: '', title: '', contact: '' }),
        fields: [
            { key: 'name', placeholder: { tr: 'Ad Soyad', en: 'Full Name' }, type: 'text' },
            { key: 'title', placeholder: { tr: 'Ünvan / Şirket', en: 'Title / Company' }, type: 'text' },
            { key: 'contact', placeholder: { tr: 'İletişim (E-posta / Telefon)', en: 'Contact (Email / Phone)' }, type: 'text' }
        ],
        renderPreview: (item) => `
            <div class="cv-item">
                <div class="cv-item-title"><span>${escapeHtml(item.name)}</span></div>
                ${item.title ? `<div class="cv-item-subtitle">${escapeHtml(item.title)}</div>` : ''}
                ${item.contact ? `<p style="font-size: 0.88em;">${escapeHtml(item.contact)}</p>` : ''}
            </div>`
    }
};

function defaultDesign() {
    return {
        layout: 'modern',
        colors: { accent: '#2563eb', text: '#1f2937', bg: '#ffffff', secondary: '#f3f4f6' },
        font: 'template',
        fontSize: 10.5,
        lineHeight: 1.5,
        padding: 10
    };
}

function defaultSections() {
    return {
        mainOrder: ['summary', 'experience', 'education', 'projects'],
        sideOrder: ['skills', 'languages', 'certificates', 'references'],
        visibility: {
            summary: true,
            experience: true,
            education: true,
            projects: true,
            skills: true,
            languages: true,
            certificates: true,
            references: true
        }
    };
}

function createEmptyProfile(name = 'Varsayılan CV') {
    return {
        id: 'prof_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        name,
        lang: 'tr',
        staticData: {
            fullname: '', jobtitle: '', phone: '', email: '', address: '',
            linkedin: '', github: '', website: '', summary: '',
            photo: '', photoShape: 'circle', showQr: false, qrSource: 'auto'
        },
        lists: {
            experiences: [], educations: [], projects: [],
            skills: [], languages: [], certificates: [], references: []
        },
        design: defaultDesign(),
        sections: defaultSections()
    };
}

// App State
let appState = {
    activeProfileId: null,
    profiles: []
};

function activeProfile() {
    let p = appState.profiles.find((x) => x.id === appState.activeProfileId);
    if (!p) {
        p = appState.profiles[0];
        if (p) appState.activeProfileId = p.id;
    }
    return p;
}

// DOM Elements
const designBtn = document.getElementById('design-btn');
const closeDesignBtn = document.getElementById('close-design-btn');
const designModal = document.getElementById('design-modal');
const templateItems = document.querySelectorAll('.template-item');
const cvPaper = document.getElementById('cv-paper');
const profileSelect = document.getElementById('profile-select');

const colorInputs = {
    accent: document.getElementById('color-accent'),
    text: document.getElementById('color-text'),
    bg: document.getElementById('color-bg'),
    secondary: document.getElementById('color-secondary')
};

const fontSelect = document.getElementById('font-family-select');
const fontSizeRange = document.getElementById('font-size-range');
const lineHeightRange = document.getElementById('line-height-range');
const pagePaddingRange = document.getElementById('page-padding-range');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    renderPalettePresets();
    setupEventListeners();
    syncProfileUI();
    registerServiceWorker();
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
}

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderPalettePresets() {
    const container = document.getElementById('palette-presets');
    const prof = activeProfile();
    const isEn = prof && prof.lang === 'en';
    container.innerHTML = PALETTE_PRESETS.map((p, idx) => `
        <button type="button" class="palette-btn" data-palette-idx="${idx}">
            <div class="palette-dots">
                <span class="palette-dot" style="background:${p.accent}"></span>
                <span class="palette-dot" style="background:${p.text}"></span>
                <span class="palette-dot" style="background:${p.bg}"></span>
                <span class="palette-dot" style="background:${p.secondary}"></span>
            </div>
            <span>${isEn ? p.nameEn : p.nameTr}</span>
        </button>
    `).join('');

    container.querySelectorAll('.palette-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const preset = PALETTE_PRESETS[Number(btn.dataset.paletteIdx)];
            const current = activeProfile();
            current.design.colors = {
                accent: preset.accent,
                text: preset.text,
                bg: preset.bg,
                secondary: preset.secondary
            };
            applyDesign();
            saveToStorage();
        });
    });
}

// Event Listeners
function setupEventListeners() {
    // Tab Switching
    document.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => switchTab(e.currentTarget.dataset.tab));
    });

    // Language Toggle
    document.getElementById('lang-toggle-btn').addEventListener('click', toggleLanguage);
    document.getElementById('preview-lang-btn').addEventListener('click', toggleLanguage);

    // Design Modal
    designBtn.addEventListener('click', () => designModal.classList.remove('hidden'));
    closeDesignBtn.addEventListener('click', () => designModal.classList.add('hidden'));
    designModal.addEventListener('click', (e) => {
        if (e.target === designModal) designModal.classList.add('hidden');
    });

    // Template Selection
    templateItems.forEach((item) => {
        item.addEventListener('click', () => setTemplate(item.dataset.layout));
    });

    // Color Pickers
    Object.keys(colorInputs).forEach((key) => {
        colorInputs[key].addEventListener('input', (e) => {
            activeProfile().design.colors[key] = e.target.value;
            applyDesign();
            saveToStorage();
        });
    });

    // Typography & Spacing
    fontSelect.addEventListener('change', (e) => {
        activeProfile().design.font = e.target.value;
        applyDesign();
        saveToStorage();
    });
    fontSizeRange.addEventListener('input', (e) => {
        activeProfile().design.fontSize = parseFloat(e.target.value);
        applyDesign();
        saveToStorage();
    });
    lineHeightRange.addEventListener('input', (e) => {
        activeProfile().design.lineHeight = parseFloat(e.target.value);
        applyDesign();
        saveToStorage();
    });
    pagePaddingRange.addEventListener('input', (e) => {
        activeProfile().design.padding = parseInt(e.target.value, 10);
        applyDesign();
        saveToStorage();
    });

    document.getElementById('reset-design-btn').addEventListener('click', () => {
        activeProfile().design = defaultDesign();
        applyDesign();
        saveToStorage();
    });

    // Static Form Inputs
    STATIC_TEXT_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', (e) => {
            activeProfile().staticData[id] = e.target.value;
            renderStaticPreview();
            renderQR();
            saveToStorage();
        });
    });

    // Photo Controls
    const photoInput = document.getElementById('photo-upload');
    document.getElementById('upload-photo-btn').addEventListener('click', () => photoInput.click());
    photoInput.addEventListener('change', handlePhotoUpload);
    document.getElementById('remove-photo-btn').addEventListener('click', () => {
        activeProfile().staticData.photo = '';
        renderPhoto();
        saveToStorage();
    });
    document.getElementById('photo-shape').addEventListener('change', (e) => {
        activeProfile().staticData.photoShape = e.target.value;
        renderPhoto();
        saveToStorage();
    });

    // QR Controls
    document.getElementById('show-qr').addEventListener('change', (e) => {
        activeProfile().staticData.showQr = e.target.checked;
        renderQR();
        saveToStorage();
    });
    document.getElementById('qr-source').addEventListener('change', (e) => {
        activeProfile().staticData.qrSource = e.target.value;
        renderQR();
        saveToStorage();
    });

    // Profile Management
    profileSelect.addEventListener('change', (e) => {
        appState.activeProfileId = e.target.value;
        saveToStorage();
        syncProfileUI();
    });
    document.getElementById('new-profile-btn').addEventListener('click', createNewProfile);
    document.getElementById('dup-profile-btn').addEventListener('click', duplicateProfile);
    document.getElementById('rename-profile-btn').addEventListener('click', renameProfile);
    document.getElementById('delete-profile-btn').addEventListener('click', deleteProfile);

    // Utilities: Demo, JSON Export/Import, Clear
    document.getElementById('fill-demo-btn').addEventListener('click', fillDemoData);
    document.getElementById('export-json-btn').addEventListener('click', exportJSON);
    const importInput = document.getElementById('import-json-input');
    document.getElementById('import-json-btn').addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', importJSON);
    document.getElementById('clear-data-btn').addEventListener('click', clearActiveProfile);

    window.addEventListener('resize', fitPreviewToScreen);
    window.addEventListener('afterprint', fitPreviewToScreen);
}

function syncProfileUI() {
    const prof = activeProfile();

    // Populate profile dropdown
    profileSelect.innerHTML = appState.profiles
        .map((p) => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)}</option>`)
        .join('');
    profileSelect.value = prof.id;

    // Populate static fields
    STATIC_TEXT_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = prof.staticData[id] || '';
    });
    document.getElementById('photo-shape').value = prof.staticData.photoShape || 'circle';
    document.getElementById('show-qr').checked = Boolean(prof.staticData.showQr);
    document.getElementById('qr-source').value = prof.staticData.qrSource || 'auto';

    applyLanguage();
    renderAllLists();
    renderStaticPreview();
    renderPhoto();
    renderQR();
    applySectionOrderAndVisibility();
    applyDesign();
    fitPreviewToScreen();
}

// Photo Handling (Resize client-side so localStorage stays lightweight)
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
            const maxDim = 260;
            const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
            const w = Math.round(img.width * scale);
            const h = Math.round(img.height * scale);
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            activeProfile().staticData.photo = canvas.toDataURL('image/jpeg', 0.85);
            renderPhoto();
            saveToStorage();
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
}

function renderPhoto() {
    const { photo, photoShape } = activeProfile().staticData;
    const editorImg = document.getElementById('editor-photo-preview');
    const editorPlaceholder = document.getElementById('editor-photo-placeholder');
    const removeBtn = document.getElementById('remove-photo-btn');
    const editorBox = editorImg.parentElement;

    const previewWrap = document.getElementById('p-photo-wrap');
    const previewImg = document.getElementById('p-photo');

    if (photo) {
        editorImg.src = photo;
        editorImg.classList.remove('hidden');
        editorPlaceholder.classList.add('hidden');
        removeBtn.classList.remove('hidden');

        previewImg.src = photo;
        previewWrap.classList.remove('hidden');
    } else {
        editorImg.src = '';
        editorImg.classList.add('hidden');
        editorPlaceholder.classList.remove('hidden');
        removeBtn.classList.add('hidden');

        previewImg.src = '';
        previewWrap.classList.add('hidden');
    }

    const isRounded = photoShape === 'rounded';
    previewWrap.classList.toggle('shape-rounded', isRounded);
    editorBox.style.borderRadius = isRounded ? '10px' : '50%';
}

// QR Rendering
function normalizeUrl(val) {
    const trimmed = (val || '').trim();
    if (!trimmed) return '';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) return trimmed;
    return 'https://' + trimmed;
}

function renderQR() {
    const s = activeProfile().staticData;
    const wrap = document.getElementById('p-qr-wrap');
    const img = document.getElementById('p-qr-img');
    const labelEl = document.getElementById('p-qr-label');

    if (!s.showQr || typeof window.generateQRDataURL !== 'function') {
        wrap.classList.add('hidden');
        return;
    }

    const dict = I18N[activeProfile().lang || 'tr'] || I18N.tr;
    let raw = '';
    let label = '';
    const src = s.qrSource || 'auto';

    if (src === 'website' && s.website) {
        raw = normalizeUrl(s.website);
        label = dict.qrPortfolioLabel;
    } else if (src === 'linkedin' && s.linkedin) {
        raw = normalizeUrl(s.linkedin);
        label = 'LinkedIn';
    } else if (src === 'github' && s.github) {
        raw = normalizeUrl(s.github);
        label = 'GitHub';
    } else if (src === 'email' && s.email) {
        raw = 'mailto:' + s.email.trim();
        label = dict.qrEmail;
    } else if (src === 'auto') {
        if (s.website) { raw = normalizeUrl(s.website); label = dict.qrWebLabel; }
        else if (s.linkedin) { raw = normalizeUrl(s.linkedin); label = 'LinkedIn'; }
        else if (s.github) { raw = normalizeUrl(s.github); label = 'GitHub'; }
        else if (s.email) { raw = 'mailto:' + s.email.trim(); label = dict.qrEmail; }
    }

    if (!raw) {
        wrap.classList.add('hidden');
        return;
    }

    const dataUrl = window.generateQRDataURL(raw, 160, '#111827', '#ffffff');
    if (dataUrl) {
        img.src = dataUrl;
        labelEl.textContent = label;
        wrap.classList.remove('hidden');
    } else {
        wrap.classList.add('hidden');
    }
}

// Language Logic
function toggleLanguage() {
    const prof = activeProfile();
    prof.lang = prof.lang === 'tr' ? 'en' : 'tr';

    // If built-in demo data is active, keep its sample texts in sync with chosen language
    if (prof.staticData.fullname === 'Ahmet Yılmaz' && prof.staticData.email === 'ahmet.yilmaz@example.com') {
        applyDemoDataToProfile(prof);
        STATIC_TEXT_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.value = prof.staticData[id] || '';
        });
    }

    applyLanguage();
    renderAllLists();
    renderStaticPreview();
    renderQR();
    saveToStorage();
}

function setTextWithIcon(selector, iconName, text) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = `<span class="material-icons-round">${iconName}</span> ${escapeHtml(text)}`;
}

function setFieldMeta(inputId, labelText, placeholderText) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (labelText && input.previousElementSibling && input.previousElementSibling.tagName === 'LABEL') {
        input.previousElementSibling.textContent = labelText;
    }
    if (placeholderText !== undefined) {
        input.placeholder = placeholderText;
    }
}

function applyLanguage() {
    const lang = activeProfile().lang || 'tr';
    const dict = I18N[lang] || I18N.tr;
    document.documentElement.lang = lang;

    // Header & Tabs
    setTextWithIcon('.header-content h1', 'description', dict.appTitle);
    const editorTab = document.querySelector('.tab-btn[data-tab="editor"]');
    const previewTab = document.querySelector('.tab-btn[data-tab="preview"]');
    if (editorTab) editorTab.textContent = dict.tabEditor;
    if (previewTab) previewTab.textContent = dict.tabPreview;
    document.getElementById('lang-toggle-btn').textContent = lang.toUpperCase();
    document.getElementById('preview-lang-label').textContent = dict.langLabel;

    // Design Modal
    const modalTitle = document.querySelector('#design-modal .modal-header h2');
    if (modalTitle) modalTitle.textContent = dict.designSettings;
    const modalHeadings = document.querySelectorAll('#design-modal .modal-body > h3');
    if (modalHeadings[0]) modalHeadings[0].textContent = dict.templateSelect;
    if (modalHeadings[1]) modalHeadings[1].textContent = dict.palettePresets;
    if (modalHeadings[2]) modalHeadings[2].textContent = dict.customColors;
    if (modalHeadings[3]) modalHeadings[3].textContent = dict.typography;

    renderPalettePresets();

    const colorLabels = document.querySelectorAll('#design-modal .color-control label');
    const colorKeys = ['colorAccent', 'colorText', 'colorBg', 'colorSecondary'];
    colorKeys.forEach((k, i) => {
        if (colorLabels[i]) colorLabels[i].textContent = dict[k];
    });

    const fontLabel = document.querySelector('.typography-settings .input-group label');
    if (fontLabel) fontLabel.textContent = dict.fontFamily;
    const templateFontOpt = document.querySelector('#font-family-select option[value="template"]');
    if (templateFontOpt) templateFontOpt.textContent = dict.fontTemplate;

    const rangeLabels = document.querySelectorAll('.typography-settings .range-control label');
    const rangeKeys = ['fontSizeLabel', 'lineHeightLabel', 'pagePaddingLabel'];
    rangeKeys.forEach((k, i) => {
        if (rangeLabels[i] && rangeLabels[i].childNodes[0]) {
            rangeLabels[i].childNodes[0].textContent = dict[k] + ' ';
        }
    });
    setTextWithIcon('#reset-design-btn', 'restart_alt', dict.resetDesign);

    // Editor Profile Toolbar & Utilities
    const profileLabel = document.querySelector('label[for="profile-select"]');
    if (profileLabel) profileLabel.textContent = dict.activeProfile;
    setTextWithIcon('#fill-demo-btn', 'auto_fix_high', dict.fillDemo);
    setTextWithIcon('#export-json-btn', 'download', dict.exportJson);
    setTextWithIcon('#import-json-btn', 'upload', dict.importJson);
    setTextWithIcon('#clear-data-btn', 'delete_sweep', dict.clearBtn);

    // Personal Info Card & Photo/QR
    const personalCardTitle = document.querySelector('#editor .card:nth-of-type(2) .card-title');
    if (personalCardTitle) personalCardTitle.textContent = dict.personalInfo;
    setTextWithIcon('#upload-photo-btn', 'add_a_photo', dict.uploadPhoto);
    setTextWithIcon('#remove-photo-btn', 'hide_image', dict.removePhoto);
    const shapeLabel = document.querySelector('label[for="photo-shape"]');
    if (shapeLabel) shapeLabel.textContent = dict.photoShape;
    const shapeCircleOpt = document.querySelector('#photo-shape option[value="circle"]');
    const shapeRoundedOpt = document.querySelector('#photo-shape option[value="rounded"]');
    if (shapeCircleOpt) shapeCircleOpt.textContent = dict.shapeCircle;
    if (shapeRoundedOpt) shapeRoundedOpt.textContent = dict.shapeRounded;

    setFieldMeta('fullname', dict.lblFullname, dict.phFullname);
    setFieldMeta('jobtitle', dict.lblJobtitle, dict.phJobtitle);
    setFieldMeta('phone', dict.lblPhone, dict.phPhone);
    setFieldMeta('email', dict.lblEmail, dict.phEmail);
    setFieldMeta('address', dict.lblAddress, dict.phAddress);
    setFieldMeta('linkedin', dict.lblLinkedin);
    setFieldMeta('github', dict.lblGithub);
    setFieldMeta('website', dict.lblWebsite, dict.phWebsite);

    const showQrText = document.querySelector('#show-qr + span');
    if (showQrText) showQrText.textContent = dict.showQr;
    const qrOpts = {
        auto: dict.qrAuto,
        website: dict.qrWebsite,
        linkedin: dict.qrLinkedin,
        github: dict.qrGithub,
        email: dict.qrEmail
    };
    Object.keys(qrOpts).forEach((val) => {
        const opt = document.querySelector(`#qr-source option[value="${val}"]`);
        if (opt) opt.textContent = qrOpts[val];
    });

    // Editor Section Cards & Buttons
    const summaryTitle = document.querySelector('.card[data-section="summary"] .card-title');
    if (summaryTitle) summaryTitle.textContent = dict.summaryCard;
    const summaryInput = document.getElementById('summary');
    if (summaryInput) summaryInput.placeholder = dict.phSummary;

    ['experience', 'education', 'projects', 'skills', 'languages', 'certificates', 'references'].forEach((secKey) => {
        const card = document.querySelector(`.card[data-section="${secKey}"]`);
        if (!card) return;
        const h2 = card.querySelector('.card-title');
        if (h2 && h2.childNodes[0]) h2.childNodes[0].textContent = dict[secKey] + ' ';
        const addBtn = card.querySelector('.add-btn');
        if (addBtn) addBtn.textContent = dict.addBtn;
    });

    const goPreviewBtn = document.querySelector('.action-bar-bottom button');
    if (goPreviewBtn) goPreviewBtn.textContent = dict.goToPreview;

    // Preview Toolbar & Footer
    setTextWithIcon('button[onclick="downloadWord()"]', 'description', dict.downloadWord);
    setTextWithIcon('button[onclick="printCV()"]', 'picture_as_pdf', dict.downloadPdf);
    const previewHint = document.querySelector('.preview-hint');
    if (previewHint) previewHint.textContent = dict.previewHint;
    const footer = document.querySelector('.app-footer');
    if (footer) footer.innerHTML = dict.privacyFooter;

    // CV Paper Section Headings
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });
}

// Section Ordering & Visibility
window.moveSection = function (col, secId, dir) {
    const sections = activeProfile().sections;
    const arr = col === 'main' ? sections.mainOrder : sections.sideOrder;
    const idx = arr.indexOf(secId);
    const targetIdx = idx + dir;
    if (idx === -1 || targetIdx < 0 || targetIdx >= arr.length) return;

    [arr[idx], arr[targetIdx]] = [arr[targetIdx], arr[idx]];
    applySectionOrderAndVisibility();
    saveToStorage();
};

window.toggleSectionVis = function (secId) {
    const vis = activeProfile().sections.visibility;
    vis[secId] = !vis[secId];
    applySectionOrderAndVisibility();
    saveToStorage();
};

function applySectionOrderAndVisibility() {
    const prof = activeProfile();
    const { mainOrder, sideOrder, visibility } = prof.sections;

    const mainEditor = document.getElementById('main-cards-container');
    const sideEditor = document.getElementById('side-cards-container');
    const mainPreview = document.getElementById('p-main-col');
    const sidePreview = document.getElementById('p-side-col');

    mainOrder.forEach((secId) => {
        const eCard = mainEditor.querySelector(`.card[data-section="${secId}"]`);
        const pSec = document.getElementById(`sec-${secId}`);
        if (eCard) mainEditor.appendChild(eCard);
        if (pSec) mainPreview.appendChild(pSec);
    });

    sideOrder.forEach((secId) => {
        const eCard = sideEditor.querySelector(`.card[data-section="${secId}"]`);
        const pSec = document.getElementById(`sec-${secId}`);
        if (eCard) sideEditor.appendChild(eCard);
        if (pSec) sidePreview.appendChild(pSec);
    });

    // Apply visibility to editor cards, buttons, and preview sections
    Object.keys(visibility).forEach((secId) => {
        const isVis = visibility[secId] !== false;
        const eCard = document.querySelector(`.card[data-section="${secId}"]`);
        const btn = document.querySelector(`.vis-btn[data-vis="${secId}"]`);
        if (eCard) eCard.classList.toggle('section-hidden', !isVis);
        if (btn) {
            btn.classList.toggle('is-off', !isVis);
            btn.querySelector('.material-icons-round').textContent = isVis ? 'visibility' : 'visibility_off';
        }
    });

    refreshSectionVisibilityInPreview();
}

function refreshSectionVisibilityInPreview() {
    const prof = activeProfile();
    const vis = prof.sections.visibility;

    // Summary visibility depends on toggle + non-empty text
    const sumSec = document.getElementById('sec-summary');
    const hasSummary = Boolean((prof.staticData.summary || '').trim());
    sumSec.style.display = vis.summary && hasSummary ? 'block' : 'none';

    // List sections visibility depend on toggle + non-empty items
    Object.keys(LIST_CONFIG).forEach((listKey) => {
        const cfg = LIST_CONFIG[listKey];
        const secKey = cfg.sectionId.replace('sec-', '');
        const hasItems = (prof.lists[listKey] || []).length > 0;
        const secEl = document.getElementById(cfg.sectionId);
        if (secEl) secEl.style.display = vis[secKey] && hasItems ? 'block' : 'none';
    });
}

// Design Logic
function setTemplate(layoutName) {
    activeProfile().design.layout = layoutName;
    applyDesign();
    saveToStorage();
}

function applyDesign() {
    const d = activeProfile().design;

    templateItems.forEach((t) => {
        t.classList.toggle('active', t.dataset.layout === d.layout);
    });

    cvPaper.className = 'cv-paper';
    cvPaper.classList.add(d.layout || 'modern');

    if (d.font && d.font !== 'template') {
        cvPaper.classList.add('custom-font');
        document.documentElement.style.setProperty('--cv-font-override', d.font);
    } else {
        document.documentElement.style.removeProperty('--cv-font-override');
    }

    document.documentElement.style.setProperty('--cv-accent', d.colors.accent);
    document.documentElement.style.setProperty('--cv-text', d.colors.text);
    document.documentElement.style.setProperty('--cv-bg', d.colors.bg);
    document.documentElement.style.setProperty('--cv-secondary-bg', d.colors.secondary);
    document.documentElement.style.setProperty('--cv-font-size', (d.fontSize || 10.5) + 'pt');
    document.documentElement.style.setProperty('--cv-line-height', d.lineHeight || 1.5);
    document.documentElement.style.setProperty('--cv-padding', (d.padding || 10) + 'mm');

    // Sync controls
    colorInputs.accent.value = d.colors.accent;
    colorInputs.text.value = d.colors.text;
    colorInputs.bg.value = d.colors.bg;
    colorInputs.secondary.value = d.colors.secondary;

    fontSelect.value = d.font || 'template';
    fontSizeRange.value = d.fontSize || 10.5;
    lineHeightRange.value = d.lineHeight || 1.5;
    pagePaddingRange.value = d.padding || 10;

    document.getElementById('font-size-val').textContent = (d.fontSize || 10.5) + 'pt';
    document.getElementById('line-height-val').textContent = d.lineHeight || 1.5;
    document.getElementById('page-padding-val').textContent = (d.padding || 10) + 'mm';

    fitPreviewToScreen();
}

function fitPreviewToScreen() {
    const previewSec = document.getElementById('preview');
    const container = document.querySelector('.cv-paper-container');
    const stage = document.getElementById('cv-scale-stage');
    if (!previewSec || !container || !stage || !previewSec.classList.contains('active')) return;

    cvPaper.style.transform = '';
    cvPaper.style.transformOrigin = '';
    stage.style.width = '';
    stage.style.height = '';

    const style = getComputedStyle(container);
    const padX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const availableWidth = container.clientWidth - padX;
    const paperWidth = cvPaper.offsetWidth;
    const paperHeight = cvPaper.offsetHeight;

    if (paperWidth > 0 && availableWidth > 0 && availableWidth < paperWidth) {
        const scale = availableWidth / paperWidth;
        cvPaper.style.transform = `scale(${scale})`;
        cvPaper.style.transformOrigin = 'top left';
        stage.style.width = `${Math.floor(paperWidth * scale)}px`;
        stage.style.height = `${Math.ceil(paperHeight * scale)}px`;
    }
}

// Tab Logic
window.switchTab = function (tabId) {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));

    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');

    if (tabId === 'preview') {
        requestAnimationFrame(fitPreviewToScreen);
    }
};

// Dynamic List Helpers (Unified)
function addListItem(listKey) {
    const prof = activeProfile();
    prof.lists[listKey].push(LIST_CONFIG[listKey].template());
    renderListEditor(listKey);
    renderListPreview(listKey);
    saveToStorage();
}

window.addExperience = () => addListItem('experiences');
window.addEducation = () => addListItem('educations');
window.addProject = () => addListItem('projects');
window.addSkill = () => addListItem('skills');
window.addLanguage = () => addListItem('languages');
window.addCertificate = () => addListItem('certificates');
window.addReference = () => addListItem('references');

window.removeListItem = function (listKey, id) {
    const prof = activeProfile();
    prof.lists[listKey] = prof.lists[listKey].filter((x) => x.id !== id);
    renderListEditor(listKey);
    renderListPreview(listKey);
    saveToStorage();
};

window.updateListItem = function (listKey, id, field, value) {
    const item = activeProfile().lists[listKey].find((x) => x.id === id);
    if (item) {
        item[field] = value;
        renderListPreview(listKey);
        saveToStorage();
    }
};

function renderListEditor(listKey) {
    const cfg = LIST_CONFIG[listKey];
    const prof = activeProfile();
    const lang = prof.lang || 'tr';
    const items = prof.lists[listKey] || [];
    const container = document.getElementById(cfg.editorId);

    const getPh = (f) => (typeof f.placeholder === 'object' ? (f.placeholder[lang] || f.placeholder.tr) : f.placeholder);

    if (cfg.compact) {
        container.innerHTML = items.map((item) => `
            <div class="dynamic-item" style="margin-bottom: 0.5rem; border:none; padding:0; display:flex; gap:0.5rem; align-items:center;">
                <input type="text" placeholder="${escapeHtml(getPh(cfg.fields[0]))}" value="${escapeHtml(item.name)}"
                    oninput="updateListItem('${listKey}', ${item.id}, 'name', this.value)">
                <button type="button" class="remove-btn" style="position:static;" onclick="removeListItem('${listKey}', ${item.id})">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
        `).join('');
        return;
    }

    container.innerHTML = items.map((item) => {
        const fieldsHtml = cfg.fields.map((f) => {
            const val = escapeHtml(item[f.key] || '');
            const ph = escapeHtml(getPh(f));
            if (f.type === 'textarea') {
                return `<div class="input-group"><textarea placeholder="${ph}" rows="2" oninput="updateListItem('${listKey}', ${item.id}, '${f.key}', this.value)">${val}</textarea></div>`;
            }
            return `<div class="input-group"><input type="text" placeholder="${ph}" value="${val}" oninput="updateListItem('${listKey}', ${item.id}, '${f.key}', this.value)"></div>`;
        }).join('');

        return `
            <div class="dynamic-item">
                <button type="button" class="remove-btn" onclick="removeListItem('${listKey}', ${item.id})">
                    <span class="material-icons-round">delete</span>
                </button>
                ${fieldsHtml}
            </div>`;
    }).join('');
}

function renderListPreview(listKey) {
    const cfg = LIST_CONFIG[listKey];
    const items = activeProfile().lists[listKey] || [];
    const container = document.getElementById(cfg.previewId);

    if (listKey === 'languages') {
        container.classList.add('cv-lang-list');
    }
    container.innerHTML = items.map(cfg.renderPreview).join('');
    refreshSectionVisibilityInPreview();
}

function renderAllLists() {
    Object.keys(LIST_CONFIG).forEach((key) => {
        renderListEditor(key);
        renderListPreview(key);
    });
    fitPreviewToScreen();
}

function renderStaticPreview() {
    const prof = activeProfile();
    const s = prof.staticData;
    const dict = I18N[prof.lang || 'tr'];

    document.getElementById('p-fullname').textContent = (s.fullname || '').trim() || dict.defaultName;
    document.getElementById('p-jobtitle').textContent = (s.jobtitle || '').trim() || dict.defaultTitle;
    document.getElementById('p-phone').textContent = s.phone ? `📞 ${s.phone}` : '';
    document.getElementById('p-email').textContent = s.email ? `✉️ ${s.email}` : '';
    document.getElementById('p-address').textContent = s.address ? `📍 ${s.address}` : '';
    document.getElementById('p-linkedin').textContent = s.linkedin ? `🔗 ${s.linkedin.replace(/^https?:\/\//, '')}` : '';
    document.getElementById('p-github').textContent = s.github ? `💻 ${s.github.replace(/^https?:\/\//, '')}` : '';
    document.getElementById('p-website').textContent = s.website ? `🌐 ${s.website.replace(/^https?:\/\//, '')}` : '';
    document.getElementById('p-summary').textContent = s.summary || '';

    refreshSectionVisibilityInPreview();
    fitPreviewToScreen();
}

// Profile CRUD
function createNewProfile() {
    const name = prompt('Yeni CV taslağının adı:', `CV Taslağı ${appState.profiles.length + 1}`);
    if (!name || !name.trim()) return;
    const p = createEmptyProfile(name.trim());
    appState.profiles.push(p);
    appState.activeProfileId = p.id;
    saveToStorage();
    syncProfileUI();
}

function duplicateProfile() {
    const current = activeProfile();
    const copy = JSON.parse(JSON.stringify(current));
    copy.id = 'prof_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    copy.name = `${current.name} (Kopya)`;
    appState.profiles.push(copy);
    appState.activeProfileId = copy.id;
    saveToStorage();
    syncProfileUI();
}

function renameProfile() {
    const current = activeProfile();
    const newName = prompt('Taslak adını güncelleyin:', current.name);
    if (!newName || !newName.trim()) return;
    current.name = newName.trim();
    saveToStorage();
    syncProfileUI();
}

function deleteProfile() {
    if (appState.profiles.length <= 1) {
        alert('En az bir taslak bulunmalıdır.');
        return;
    }
    const current = activeProfile();
    if (!confirm(`"${current.name}" taslağını silmek istediğinize emin misiniz?`)) return;
    appState.profiles = appState.profiles.filter((x) => x.id !== current.id);
    appState.activeProfileId = appState.profiles[0].id;
    saveToStorage();
    syncProfileUI();
}

// Demo Data, Clear, JSON Export / Import
function applyDemoDataToProfile(prof) {
    const isEn = prof.lang === 'en';
    prof.staticData = {
        ...prof.staticData,
        fullname: 'Ahmet Yılmaz',
        jobtitle: isEn ? 'Senior Software Developer' : 'Kıdemli Yazılım Geliştirici',
        phone: '+90 555 123 45 67',
        email: 'ahmet.yilmaz@example.com',
        address: isEn ? 'Istanbul, Turkey' : 'İstanbul, Türkiye',
        linkedin: 'https://linkedin.com/in/ahmetyilmaz',
        github: 'https://github.com/ahmetyilmaz',
        website: 'https://ahmetyilmaz.dev',
        summary: isEn
            ? 'Full-stack developer with 6+ years of experience building scalable web applications and mobile-first user interfaces.'
            : 'Ölçeklenebilir web uygulamaları ve mobil odaklı arayüzler geliştirme konusunda 6+ yıl deneyimli yazılım geliştirici.',
        showQr: true,
        qrSource: 'website'
    };

    prof.lists = {
        experiences: [
            {
                id: Date.now() + 1,
                title: isEn ? 'Senior Frontend Developer' : 'Kıdemli Frontend Geliştirici',
                company: 'Teknoloji A.Ş.',
                date: isEn ? '2022 - Present' : '2022 - Günümüz',
                desc: isEn
                    ? 'Led UI architecture migration and improved page load speed by 40%.'
                    : 'Arayüz mimarisi dönüşümüne liderlik etti ve sayfa açılış hızını %40 artırdı.'
            },
            {
                id: Date.now() + 2,
                title: isEn ? 'Web Developer' : 'Web Geliştirici',
                company: 'Dijital Çözümler Ltd.',
                date: '2019 - 2022',
                desc: isEn
                    ? 'Developed responsive web portals and REST API integrations.'
                    : 'Mobil uyumlu web portalları ve REST API entegrasyonları geliştirdi.'
            }
        ],
        educations: [
            {
                id: Date.now() + 3,
                school: isEn ? 'Istanbul Technical University' : 'İstanbul Teknik Üniversitesi',
                degree: isEn ? 'B.S. in Computer Engineering' : 'Bilgisayar Mühendisliği (Lisans)',
                date: '2015 - 2019'
            }
        ],
        projects: [
            {
                id: Date.now() + 4,
                name: 'CV Builder PWA',
                role: 'HTML5, CSS3, Vanilla JS',
                link: 'https://github.com/ahmetyilmaz/cv-builder',
                desc: isEn
                    ? 'Offline-ready progressive web app with PDF & Word export.'
                    : 'Çevrimdışı çalışabilen, PDF ve Word çıktısı üreten PWA CV uygulaması.'
            }
        ],
        skills: [
            { id: Date.now() + 5, name: 'JavaScript (ES6+)' },
            { id: Date.now() + 6, name: 'TypeScript' },
            { id: Date.now() + 7, name: 'React & Next.js' },
            { id: Date.now() + 8, name: 'Node.js' },
            { id: Date.now() + 9, name: 'CSS3 / Responsive UI' }
        ],
        languages: [
            { id: Date.now() + 10, name: isEn ? 'Turkish' : 'Türkçe', level: isEn ? 'Native' : 'Anadil' },
            { id: Date.now() + 11, name: isEn ? 'English' : 'İngilizce', level: isEn ? 'C1 Advanced' : 'C1 İleri' }
        ],
        certificates: [
            { id: Date.now() + 12, name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2023' }
        ],
        references: [
            { id: Date.now() + 13, name: 'Mehmet Demir', title: 'CTO, Teknoloji A.Ş.', contact: 'mehmet@teknoloji.example' }
        ]
    };
}

function fillDemoData() {
    const prof = activeProfile();
    const hasContent = Boolean(prof.staticData.fullname || prof.lists.experiences.length);
    const confirmMsg = prof.lang === 'en'
        ? 'Overwrite current draft with sample data?'
        : 'Mevcut taslağın üzerine örnek veriler yazılsın mı?';
    if (hasContent && !confirm(confirmMsg)) return;

    applyDemoDataToProfile(prof);
    saveToStorage();
    syncProfileUI();
}

function clearActiveProfile() {
    if (!confirm('Aktif CV taslağındaki tüm bilgiler temizlensin mi?')) return;
    const current = activeProfile();
    const fresh = createEmptyProfile(current.name);
    fresh.id = current.id;
    fresh.design = current.design;
    const idx = appState.profiles.findIndex((x) => x.id === current.id);
    appState.profiles[idx] = fresh;
    saveToStorage();
    syncProfileUI();
}

function exportJSON() {
    const payload = {
        exportedAt: new Date().toISOString(),
        version: 2,
        appState
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cv_yedek_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const parsed = JSON.parse(ev.target.result);
            if (parsed && parsed.appState && Array.isArray(parsed.appState.profiles) && parsed.appState.profiles.length > 0) {
                appState = parsed.appState;
                appState.profiles = appState.profiles.map(normalizeProfile);
                saveToStorage();
                syncProfileUI();
                alert('Yedek başarıyla yüklendi!');
            } else {
                alert('Geçersiz CV yedek dosyası.');
            }
        } catch {
            alert('Dosya okunamadı. Geçerli bir JSON dosyası seçin.');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

const REMOVED_LAYOUT_MAP = {
    minimal: 'nordic',
    academic: 'ats-pro',
    creative: 'metro'
};

function normalizeProfile(raw) {
    const base = createEmptyProfile(raw.name || 'CV Taslağı');
    const rawLayout = raw.design && raw.design.layout;
    const mappedLayout = REMOVED_LAYOUT_MAP[rawLayout] || rawLayout || base.design.layout;

    return {
        ...base,
        ...raw,
        staticData: { ...base.staticData, ...(raw.staticData || {}) },
        lists: { ...base.lists, ...(raw.lists || {}) },
        design: {
            ...base.design,
            ...(raw.design || {}),
            layout: mappedLayout,
            colors: { ...base.design.colors, ...((raw.design && raw.design.colors) || {}) }
        },
        sections: {
            ...base.sections,
            ...(raw.sections || {}),
            visibility: { ...base.sections.visibility, ...((raw.sections && raw.sections.visibility) || {}) }
        }
    };
}

// Storage & Legacy Migration
function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch {
        // Handle quota exceeded gracefully (e.g. very large storage)
    }
}

function loadFromStorage() {
    const savedV2 = localStorage.getItem(STORAGE_KEY);
    if (savedV2) {
        try {
            const parsed = JSON.parse(savedV2);
            if (parsed && Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
                appState.profiles = parsed.profiles.map(normalizeProfile);
                appState.activeProfileId = parsed.activeProfileId || appState.profiles[0].id;
                return;
            }
        } catch {
            // Fall through to migration / fresh profile
        }
    }

    // Migrate v1 single-CV storage if present
    const prof = createEmptyProfile('Varsayılan CV');
    try {
        const oldStatic = JSON.parse(localStorage.getItem('cv_builder_static'));
        if (oldStatic) prof.staticData = { ...prof.staticData, ...oldStatic };
        const oldLists = JSON.parse(localStorage.getItem('cv_builder_lists'));
        if (oldLists) prof.lists = { ...prof.lists, ...oldLists };
        const oldDesign = JSON.parse(localStorage.getItem('cv_builder_design'));
        if (oldDesign) {
            prof.design = {
                ...prof.design,
                ...oldDesign,
                colors: { ...prof.design.colors, ...(oldDesign.colors || {}) }
            };
        }
    } catch {
        // Ignore malformed legacy data
    }

    const normalized = normalizeProfile(prof);
    appState = {
        activeProfileId: normalized.id,
        profiles: [normalized]
    };
    saveToStorage();
}

// Export Functions
window.printCV = function () {
    const stage = document.getElementById('cv-scale-stage');
    cvPaper.style.transform = '';
    cvPaper.style.transformOrigin = '';
    if (stage) {
        stage.style.width = '';
        stage.style.height = '';
    }
    window.print();
    setTimeout(fitPreviewToScreen, 300);
};

window.downloadWord = function () {
    const d = activeProfile().design;
    const inlineStyles = `
        <style>
            body { font-family: Arial, sans-serif; color: ${d.colors.text}; background: ${d.colors.bg}; font-size: ${d.fontSize}pt; line-height: ${d.lineHeight}; }
            h1 { color: ${d.colors.accent}; margin-bottom: 4px; }
            h3 { color: ${d.colors.accent}; border-bottom: 1px solid #cccccc; padding-bottom: 3px; margin-top: 14px; }
            .cv-photo-wrap img { width: 85px; height: 85px; }
            .cv-qr-wrap img { width: 70px; height: 70px; }
            .cv-qr-label { font-size: 8pt; color: #555555; }
            .cv-item { margin-bottom: 10px; }
            .cv-item-title { font-weight: bold; }
            .cv-item-date { color: #666666; font-weight: normal; }
            .cv-item-subtitle { color: #444444; font-style: italic; }
            .hidden { display: none; }
        </style>`;

    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>CV</title>" + inlineStyles + "</head><body>";

    const clone = document.getElementById('cv-paper').cloneNode(true);
    clone.querySelectorAll('.hidden').forEach((el) => el.remove());

    const sourceHTML = header + clone.innerHTML + '</body></html>';
    const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);

    const fileDownload = document.createElement('a');
    document.body.appendChild(fileDownload);
    fileDownload.href = url;
    const safeName = (activeProfile().staticData.fullname || 'cv').trim().replace(/\s+/g, '_').toLowerCase();
    fileDownload.download = `${safeName || 'cv'}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
    URL.revokeObjectURL(url);
};
