// jadwal-salat.js — Modul 4: mengambil data dari API publik
// API: https://api.myquran.com (jadwal salat Kemenag RI)

// ID kota Banjarmasin pada API MyQuran.
// Cari ID kota lain: https://api.myquran.com/v2/sholat/kota/cari/namakota
const ID_KOTA = "2113";

const kotakJadwal = document.querySelector("#jadwal-salat");
const statusJadwal = kotakJadwal.querySelector(".status");
const daftarWaktu = kotakJadwal.querySelector(".daftar-waktu");

// 1. Tanggal hari ini format YYYY-MM-DD, contoh: 2026-10-20
function tanggalHariIni() {
    const sekarang = new Date();
    const tahun = sekarang.getFullYear();
    const bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
    const tanggal = String(sekarang.getDate()).padStart(2, "0");
    return `${tahun}-${bulan}-${tanggal}`;
}

// 2. Menampilkan lima waktu salat ke dalam daftar (<ul>)
function tampilkanJadwal(jadwal) {
    const waktuSalat = [
        ["Subuh", jadwal.subuh],
        ["Zuhur", jadwal.dzuhur],
        ["Asar", jadwal.ashar],
        ["Magrib", jadwal.maghrib],
        ["Isya", jadwal.isya],
    ];

    daftarWaktu.replaceChildren();

    waktuSalat.forEach(([nama, jam]) => {
        const item = document.createElement("li");
        const namaWaktu = document.createElement("span");
        const jamWaktu = document.createElement("strong");

        namaWaktu.textContent = nama;
        jamWaktu.textContent = jam;

        item.append(namaWaktu, jamWaktu);
        daftarWaktu.append(item);
    });

    daftarWaktu.hidden = false;
}

// 3. Mengambil jadwal dari API (asinkron) + penanganan galat
async function muatJadwalSalat() {
    statusJadwal.textContent = "Memuat jadwal salat...";
    const url = `https://api.myquran.com/v2/sholat/jadwal/${ID_KOTA}/${tanggalHariIni()}`;

    try {
        const respons = await fetch(url);
        if (!respons.ok) {
            throw new Error(`Server menjawab dengan status ${respons.status}`);
        }

        const hasil = await respons.json();
        if (!hasil.status) {
            throw new Error("Data jadwal tidak tersedia");
        }

        const { lokasi, jadwal } = hasil.data;
        statusJadwal.textContent = `${jadwal.tanggal}·${lokasi}`;
        tampilkanJadwal(jadwal);
    } catch (galat) {
        console.error("Gagal memuat jadwal salat:", galat);
        statusJadwal.textContent =
            "Jadwal salat belum dapat dimuat. Periksa koneksi internet lalu muat ulang halaman.";
    }
}

muatJadwalSalat();