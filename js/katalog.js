// ======================================================================
// katalog.js - Modul 3: menampilkan katalog dengan DOM
// Praktikum Pemrograman Web 1 - Sasirangan Banua
// ======================================================================

// 1. Data katalog: array yang berisi objek-objek produk
const katalog = [
    {
        id: 1,
        nama: "Kain Motif Gigi Haruan",
        kategori: "kain",
        harga: 185000,
        gambar: "img/gigi-haruan.jpg",
        deskripsi: "Kain katun 2 meter bermotif zig-zag menyerupai gigi ikan haruan.",
    },
    {
        id: 2,
        nama: "Kain Motif Kambang Kacang",
        kategori: "kain",
        harga: 175000,
        gambar: "img/kambang-kacang.jpg",
        deskripsi: "Motif bunga kacang yang melambangkan keakraban dan kerukunan.",
    },
    {
        id: 3,
        nama: "Selendang Iris Pudak",
        kategori: "aksesoris",
        harga: 120000,
        gambar: "img/iris-pudak.jpg",
        deskripsi: "Selendang ringan bermotif irisan daun pudak (pandan).",
    },
    {
        id: 4,
        nama: "Kain Motif Bayam Raja",
        kategori: "kain",
        harga: 200000,
        gambar: "img/bayam-raja.jpg",
        deskripsi: "Kain dengan motif garis vertikal yang melambangkan martabat dan wibawa.",
    },
    {
        id: 5,
        nama: "Kemeja Naga Balimbur",
        kategori: "pakaian",
        harga: 250000,
        gambar: "img/naga-balimbur.jpg",
        deskripsi: "Kemeja pria lengan pendek dengan motif naga balimbur yang menggambarkan kegembiraan.",
    },
    {
        id: 6,
        nama: "Kain Motif Bintang Bahambur",
        kategori: "kain",
        harga: 190000,
        gambar: "img/bintang-bahambur.jpg",
        deskripsi: "Kain sasirangan motif bintang bertaburan, melambangkan harapan yang cerah.",
    },
    {
        id: 7,
        nama: "Tas Tote Tampuk Manggis",
        kategori: "tas",
        harga: 150000,
        gambar: "img/tampuk-manggis.jpg",
        deskripsi: "Tas kanvas dengan hiasan motif tampuk manggis yang melambangkan kejujuran.",
    },
    {
        id: 8,
        nama: "Kain Motif Daun Jeruju",
        kategori: "kain",
        harga: 180000,
        gambar: "img/daun-jeruju.jpg",
        deskripsi: "Kain katun motif daun jeruju yang secara tradisional dipercaya sebagai penolak bala.",
    },
    {
        id: 9,
        nama: "Selendang Kangkung Kaombakan",
        kategori: "aksesoris",
        harga: 130000,
        gambar: "img/kangkung-kaombakan.jpg",
        deskripsi: "Selendang berbahan lembut dengan motif kangkung yang terkena riak ombak air.",
    },
    {
        id: 10,
        nama: "Kain Motif Kulat Karikit",
        kategori: "kain",
        harga: 185000,
        gambar: "img/kulat-karikit.jpg",
        deskripsi: "Kain dengan motif menyerupai jamur kecil yang hidup mandiri menempel pada dahan.",
    },
    {
        id: 11,
        nama: "Dompet Ombak Sinapur Karang",
        kategori: "aksesoris",
        harga: 85000,
        gambar: "img/ombak-sinapur.jpg",
        deskripsi: "Dompet tangan sasirangan dengan motif ombak yang menerjang karang.",
    },
    {
        id: 12,
        nama: "Kain Motif Turun Dayang",
        kategori: "kain",
        harga: 210000,
        gambar: "img/turun-dayang.jpg",
        deskripsi: "Kain premium dengan motif turun dayang yang elegan dan klasik.",
    },
    {
        id: 13,
        nama: "Hijab Ramak Sahang",
        kategori: "pakaian",
        harga: 95000,
        gambar: "img/ramak-sahang.jpg",
        deskripsi: "Hijab segiempat sasirangan dengan motif lada hancur (ramak sahang) yang simpel.",
    },
    {
        id: 14,
        nama: "Kain Motif Ular Lidi",
        kategori: "kain",
        harga: 175000,
        gambar: "img/ular-lidi.jpg",
        deskripsi: "Kain dengan motif garis bergelombang menyerupai ular lidi, perlambang kecerdikan.",
    },
    {
        id: 15,
        nama: "Blus Wanita Gagatas",
        kategori: "pakaian",
        harga: 230000,
        gambar: "img/gagatas.jpg",
        deskripsi: "Blus kerja elegan dengan hiasan motif gagatas atau bungas (cantik).",
    },
    {
        id: 16,
        nama: "Kain Motif Dara Manginang",
        kategori: "kain",
        harga: 195000,
        gambar: "img/dara-manginang.jpg",
        deskripsi: "Kain sasirangan motif dara manginang yang melambangkan tradisi luhur menyirih.",
    }
];

// 2. Ambil elemen-elemen HTML yang akan dimanipulasi
const daftarKatalog = document.querySelector("#daftar-katalog");
const inputCari = document.querySelector("#cari");
const tombolFilter = document.querySelectorAll(".tombol-filter");
const infoJumlah = document.querySelector("#info-jumlah");

// 3. Status filter yang sedang aktif
let kategoriAktif = "semua";

// 4. Mengubah angka menjadi format Rupiah, contoh: 185000 -> "Rp 185.000"
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(angka);
}

// 5. Membuat elemen <article> untuk satu produk
function buatKartu(produk) {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const gambar = document.createElement("img");
    gambar.src = produk.gambar;
    gambar.alt = produk.nama;
    gambar.width = 600;
    gambar.height = 400;
    gambar.loading = "lazy";

    const isi = document.createElement("div");
    isi.className = "kartu-isi";

    const label = document.createElement("span");
    label.className = "label-kategori";
    label.textContent = produk.kategori;

    const judul = document.createElement("h3");
    judul.textContent = produk.nama;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = produk.deskripsi;

    const harga = document.createElement("p");
    harga.className = "harga";
    harga.textContent = formatRupiah(produk.harga);

    isi.append(label, judul, deskripsi, harga);
    kartu.append(gambar, isi);
    return kartu;
}

// 6. Menampilkan sekumpulan produk ke dalam #daftar-katalog
function tampilkanKatalog(daftarProduk) {
    daftarKatalog.replaceChildren(); // kosongkan isi sebelumnya

    if (daftarProduk.length === 0) {
        const kosong = document.createElement("p");
        kosong.textContent = "Produk tidak ditemukan. Coba kata kunci lain.";
        daftarKatalog.append(kosong);
    }

    daftarProduk.forEach((produk) => {
        daftarKatalog.append(buatKartu(produk));
    });

    infoJumlah.textContent = `Menampilkan ${daftarProduk.length} dari ${katalog.length} produk`;
}

// 7. Menyaring katalog berdasarkan kata kunci DAN kategori aktif
function saringKatalog() {
    const kataKunci = inputCari.value.trim().toLowerCase();

    const hasil = katalog.filter((produk) => {
        const cocokKategori = kategoriAktif === "semua" || produk.kategori === kategoriAktif;
        const cocokKata =
            produk.nama.toLowerCase().includes(kataKunci) || produk.deskripsi.toLowerCase().includes(kataKunci);
        return cocokKategori && cocokKata;
    });

    tampilkanKatalog(hasil);
}

// 8. Event: setiap kali pengguna mengetik di kotak pencarian
inputCari.addEventListener("input", saringKatalog);

// 9. Event: klik tombol filter kategori
tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", () => {
        kategoriAktif = tombol.dataset.kategori;

        // perbarui tampilan tombol: hanya satu yang aktif
        tombolFilter.forEach((t) => {
            t.classList.remove("aktif");
            t.setAttribute("aria-pressed", "false");
        });
        tombol.classList.add("aktif");
        tombol.setAttribute("aria-pressed", "true");

        saringKatalog();
    });
});

// 10. Tampilkan semua produk ketika halaman pertama kali dibuka
tampilkanKatalog(katalog); 