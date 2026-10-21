# Laporan Bedah Kode AI: `modul-1-warung-soto.html`

Baris mengacu pada berkas asli `modul-1-warung-soto.html` (32 baris).
Validasi dilakukan dengan W3C Validator (Direct Input).

| No | Baris | Masalah | Dampak | Perbaikan |
|----|-------|---------|--------|-----------|
| 1 | 1 | Tidak ada `<!DOCTYPE html>` | Peramban masuk *quirks mode* | Tambahkan `<!DOCTYPE html>` di baris pertama |
| 2 | 1 | `<html>` tanpa atribut `lang` | Pembaca layar dan mesin pencari tidak tahu bahasa halaman | Tulis `<html lang="id">` |
| 3 | 2 | `<head>` tanpa `<meta charset="UTF-8">` | Huruf non-ASCII dapat tampil rusak | Tambahkan `<meta charset="UTF-8">` |
| 4 | 2 | Tidak ada `<meta name="viewport">` | Tampilan di ponsel tidak menyesuaikan lebar layar | Tambahkan meta viewport |
| 5 | 6 | Kepala halaman memakai `<div class="header">` | Pembaca layar tidak mengenali bagian kepala | Ganti dengan `<header>` |
| 6 | 8 | Menu navigasi memakai `<div class="menu">` | Kumpulan tautan navigasi tidak dikenali sebagai navigasi | Bungkus dengan `<nav aria-label="Navigasi utama">` dan `<ul>` |
| 7 | 12 | Isi utama memakai `<div class="konten">` | Pengguna pembaca layar tidak bisa melompat ke isi utama | Ganti dengan `<main>` |
| 8 | 14 | `<h4>` langsung setelah `<h1>` (heading melompat) | Struktur halaman membingungkan pembaca layar | Gunakan `<h2>` untuk "Menu Favorit" |
| 9 | 15 | `<img>` tanpa `alt` | Gambar tidak terdeskripsikan bagi pembaca layar | Tambahkan `alt` yang bermakna, misalnya "Ilustrasi Soto Banjar" |
| 10 | 17 | `<img>` tanpa `alt` | Sama seperti baris 15 | Tambahkan `alt="Ilustrasi Ketupat Kandangan"` |
| 11 | 9 | Tautan `href="#"` pada Home, Menu, dan Kontak | Tautan tidak menuju tujuan yang jelas | Ganti dengan id bagian yang sesuai, misalnya `href="#menu"` |
| 12 | 28 | Tautan teks "di sini" | Tautan tidak bermakna saat dibaca tanpa konteks | Tulis "Lihat lokasi warung di Google Maps" |
| 13 | 22-25 | Kolom `<input>` tanpa `<label>` | Pengguna tidak tahu isi kolom; area klik kecil | Tambahkan `<label for="...">` pada setiap kolom |
| 14 | 22-25 | Kolom `<input>` tanpa atribut `name` | Data isian tidak ikut terkirim | Tambahkan `name` pada setiap kolom |
| 15 | 23-25 | Nomor HP, tanggal, dan jumlah memakai `type="text"` | Papan ketik tidak sesuai; tidak ada validasi bawaan | Gunakan `tel`, `date`, dan `number` |
| 16 | 21 | `<form>` tanpa `action` dan `method` | Perilaku pengiriman tidak eksplisit | Tulis `action` dan `method` secara eksplisit (Modul 1 memakai `action="#"` dan `method="get"`) |
| 17 | 30 | Kaki halaman memakai `<div class="footer">` | Kaki halaman tidak dikenali sebagai `footer` | Ganti dengan `<footer>` |

**Temuan tambahan (di luar tabel):** `<b>` dipakai untuk nama menu (lebih baik `<strong>` atau `<h3>`), `<br><br>` dipakai untuk jarak (atur dengan CSS di Modul 2), dan tidak ada `<meta name="description">` (berpengaruh pada SEO).

## Prompt yang lebih baik

> Buatkan halaman HTML5 lengkap untuk warung soto Banjar, dengan `<!DOCTYPE html>`, `lang="id"`, meta charset dan viewport, serta elemen semantik `header`, `nav`, `main`, dan `footer`. Gunakan heading berurutan mulai dari `h1` tanpa melompat, beri `alt` yang deskriptif pada setiap gambar, dan pastikan setiap tautan menjelaskan tujuannya. Untuk formulir reservasi, sediakan `label` dan atribut `name` pada setiap kolom, serta gunakan tipe input yang sesuai (`tel`, `date`, `number`). Jangan tambahkan CSS atau JavaScript.

**Mengapa prompt ini lebih baik:** prompt awal ("buatkan halaman web untuk warung soto") tidak menyebut standar apa pun, sehingga AI bebas memilih struktur. Prompt di atas menyebut elemen, atribut, dan aturan aksesibilitas yang harus dipenuhi, serta batasan (tanpa CSS/JS) agar hasilnya sesuai dengan materi Modul 1.
