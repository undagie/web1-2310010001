# Contoh Jawaban Tugas Pendahuluan dan Refleksi Modul 1

Contoh ini menunjukkan tingkat jawaban yang diharapkan. Tugas pendahuluan dikerjakan tulisan tangan, dan refleksi ditulis dengan kalimat sendiri.

## Tugas Pendahuluan

1. **Dari mengetik alamat sampai halaman tampil.** Peramban mencari alamat IP lewat DNS, mengirim permintaan HTTP ke server, menerima respons berupa berkas HTML, lalu meminta CSS, JavaScript, dan gambar yang dibutuhkan. Setelah semua berkas diterima, peramban menyusun dan menggambar halaman di layar.
2. **Peran HTML, CSS, dan JavaScript.** HTML menentukan struktur dan isi, misalnya judul produk dan formulir pesanan. CSS mengatur tampilan, misalnya warna dan tata letak kartu produk. JavaScript mengatur perilaku, misalnya memvalidasi formulir sebelum dikirim.
3. **Kerangka dokumen HTML5.** `<!DOCTYPE html>` menandai dokumen HTML5. `<html lang="id">` menyatakan bahasa. `<head>` berisi metadata: `charset`, `viewport`, `description`, dan `title`. `<body>` berisi semua yang tampil di layar.
4. **Enam elemen semantik.** `<header>` untuk kepala, `<nav>` untuk navigasi, `<main>` untuk isi utama, `<section>` untuk bagian bertema, `<article>` untuk konten mandiri seperti kartu produk, dan `<footer>` untuk kaki halaman.
5. **Jalur absolut dan relatif.** Absolut: `https://developer.mozilla.org/`, alamat lengkap yang menuju situs lain. Relatif: `img/gigi-haruan.svg`, yang dimulai dari folder tempat berkas berada.
6. **Mengapa `<input>` perlu `<label>`.** Label membuat pembaca layar membacakan nama kolom saat kolom difokuskan, dan klik pada label memfokuskan kolom. Pengguna pembaca layar dan pengguna ponsel yang sulit mengetik paling dirugikan jika label tidak ada.
7. **Commit.** Commit adalah titik simpan berisi sekumpulan perubahan dan pesan. Riwayat commit membuktikan proses pengerjaan dan memudahkan kembali ke versi sebelumnya jika terjadi kesalahan.
8. **Tema proyek.** Tema: Sasirangan Banua, UMKM kain sasirangan di Banjarmasin. Enam item: enam produk kain dan busana, jam buka galeri, lokasi galeri, menu Beranda/Katalog/Tentang/Pesan, formulir pemesanan, dan pertanyaan umum.

## Refleksi (tanpa AI)

1. **Paling mudah dan paling sulit.** Paling mudah adalah memahami pasangan tag pembuka dan penutup. Paling sulit adalah menata heading agar urutannya tidak melompat, karena harus memikirkan struktur isi, bukan ukuran huruf.
2. **Masalah paling berbahaya.** Kolom `<input>` tanpa `<label>` dan tanpa `name`. Pengguna tidak tahu isi kolom, dan data yang sudah diisi tidak ikut terkirim tanpa ada pesan kesalahan yang jelas.
3. **Bagian yang ingin dibantu AI.** Mencari cara menata kartu produk dalam kolom (bagian CSS di Modul 2). Hasilnya dipastikan benar dengan membuka halaman di peramban dan memvalidasi kode di W3C Validator.
