# JAGAIN Landing Page

> **"Jangan Cuma Punya, JAGAIN. Catat · Ingat · Rawat."**  
> Solusi digital lokal-first untuk mencatat aset berharga, mengingat tanggung jawab perawatannya, dan merawat apa yang berarti bagi Anda dan keluarga.

---

## 🌟 Tentang Proyek

Repositori ini memuat berkas situs **Landing Page resmi untuk JAGAIN**, dirancang dengan pendekatan *clean*, modern, dan berpedoman penuh pada **JAGAIN Brand Identity & Color Guidelines**.

### Fitur Utama Landing Page:
- **Bilingual (Alih Bahasa)**: Tombol *switch* bahasa instan `[ ID | EN ]` pada navbar dengan persistensi `localStorage`.
- **Sesuai Color & Style Guide**: Menggunakan paleta warna utama Teal (`#14B8A6`, `#0F766E`), Accent Blue (`#3B82F6`), Dark Navy (`#111827`), serta Mint (`#ECFDF5`).
- **Aset & Identitas Resmi**:
  - Logo horizontal resmi pada navbar & footer
  - Vaficon resmi (`vaficon_cerah.png`)
  - Ikon kategori visual (`car.png`, `motor.png`, `laptop.png`, `gadget.png`, `house.png`, `watch.png`)
- **Tombol Unduh Google Drive**: Mengarah ke tautan unduhan file APK Android via Google Drive.
- **Section Informasi Kontak**: Tersedia tautan langsung WhatsApp dan Email beserta tombol *Salin ke Papan Klip* (*Copy to Clipboard*).
- **Surat Tim & Dukungan GoPay**: Memuat pesan filosofis dari pembuat serta dukungan sukarela.

---

## 📁 Struktur Direktori

```text
LP_JAGAIN/
├── assets/
│   ├── fonts/               # Poppins & Inter web fonts
│   ├── icons/               # Logo resmi, vaficon, & logo gopay
│   └── images/              # Ikon kategori aset (mobil, motor, dsb.)
├── css/
│   └── style.css            # Stylesheet utama & responsive rules
├── js/
│   └── main.js              # Logika switch bahasa, unduh, & clipboard
├── UI Guideline/            # Poster panduan logo & warna resmi
├── index.html               # Halaman utama landing page
├── README.md                # Dokumentasi proyek
└── Surat dari Tim JAGAIN.txt # Pesan filosofi tim
```

---

## 🚀 Cara Menjalankan

### 1. Membuka Langsung di Browser
Cukup buka berkas `index.html` dengan klik dua kali (atau *Open with* browser favorit Anda).

### 2. Menggunakan Local Web Server
```bash
# Menggunakan npx serve
npx serve .

# Atau menggunakan Python jika tersedia
python -m http.server 8000
```
Buka browser pada alamat `http://localhost:3000` atau `http://localhost:8000`.

---

## ⚙️ Konfigurasi URL Google Drive & Kontak

Buka berkas [`js/main.js`](js/main.js) untuk mengubah tautan unduhan dan informasi kontak:

```javascript
// Tautan folder APK Google Drive JAGAIN:
const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/folders/1mBO7EFfQIpnAVun0_sgjWmS8NEbQCOGo?usp=sharing';

// Informasi kontak:
const CONTACT_EMAIL = 'smughbowf@gmail.com';
const CONTACT_PHONE = '+62851 797 65891';
```

---

## 📄 Lisensi & Hak Cipta

© 2026 JAGAIN. Jaga yang Berarti. Semua hak cipta dilindungi undang-undang.
