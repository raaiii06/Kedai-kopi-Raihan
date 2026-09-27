/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("=== Selamat Datang di Kedai Kopi Raihan");
console.log("Skrip app.js berhasil terhubung!");


// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const NAMA_KEDAI = "Kedai Kopi Raihan";


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.


let NAMA_KASIR = "kak Eko";

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Kedai Kopi Raihan!");
let NAMA_PELANGGAN = prompt("Halo! Masukkan nama kamu untuk memulai");

if (NAMA_PELANGGAN) {
    alert("Haloo!, " + NAMA_PELANGGAN + "yuk kita menghitung poin");
    console.log("nama pelanggan : " + NAMA_PELANGGAN);
} else {
    alert("Kamu tidak memasukkan nama, kamu disebut pelanggan setia");
    NAMA_PELANGGAN = "pelanggan setia";
    console.log("pelanggan setia : " + NAMA_PELANGGAN);
}


// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let POIN_LATTE = 40;
let POIN_MATCHA = 55;
let POIN_TARO = 65;

let JUMLAH_POIN = POIN_LATTE + POIN_MATCHA + POIN_TARO;
// let POIN_RATARATA = JUMLAH_POIN / 3;

console.log("Rincian Poin : " + NAMA_PELANGGAN);
console.log("Poin Latte : " + POIN_LATTE);
console.log("Poin Matcha : " + POIN_MATCHA);
console.log("Poin taro : " + POIN_TARO);
console.log("Total Poin : " + JUMLAH_POIN);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().


let TierMember = "";
let BenefitDiskon = "";

if (JUMLAH_POIN >= 100) {
    TierMember =  "Platinum";
    BenefitDiskon = "Gratis Matcha per minggu";
} else if (JUMLAH_POIN >= 70) {
    TierMember = "Gold";
    BenefitDiskon = "Diskon 10% setiap pembelian";
} else if (JUMLAH_POIN >= 40) {
    TierMember = "Silver";
    BenefitDiskon = "Diskon 20% untuk Menu Matcha";
} else if (JUMLAH_POIN <= 40) {
    TierMember = "Bronze";
    BenefitDiskon = "Member reguler"
}

console.log("Tier member : " + TierMember + "Benefit Diskon : " + BenefitDiskon);

alert(
    "Hasil Member : " + NAMA_PELANGGAN + ":\n" +
    "Jumlah Poin : " + JUMLAH_POIN + ":\n" +
    "Tier Member : " + TierMember + ":\n" +
    "Benefit Diskon : " + BenefitDiskon + ":\n"
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function HITUNG_JUMLAHPOIN(Poin1, Poin2, Poin3) {
    let JUMLAH = Poin1 + Poin2 + Poin3;
    return Poin1 + Poin2 + Poin3;
}



// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function Tentukan_TierMember(TierMember) {
    if (TierMember >=100) return "Platinum - Gratis Matcha per minggu";
    if (TierMember >= 70) return "gold - Diskon 10% setiap pembelian";
    if (Tiermember >= 40) return "Silver - Diskon 20% untuk Menu Matcha";
    return "Bronze - Member reguler";
}


// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let POIN_PELANGGAN_A = HITUNG_JUMLAHPOIN(20,30,35);

let POIN_PELANGGAN_B = HITUNG_JUMLAHPOIN(40,30,15);

let TierMember_PELANGGAN_A = Tentukan_TierMember(POIN_PELANGGAN_A);
let TierMember_PELANGGAN_B = Tentukan_TierMember(POIN_PELANGGAN_B);

console.log("Data Pelanggan A adalah : ");
console.log("Jumlah Poinnya adalah : " + POIN_PELANGGAN_A);
console.log("Tier Member nya adalah : " + TierMember_PELANGGAN_A);


console.log("Data Pelanggan B adalah : ");
console.log("Jumlah Poinnya adalah : " + POIN_PELANGGAN_B);
console.log("Tier Member nya adalah : " + TierMember_PELANGGAN_B);




// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let DAFTAR_MENU_FAVORIT = [
    "Matcha",
    "latte",
    "redvelvet",
    "Taro",
    "MilkOat"
];


// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

console.log("=== Menu Rekomendasi untuk Member ===");

for (let i = 0; i < DAFTAR_MENU_FAVORIT.length; i++) {

    console.log((i + 1) + "." + DAFTAR_MENU_FAVORIT[i]);
}


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("Total Menu Favorit : " + DAFTAR_MENU_FAVORIT.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES!! ===");


