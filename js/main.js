/**
 * JAGAIN Landing Page Scripts
 * Includes:
 * 1. Bilingual Language Switcher (Indonesian & English) with localStorage persistence
 * 2. Google Drive download button handler
 * 3. Copy-to-clipboard handlers with animated toast notifications
 * 4. Responsive mobile navigation toggle
 * 5. Dynamic header shadow on scroll
 */

// =============================================================================
// 1. CONFIGURATION
// =============================================================================
// Ganti URL di bawah ini dengan tautan Google Drive / Folder APK Anda yang sesungguhnya
const GOOGLE_DRIVE_URL = 'https://drive.google.com';

// Nomor Kontak & Dukungan
const CONTACT_EMAIL = 'smughbowf@gmail.com';
const CONTACT_PHONE = '+62851 797 65891';
const GOPAY_NUMBER = '+62 851-7976-5891';

// =============================================================================
// 2. DICTIONARY TRANSLATIONS (ID & EN)
// =============================================================================
const translations = {
  id: {
    // Navbar
    'nav.about': 'Tentang',
    'nav.values': 'Nilai Brand',
    'nav.features': 'Fitur',
    'nav.categories': 'Kategori Aset',
    'nav.philosophy': 'Filosofi',
    'nav.letter': 'Surat Tim',
    'nav.contact': 'Kontak',
    'nav.download': 'Unduh APK',

    // Hero Section
    'hero.badge': 'Aplikasi Manajemen Aset Pribadi & Keluarga · Local-First',
    'hero.tagline': 'Catat · Ingat · Rawat',
    'hero.title_pre': 'Jangan Cuma Punya,',
    'hero.title_post': 'JAGAIN.',
    'hero.desc': 'Aplikasi lokal-first untuk mencatat aset penting, mengingat tanggung jawab perawatannya, dan menyimpan riwayat tindakan. Tanpa iklan, tanpa pelacakan — data aman seutuhnya di perangkat Anda.',
    'hero.btn_download': 'Unduh via Google Drive',
    'hero.btn_learn': 'Pelajari Fitur',
    'hero.meta_note': 'Format .APK Android • Unduh langsung dari Google Drive',
    'hero.chip_local': '100% Local-First',
    'hero.chip_noads': 'Bebas Iklan & Pelacak',
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
    'values.title': 'Kenapa JAGAIN Diciptakan?',
    'values.subtitle': 'Bagi kami, aset bukan sekadar tumpukan barang yang kita miliki, melainkan bagian dari perjalanan hidup, hasil kerja keras, dan penopang keseharian.',
    'val.1.title': 'Private & Secure',
    'val.1.desc': 'Data kamu, di perangkat kamu. Privasi adalah prioritas mutlak. JAGAIN bekerja local-first tanpa menyimpan data ke server pihak ketiga.',
    'val.2.title': 'Meaningful Ownership',
    'val.2.desc': 'Aset bukan sekadar benda, tapi cerita hidup. Kami membantu Anda merawat barang berharga agar manfaatnya bertahan lama.',
    'val.3.title': 'Care & Responsibility',
    'val.3.desc': 'Membantu kamu mengingat tanggung jawab perawatan, jadwal servis berkala, dan perpanjangan dokumen tepat waktu.',
    'val.4.title': 'For Individuals & Families',
    'val.4.desc': 'Dirancang hangat dan sederhana untuk kamu dan orang-orang yang kamu sayangi, tanpa kerumitan teknis.',

    // Features Section
    'features.badge': 'Fitur Unggulan',
    'features.title': 'Semua yang Dibutuhkan untuk Menjaga Aset',
    'features.subtitle': 'Dirancang praktis, ringan, dan fokus pada hal terpenting dalam pemeliharaan barang berharga.',
    'feat.1.title': 'Pencatatan Aset Rinci',
    'feat.1.desc': 'Dokumentasikan setiap aset mulai dari merk, tipe, tahun, nomor rangka/seri, lokasi penyimpanan, hingga catatan khusus.',
    'feat.1.p1': 'Kategori kendaraan, gadget, properti, & lainnya',
    'feat.1.p2': 'Status kondisi: Baik, Perlu Perhatian, Kritis',
    'feat.2.title': 'Pengingat Perawatan Pintar',
    'feat.2.desc': 'Hindari kerusakan fatal akibat lupa servis. Jadwalkan pengingat ganti oli, servis AC, garansi, maupun perpanjangan pajak.',
    'feat.2.p1': 'Notifikasi lokal tanpa butuh koneksi internet',
    'feat.2.p2': 'Kustomisasi interval berkala atau tanggal khusus',
    'feat.3.title': 'Riwayat Aktivitas & Servis',
    'feat.3.desc': 'Setiap tindakan perawatan yang telah selesai dicatat rapi. Ketahui kapan terakhir diservis dan bengkel mana yang menangani.',
    'feat.3.p1': 'Histori tindakan yang kronologis dan transparan',
    'feat.3.p2': 'Membantu menjaga nilai jual kembali aset',
    'feat.4.title': 'Local-First & Super Cepat',
    'feat.4.desc': 'Aplikasi langsung terbuka dalam hitungan detik. Tersimpan di database lokal (SQLite/Drift) dengan keamanan terjamin.',
    'feat.4.p1': 'Dapat digunakan sepenuhnya saat offline',
    'feat.4.p2': 'Cadangan dan ekspor data kapan saja',

    // Categories Section
    'categories.badge': 'Kategori Fleksibel',
    'categories.title': 'Apa Saja yang Bisa Dijaga?',
    'categories.subtitle': 'JAGAIN siap mengelola berbagai ragam aset berharga dalam kehidupan pribadi maupun rumah tangga Anda.',
    'cat.1.title': 'Mobil & Kendaraan Roda Empat',
    'cat.1.desc': 'Pantau odometer, tanggal ganti oli, tune up mesin, rotasi ban, dan perpanjangan STNK serta uji emisi berkala.',
    'cat.1.ex_label': 'Contoh hal yang dicatat:',
    'cat.1.tag1': 'Ganti Oli',
    'cat.1.tag2': 'Pajak STNK',
    'cat.1.tag3': 'Klaim Asuransi',
    'cat.2.title': 'Sepeda Motor',
    'cat.2.desc': 'Perawatan rantai/CVT, ganti kampas rem, servis rutin bengkel resmi, dan masa berlaku dokumen kendaraan.',
    'cat.2.ex_label': 'Contoh hal yang dicatat:',
    'cat.2.tag1': 'Servis CVT',
    'cat.2.tag2': 'Aki & Oli',
    'cat.2.tag3': 'Pajak Tahunan',
    'cat.3.title': 'Laptop & Komputer Kerja',
    'cat.3.desc': 'Kelola masa berlaku garansi, jadwal pembersihan thermal paste, backup data, dan riwayat upgrade hardware.',
    'cat.3.ex_label': 'Contoh hal yang dicatat:',
    'cat.3.tag1': 'Garansi Resmi',
    'cat.3.tag2': 'Siklus Baterai',
    'cat.3.tag3': 'Backup Rutin',
    'cat.4.title': 'Smartphone & Gadget',
    'cat.4.desc': 'Catat IMEI, tanggal pembelian, garansi proteksi layar, dan aksesoris penunjang produktivitas sehari-hari.',
    'cat.4.ex_label': 'Contoh hal yang dicatat:',
    'cat.4.tag1': 'Masa Garansi',
    'cat.4.tag2': 'Nomor IMEI',
    'cat.4.tag3': 'Faktur Pembelian',
    'cat.5.title': 'Rumah & Properti',
    'cat.5.desc': 'Jadwal servis AC berkala, pengurasan tandon air, inspeksi atap/bocor, dan tanggal pembayaran PBB tahunan.',
    'cat.5.ex_label': 'Contoh hal yang dicatat:',
    'cat.5.tag1': 'Cuci AC Rutin',
    'cat.5.tag2': 'Pajak PBB',
    'cat.5.tag3': 'Cek Pompa Air',
    'cat.6.title': 'Koleksi & Barang Berharga',
    'cat.6.desc': 'Jam tangan mekanik, kamera, perhiasan, atau dokumen penting keluarga seperti sertifikat dan polis.',
    'cat.6.ex_label': 'Contoh hal yang dicatat:',
    'cat.6.tag1': 'Servis Mesin Jam',
    'cat.6.tag2': 'Sertifikat Asli',
    'cat.6.tag3': 'Dry Box / Lensa',

    // Philosophy Section
    'phil.badge': 'Identitas & Filosofi',
    'phil.title': 'Makna di Balik Simbol JAGAIN',
    'phil.subtitle': 'Setiap elemen visual dirancang mencerminkan komitmen terhadap keamanan, kemudahan, dan nilai kemanusiaan.',
    'phil.card_badge': 'Desain Bermakna',
    'phil.1.title': 'Bentuk Perisai (Shield)',
    'phil.1.desc': 'Melambangkan perlindungan terpercaya, ketenangan batin, dan benteng pertahanan bagi barang-barang bernilai yang Anda miliki.',
    'phil.2.title': 'Inisial Huruf "J"',
    'phil.2.desc': 'Representasi dari identitas JAGAIN yang ramah, modern, bersahabat, dan mudah diingat oleh keluarga Indonesia.',
    'phil.3.title': 'Figur Manusia (The Person)',
    'phil.3.desc': 'Melambangkan bahwa manusia dan orang terdekat adalah inti utama. Barang dirawat demi mendukung kebahagiaan mereka.',

    // Letter Section
    'letter.badge': 'Pesan dari Pembuat',
    'letter.greeting': 'Halo, Terima Kasih Sudah Memilih JAGAIN',
    'letter.subtitle': 'Sebuah catatan terbuka dari tim pengembang',
    'letter.p1': 'JAGAIN lahir dari sebuah hal sederhana: kami ingin membantu membuat keseharian menjadi sedikit lebih mudah — membantu kita mencatat, mengingat, dan merawat apa yang kita miliki dengan lebih baik.',
    'letter.p2': 'Kami menyadari bahwa versi yang Anda gunakan saat ini masih jauh dari sempurna. Masih ada banyak hal yang bisa diperbaiki, dikembangkan, dan mungkin juga belum sesuai dengan apa yang Anda butuhkan. Dan kami tidak ingin berpura-pura bahwa semuanya sudah selesai.',
    'letter.highlight': 'Justru karena itu, kami sangat terbuka terhadap kritik, saran, ide, maupun feedback dari Anda. Setiap masukan membantu kami memahami bagaimana JAGAIN benar-benar digunakan dalam kehidupan sehari-hari.',
    'letter.p3': 'Jika Anda memiliki kebutuhan khusus dan merasa JAGAIN akan lebih berguna dengan penyesuaian tertentu, kami juga terbuka untuk berkolaborasi dan membuat versi yang lebih sesuai dengan kebutuhan Anda.',
    'letter.support_title': 'Dukungan Sukarela Tim JAGAIN (GoPay)',
    'letter.support_desc': 'Tidak ada kewajiban apa pun. Menggunakan JAGAIN atau membagikannya sudah sangat berarti bagi kami.',
    'letter.copy_gopay': 'Salin Nomor GoPay',
    'letter.sign_tagline': 'Catat. Ingat. Rawat.',
    'letter.sign_author': 'Dengan hangat, Tim JAGAIN',

    // Download CTA
    'cta.title': 'Siap Merawat Apa yang Berarti Bagi Anda?',
    'cta.desc': 'Unduh file aplikasi Android JAGAIN sekarang via Google Drive dan mulai tata jadwal perawatan aset Anda dengan lebih tenang.',
    'cta.btn': 'Unduh JAGAIN (Google Drive)',
    'cta.note': 'Aplikasi bebas iklan • 100% Local-first • Ringan & Aman',

    // Contact Section (AC 7)
    'contact.badge': 'Terhubung Langsung',
    'contact.title': 'Punya Pertanyaan, Ide, atau Ingin Berkolaborasi?',
    'contact.subtitle': 'Tim JAGAIN selalu siap mendengar dan berdiskusi. Hubungi kami melalui salah satu saluran berikut:',
    'contact.email_label': 'Surel / Email Resmi',
    'contact.email_desc': 'Kirimkan kritik, saran, proposal kolaborasi, atau laporan bug secara terperinci.',
    'contact.email_btn_send': 'Kirim Email',
    'contact.email_btn_copy': 'Salin Alamat',
    'contact.phone_label': 'WhatsApp & No. Handphone',
    'contact.phone_desc': 'Obrolan langsung dan konsultasi cepat melalui chat WhatsApp maupun panggilan.',
    'contact.phone_btn_wa': 'Chat WhatsApp',
    'contact.phone_btn_copy': 'Salin Nomor',

    // Footer
    'footer.desc': 'Aplikasi lokal-first untuk mencatat, mengingat, dan merawat aset-aset penting dalam kehidupan pribadi dan keluarga Anda.',
    'footer.tagline': 'Jaga yang Berarti.',
    'footer.col_nav': 'Navigasi',
    'footer.col_contact': 'Hubungi Kami',
    'footer.rights': '© 2026 JAGAIN. Hak cipta dilindungi undang-undang.',
    'footer.local_note': 'Dibangun dengan prinsip privasi Local-First.',

    // Toast
    'toast.copied': 'Tersalin ke papan klip!'
  },

  en: {
    // Navbar
    'nav.about': 'About',
    'nav.values': 'Brand Values',
    'nav.features': 'Features',
    'nav.categories': 'Categories',
    'nav.philosophy': 'Philosophy',
    'nav.letter': 'Dev Letter',
    'nav.contact': 'Contact',
    'nav.download': 'Download APK',

    // Hero Section
    'hero.badge': 'Personal & Family Asset Management · Local-First',
    'hero.tagline': 'Record · Remember · Care',
    'hero.title_pre': "Don't Just Own It,",
    'hero.title_post': 'JAGAIN.',
    'hero.desc': 'A local-first application to document valuable assets, keep up with maintenance duties, and track service history. No ads, no trackers — your data stays strictly on your device.',
    'hero.btn_download': 'Download via Google Drive',
    'hero.btn_learn': 'Explore Features',
    'hero.meta_note': 'Android .APK format • Direct download from Google Drive',
    'hero.chip_local': '100% Local-First',
    'hero.chip_noads': 'No Ads & No Trackers',
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
    'values.title': 'Why Was JAGAIN Created?',
    'values.subtitle': 'To us, assets are not mere physical possessions, but milestones of life, products of hard work, and backbones of daily family living.',
    'val.1.title': 'Private & Secure',
    'val.1.desc': 'Your data, on your device. Privacy is our top priority. JAGAIN functions local-first without uploading records to third-party clouds.',
    'val.2.title': 'Meaningful Ownership',
    'val.2.desc': 'Assets are living stories. We help you give valuable items proper care so their utility and beauty endure.',
    'val.3.title': 'Care & Responsibility',
    'val.3.desc': 'Reminds you of maintenance responsibilities, scheduled servicings, and timely document renewals.',
    'val.4.title': 'For Individuals & Families',
    'val.4.desc': 'Designed with warmth and simplicity for you and your loved ones, free from unnecessary technical complexity.',

    // Features Section
    'features.badge': 'Key Features',
    'features.title': 'Everything Needed to Safeguard Assets',
    'features.subtitle': 'Built to be practical, lightweight, and sharply focused on preserving what matters most.',
    'feat.1.title': 'Detailed Asset Records',
    'feat.1.desc': 'Log brands, models, production years, serial numbers, locations, and special maintenance notes effortlessly.',
    'feat.1.p1': 'Categories for vehicles, gadgets, homes, & more',
    'feat.1.p2': 'Condition tracking: Good, Needs Attention, Critical',
    'feat.2.title': 'Smart Maintenance Reminders',
    'feat.2.desc': 'Prevent costly breakdowns. Schedule reminders for oil changes, HVAC servicing, warranty expiries, or vehicle taxes.',
    'feat.2.p1': 'Local notifications that work without internet',
    'feat.2.p2': 'Custom repeating intervals or precise dates',
    'feat.3.title': 'Activity & Service History',
    'feat.3.desc': 'Every completed service action is documented cleanly. Always know when an asset was last serviced and by whom.',
    'feat.3.p1': 'Chronological, transparent action timeline',
    'feat.3.p2': 'Helps preserve asset resale value',
    'feat.4.title': 'Local-First & Blazing Fast',
    'feat.4.desc': 'The app launches in an instant. Powered by a local embedded database (SQLite/Drift) for rock-solid reliability.',
    'feat.4.p1': 'Completely usable offline anywhere',
    'feat.4.p2': 'Backup and export your records anytime',

    // Categories Section
    'categories.badge': 'Versatile Asset Types',
    'categories.title': 'What Can You Care For with JAGAIN?',
    'categories.subtitle': 'JAGAIN readily adapts to handle diverse personal and household belongings.',
    'cat.1.title': 'Cars & Four-Wheelers',
    'cat.1.desc': 'Track mileage, fluid changes, engine tune-ups, tire rotations, annual registration renewals, and inspections.',
    'cat.1.ex_label': 'Typical recorded items:',
    'cat.1.tag1': 'Oil Change',
    'cat.1.tag2': 'Road Tax',
    'cat.1.tag3': 'Insurance Claim',
    'cat.2.title': 'Motorcycles & Scooters',
    'cat.2.desc': 'Belt/chain maintenance, brake pad changes, scheduled workshop visits, and registration papers.',
    'cat.2.ex_label': 'Typical recorded items:',
    'cat.2.tag1': 'CVT Service',
    'cat.2.tag2': 'Battery & Oil',
    'cat.2.tag3': 'Yearly Tax',
    'cat.3.title': 'Laptops & Workstations',
    'cat.3.desc': 'Track manufacturer warranty terms, thermal paste renewals, data backups, and hardware upgrade logs.',
    'cat.3.ex_label': 'Typical recorded items:',
    'cat.3.tag1': 'Official Warranty',
    'cat.3.tag2': 'Battery Cycle',
    'cat.3.tag3': 'Routine Backup',
    'cat.4.title': 'Smartphones & Gadgets',
    'cat.4.desc': 'Keep IMEI numbers, purchase receipts, screen protection guarantees, and essential accessories safe.',
    'cat.4.ex_label': 'Typical recorded items:',
    'cat.4.tag1': 'Warranty Term',
    'cat.4.tag2': 'IMEI Number',
    'cat.4.tag3': 'Purchase Invoice',
    'cat.5.title': 'Homes & Properties',
    'cat.5.desc': 'Air conditioner servicing schedules, water tank cleaning, roof leak inspections, and property tax dues.',
    'cat.5.ex_label': 'Typical recorded items:',
    'cat.5.tag1': 'AC Deep Clean',
    'cat.5.tag2': 'Property Tax',
    'cat.5.tag3': 'Water Pump Check',
    'cat.6.title': 'Collectibles & Valuables',
    'cat.6.desc': 'Mechanical watches, cameras, jewelry, or critical family certificates and insurance policies.',
    'cat.6.ex_label': 'Typical recorded items:',
    'cat.6.tag1': 'Watch Overhaul',
    'cat.6.tag2': 'Authenticity Cert.',
    'cat.6.tag3': 'Dry Box / Optics',

    // Philosophy Section
    'phil.badge': 'Identity & Philosophy',
    'phil.title': 'The Meaning Behind the JAGAIN Symbol',
    'phil.subtitle': 'Every shape and hue was thoughtfully crafted to mirror security, simplicity, and human connection.',
    'phil.card_badge': 'Purposeful Design',
    'phil.1.title': 'Shield Silhouette',
    'phil.1.desc': 'Symbolizes trustworthy protection, peace of mind, and a safeguard for life’s most meaningful possessions.',
    'phil.2.title': 'The Initial "J"',
    'phil.2.desc': 'Represents the modern, dynamic, and friendly essence of JAGAIN that resonates warmly with everyday users.',
    'phil.3.title': 'Human Figure',
    'phil.3.desc': 'Highlights people and family as the ultimate center. Things are cared for so they can serve the people we love.',

    // Letter Section
    'letter.badge': 'A Note from the Creators',
    'letter.greeting': 'Hello, Thank You for Choosing JAGAIN',
    'letter.subtitle': 'An open letter from the development team',
    'letter.p1': 'JAGAIN was born out of a simple aspiration: we want to make daily life a little easier — helping us record, remember, and care for what we cherish most.',
    'letter.p2': 'We acknowledge that the current version is still growing and far from perfect. There are features to polish, ideas to explore, and needs we have yet to accommodate. And we refuse to pretend everything is finished.',
    'letter.highlight': 'That is precisely why we warmly welcome your criticism, ideas, suggestions, and feedback. Every comment guides us in understanding how JAGAIN fits into real everyday lives.',
    'letter.p3': 'If you have tailored needs or feel JAGAIN would serve you better with specific adjustments, we are delighted to collaborate and build features adapted to your workflow.',
    'letter.support_title': 'Voluntary Team Support (GoPay)',
    'letter.support_desc': 'There is absolutely no obligation. Using JAGAIN, sharing it, or cheering us on already means the world.',
    'letter.copy_gopay': 'Copy GoPay Number',
    'letter.sign_tagline': 'Record. Remember. Care.',
    'letter.sign_author': 'Warm regards, The JAGAIN Team',

    // Download CTA
    'cta.title': 'Ready to Care for What Truly Matters?',
    'cta.desc': 'Download the JAGAIN Android app via Google Drive today and begin managing your asset care effortlessly.',
    'cta.btn': 'Download JAGAIN (Google Drive)',
    'cta.note': 'Ad-free • 100% Local-first • Lightweight & Secure',

    // Contact Section (AC 7)
    'contact.badge': 'Direct Contact',
    'contact.title': 'Questions, Ideas, or Custom Inquiries?',
    'contact.subtitle': 'We would love to hear from you. Reach out to our team through any of the channels below:',
    'contact.email_label': 'Official Email',
    'contact.email_desc': 'Send in detailed suggestions, collaboration proposals, or feedback.',
    'contact.email_btn_send': 'Send Email',
    'contact.email_btn_copy': 'Copy Address',
    'contact.phone_label': 'WhatsApp & Mobile',
    'contact.phone_desc': 'Direct chat and fast consultation via WhatsApp messaging or phone call.',
    'contact.phone_btn_wa': 'Chat WhatsApp',
    'contact.phone_btn_copy': 'Copy Number',

    // Footer
    'footer.desc': 'A local-first application to document, remember, and care for important assets in your personal and family life.',
    'footer.tagline': 'Care for what matters.',
    'footer.col_nav': 'Navigation',
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

  const copyGopayBtn = document.getElementById('btn-copy-gopay');
  if (copyGopayBtn) {
    copyGopayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(GOPAY_NUMBER, currentLang === 'id' ? 'Nomor GoPay disalin: ' + GOPAY_NUMBER : 'GoPay number copied: ' + GOPAY_NUMBER);
    });
  }

  // 5. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links-menu');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 6. Header Scrolled State
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
});
