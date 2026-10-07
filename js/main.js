/**
 * JAGAIN Landing Page Scripts
 * Includes:
 * 1. Bilingual Language Switcher (Indonesian & English) with localStorage persistence
 * 2. Google Drive download button handler
 * 3. Copy-to-clipboard handlers with animated toast notifications
 * 4. Dynamic header shadow on scroll
 */

// =============================================================================
// 1. CONFIGURATION
// =============================================================================
// Tautan Google Drive Folder APK JAGAIN
const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/folders/1mBO7EFfQIpnAVun0_sgjWmS8NEbQCOGo?usp=sharing';

// Nomor Kontak Resmi
const CONTACT_EMAIL = 'smughbowf@gmail.com';
const CONTACT_PHONE = '+62851 797 65891';

// =============================================================================
// 2. DICTIONARY TRANSLATIONS (ID & EN) - CONCISE & EFFICIENT
// =============================================================================
const translations = {
  id: {
    // Navbar
    'nav.download': 'Unduh APK',

    // Hero Section
    'hero.badge': 'Aplikasi Manajemen Aset Pribadi & Keluarga · Local-First',
    'hero.tagline': 'Catat · Ingat · Rawat',
    'hero.title_pre': 'Jangan Cuma Punya,',
    'hero.title_post': 'JAGAIN.',
    'hero.desc': 'Catat aset penting, jadwalkan servis berkala, dan rawat nilainya. 100% tersimpan aman di perangkat Anda.',
    'hero.chip_local': '100% Local-First',
    'hero.chip_noads': 'Bebas Iklan',
    'hero.chip_reminder': 'Pengingat Cerdas',

    // Hero Showcase Card
    'card.user_title': 'Aset Keluarga Anda',
    'card.user_sub': 'Tersimpan aman di perangkat',
    'card.status_safe': 'Semua Terjadwal',
    'card.cat_car': 'Kendaraan',
    'card.cat_gadget': 'Gadget',
    'card.cat_house': 'Properti',
    'card.cat_watch': 'Koleksi',
    'card.reminder_1_title': 'Toyota Avanza 2021',
    'card.reminder_1_sub': 'Servis rutin 50.000 km • Ganti oli mesin',
    'card.reminder_1_badge': '5 Hari Lagi',
    'card.reminder_2_title': 'Honda Vario 160',
    'card.reminder_2_sub': 'Pajak STNK Tahunan • Perpanjangan',
    'card.reminder_2_badge': 'Perlu Perhatian',
    'card.reminder_3_title': 'MacBook Pro 14"',
    'card.reminder_3_sub': 'Kesehatan baterai normal • Siklus 142',
    'card.reminder_3_badge': 'Kondisi Baik',

    // Values Section
    'values.badge': 'Nilai & Prinsip Kami',
    'values.title': 'Kenapa JAGAIN?',
    'values.subtitle': 'Kelola apa yang Anda miliki dengan lebih bertanggung jawab.',
    'val.1.title': 'Private & Secure',
    'val.1.desc': '100% data tersimpan di perangkat Anda tanpa server pihak ketiga.',
    'val.2.title': 'Meaningful Ownership',
    'val.2.desc': 'Jaga kondisi dan performa barang berharga agar bernilai jangka panjang.',
    'val.3.title': 'Care & Responsibility',
    'val.3.desc': 'Jadwal servis berkala, pajak, dan garansi selalu terpantau tepat waktu.',
    'val.4.title': 'For Individuals & Families',
    'val.4.desc': 'Antarmuka praktis dan bersahabat untuk kebutuhan seluruh keluarga.',

    // Features Section
    'features.badge': 'Fitur Unggulan',
    'features.title': 'Semua yang Dibutuhkan untuk Menjaga Aset',
    'features.subtitle': 'Sistem praktis untuk mengelola dan merawat seluruh barang berharga.',
    'feat.1.title': 'Pencatatan Aset Rinci',
    'feat.1.desc': 'Catat merk, model, nomor seri, dan kondisi terkini setiap aset.',
    'feat.2.title': 'Pengingat Perawatan Pintar',
    'feat.2.desc': 'Notifikasi lokal tepat waktu untuk servis, pajak STNK, dan garansi.',
    'feat.3.title': 'Riwayat Aktivitas & Servis',
    'feat.3.desc': 'Histori kronologis perawatan, bengkel langganan, dan pengeluaran.',
    'feat.4.title': 'Local-First & Super Cepat',
    'feat.4.desc': 'Bekerja instan dan offline tanpa memerlukan koneksi internet.',

    // Categories Section
    'categories.badge': 'Kategori Fleksibel',
    'categories.title': 'Apa Saja yang Bisa Dijaga?',
    'categories.subtitle': 'Fleksibel untuk berbagai jenis aset pribadi dan keluarga.',
    'cat.1.title': 'Mobil',
    'cat.1.tag1': 'Ganti Oli',
    'cat.1.tag2': 'Pajak STNK',
    'cat.1.tag3': 'Klaim Asuransi',
    'cat.2.title': 'Sepeda Motor',
    'cat.2.tag1': 'Servis CVT',
    'cat.2.tag2': 'Aki & Oli',
    'cat.2.tag3': 'Pajak Tahunan',
    'cat.3.title': 'Laptop & PC',
    'cat.3.tag1': 'Garansi Resmi',
    'cat.3.tag2': 'Siklus Baterai',
    'cat.3.tag3': 'Backup Rutin',
    'cat.4.title': 'Smartphone',
    'cat.4.tag1': 'Masa Garansi',
    'cat.4.tag2': 'Nomor IMEI',
    'cat.4.tag3': 'Faktur Pembelian',
    'cat.5.title': 'Rumah & Properti',
    'cat.5.tag1': 'Cuci AC Rutin',
    'cat.5.tag2': 'Pajak PBB',
    'cat.5.tag3': 'Cek Pompa Air',
    'cat.6.title': 'Koleksi & Berharga',
    'cat.6.tag1': 'Servis Mesin Jam',
    'cat.6.tag2': 'Sertifikat Asli',
    'cat.6.tag3': 'Dry Box / Lensa',

    // Contact Section (AC 7)
    'contact.badge': 'Terhubung Langsung',
    'contact.title': 'Punya Pertanyaan atau Masukan?',
    'contact.subtitle': 'Hubungi kami melalui salah satu saluran berikut:',
    'contact.email_label': 'Surel / Email Resmi',
    'contact.email_btn_send': 'Kirim Email',
    'contact.email_btn_copy': 'Salin Alamat',
    'contact.phone_label': 'WhatsApp & No. Handphone',
    'contact.phone_btn_wa': 'Chat WhatsApp',
    'contact.phone_btn_copy': 'Salin Nomor',

    // Footer
    'footer.desc': 'Aplikasi lokal-first untuk mencatat, mengingat, dan merawat aset-aset penting Anda dan keluarga.',
    'footer.tagline': 'Jaga yang Berarti.',
    'footer.col_contact': 'Hubungi Kami',
    'footer.rights': '© 2026 JAGAIN. Hak cipta dilindungi undang-undang.',
    'footer.local_note': 'Dibangun dengan prinsip privasi Local-First.',

    // Toast
    'toast.copied': 'Tersalin ke papan klip!'
  },

  en: {
    // Navbar
    'nav.download': 'Download APK',

    // Hero Section
    'hero.badge': 'Personal & Family Asset Management · Local-First',
    'hero.tagline': 'Record · Remember · Care',
    'hero.title_pre': "Don't Just Own It,",
    'hero.title_post': 'JAGAIN.',
    'hero.desc': 'Track important assets, schedule routine maintenance, and preserve their value. 100% secure on your device.',
    'hero.chip_local': '100% Local-First',
    'hero.chip_noads': 'Ad-Free',
    'hero.chip_reminder': 'Smart Reminders',

    // Hero Showcase Card
    'card.user_title': 'Your Family Assets',
    'card.user_sub': 'Safely stored on device',
    'card.status_safe': 'All Scheduled',
    'card.cat_car': 'Vehicles',
    'card.cat_gadget': 'Gadgets',
    'card.cat_house': 'Property',
    'card.cat_watch': 'Collectibles',
    'card.reminder_1_title': 'Toyota Avanza 2021',
    'card.reminder_1_sub': 'Regular service 50,000 km • Engine oil change',
    'card.reminder_1_badge': '5 Days Left',
    'card.reminder_2_title': 'Honda Vario 160',
    'card.reminder_2_sub': 'Annual Road Tax • Renewal due',
    'card.reminder_2_badge': 'Needs Attention',
    'card.reminder_3_title': 'MacBook Pro 14"',
    'card.reminder_3_sub': 'Battery health optimal • Cycle 142',
    'card.reminder_3_badge': 'Good Condition',

    // Values Section
    'values.badge': 'Our Values & Principles',
    'values.title': 'Why JAGAIN?',
    'values.subtitle': 'Manage what you own with care and peace of mind.',
    'val.1.title': 'Private & Secure',
    'val.1.desc': '100% of data stays on your device without third-party cloud servers.',
    'val.2.title': 'Meaningful Ownership',
    'val.2.desc': 'Preserve asset condition and longevity for the long run.',
    'val.3.title': 'Care & Responsibility',
    'val.3.desc': 'Routine service, taxes, and warranties tracked right on time.',
    'val.4.title': 'For Individuals & Families',
    'val.4.desc': 'Clean, friendly interface designed for the whole family.',

    // Features Section
    'features.badge': 'Key Features',
    'features.title': 'Everything Needed to Safeguard Assets',
    'features.subtitle': 'A practical system to safeguard and care for your valuables.',
    'feat.1.title': 'Detailed Asset Records',
    'feat.1.desc': 'Log brands, serial numbers, locations, and current conditions.',
    'feat.2.title': 'Smart Maintenance Reminders',
    'feat.2.desc': 'Timely local notifications for servicing, taxes, and warranties.',
    'feat.3.title': 'Activity & Service History',
    'feat.3.desc': 'Chronological service history, workshops, and expense tracking.',
    'feat.4.title': 'Local-First & Blazing Fast',
    'feat.4.desc': 'Launches instantly and runs completely offline.',

    // Categories Section
    'categories.badge': 'Versatile Asset Types',
    'categories.title': 'What Can You Care For?',
    'categories.subtitle': 'Adapts to diverse personal and household belongings.',
    'cat.1.title': 'Cars',
    'cat.1.tag1': 'Oil Change',
    'cat.1.tag2': 'Road Tax',
    'cat.1.tag3': 'Insurance Claim',
    'cat.2.title': 'Motorcycles',
    'cat.2.tag1': 'CVT Service',
    'cat.2.tag2': 'Battery & Oil',
    'cat.2.tag3': 'Yearly Tax',
    'cat.3.title': 'Laptops & PCs',
    'cat.3.tag1': 'Official Warranty',
    'cat.3.tag2': 'Battery Cycle',
    'cat.3.tag3': 'Routine Backup',
    'cat.4.title': 'Smartphones',
    'cat.4.tag1': 'Warranty Term',
    'cat.4.tag2': 'IMEI Number',
    'cat.4.tag3': 'Purchase Invoice',
    'cat.5.title': 'Homes & Property',
    'cat.5.tag1': 'AC Deep Clean',
    'cat.5.tag2': 'Property Tax',
    'cat.5.tag3': 'Water Pump Check',
    'cat.6.title': 'Collectibles',
    'cat.6.tag1': 'Watch Overhaul',
    'cat.6.tag2': 'Authenticity Cert.',
    'cat.6.tag3': 'Dry Box / Optics',

    // Contact Section (AC 7)
    'contact.badge': 'Direct Contact',
    'contact.title': 'Questions or Feedback?',
    'contact.subtitle': 'Reach out to our team through any channel below:',
    'contact.email_label': 'Official Email',
    'contact.email_btn_send': 'Send Email',
    'contact.email_btn_copy': 'Copy Address',
    'contact.phone_label': 'WhatsApp & Mobile',
    'contact.phone_btn_wa': 'Chat WhatsApp',
    'contact.phone_btn_copy': 'Copy Number',

    // Footer
    'footer.desc': 'A local-first application to document, remember, and care for important assets in your life.',
    'footer.tagline': 'Care for what matters.',
    'footer.col_contact': 'Reach Us',
    'footer.rights': '© 2026 JAGAIN. All rights reserved.',
    'footer.local_note': 'Built with privacy-first Local-First principles.',

    // Toast
    'toast.copied': 'Copied to clipboard!'
  }
};

// =============================================================================
// 3. LANGUAGE SWITCHER IMPLEMENTATION
// =============================================================================
let currentLang = localStorage.getItem('jagain_lang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('jagain_lang', lang);
  document.documentElement.lang = lang;

  // Update UI toggles
  document.querySelectorAll('.lang-opt').forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Update all translatable elements
  const dict = translations[lang] || translations.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders if any
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });
}

function toggleLanguage() {
  const nextLang = currentLang === 'id' ? 'en' : 'id';
  applyLanguage(nextLang);
}

// =============================================================================
// 4. TOAST NOTIFICATION & CLIPBOARD UTILITY
// =============================================================================
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  const localizedMsg = message || translations[currentLang]['toast.copied'];
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span>${localizedMsg}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function copyToClipboard(text, customMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMessage);
    }).catch(() => {
      fallbackCopy(text, customMessage);
    });
  } else {
    fallbackCopy(text, customMessage);
  }
}

function fallbackCopy(text, customMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage);
  } catch (err) {
    console.error('Copy failed', err);
  }
  textArea.remove();
}

// =============================================================================
// 5. GOOGLE DRIVE DOWNLOAD ACTION
// =============================================================================
function handleDownloadClick(e) {
  e.preventDefault();
  window.open(GOOGLE_DRIVE_URL, '_blank', 'noopener,noreferrer');
}

// =============================================================================
// 6. INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Language Load
  applyLanguage(currentLang);

  // 2. Language Switcher Buttons
  const langSwitchButtons = document.querySelectorAll('.lang-switch-btn');
  langSwitchButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });

  // 3. Google Drive Download Links
  const downloadButtons = document.querySelectorAll('.btn-download-gdrive');
  downloadButtons.forEach(btn => {
    btn.addEventListener('click', handleDownloadClick);
  });

  // 4. Contact Copy Buttons (AC 7)
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(CONTACT_EMAIL, currentLang === 'id' ? 'Email disalin: ' + CONTACT_EMAIL : 'Email copied: ' + CONTACT_EMAIL);
    });
  }

  const copyPhoneBtn = document.getElementById('btn-copy-phone');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(CONTACT_PHONE, currentLang === 'id' ? 'Nomor HP disalin: ' + CONTACT_PHONE : 'Phone number copied: ' + CONTACT_PHONE);
    });
  }

  // 5. Header Scrolled State
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
});
