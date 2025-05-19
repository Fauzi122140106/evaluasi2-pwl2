## Portal Berita Modern - Evaluasi 2 Pemrograman Web Lanjut

## 1. . Penjelasan Aplikasi
Aplikasi ini merupakan portal berita modern yang dibangun menggunakan Next.js dengan fitur utama:
 *Autentikasi pengguna menggunakan OAuth2 dengan Google melalui NextAuth.js
*Pengambilan berita dari beberapa sumber:
  NewsAPI
  The Guardian API
  Currents API
  RSS Feed BBC
*tampilan berita responsif dan modern menggunakan CSS Grid, hover effects, dan masonry layout
*Fitur login dan logout
*Login menggunakan akun Google
*Navbar dinamis menampilkan nama pengguna yang login dan tombol logout
Pengelolaan state dan API Routes di Next.js untuk menyajikan berita dari berbagai sumber secara seragam

## 2. Fitur Utama
1.Login dengan Google OAuth2
2.Halaman daftar berita utama dengan layout kartu responsif
3.Detail berita mengarah ke sumber asli

## 3. Cara Instalasi dan Menjalankan Aplikasi
Prasyarat
  Node.js (Versi 18 atau lebih baru)
  npm
Akun dan API Key untuk:
  NewsAPI
  Guardian API
  Currents API
  Google OAuth Client ID & Secret
## Langkah Instalasi
pertama : Buat proyek baru atau clone github
```bash
npx create-next-app@latest <nama-proyek-anda>
atau
git clone https://github.com/Yossiridho/PWL-Evaluasi-2.git
```
kedua : Install dependensi
```bash
npm install
```
ketiga : Buat file .env.local di root proyek dan isi dengan variabel berikut
```bash
NEXTAUTH_SECRET=your-random-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEWS_API_KEY=your-newsapi-key
GUARDIAN_API_KEY=your-guardian-api-key
CURRENTS_API_KEY=your-currentsapi-key
```
ketiga : Jalankan aplikasi
```bash
npm run dev
```

keempat : Akses aplikasi: Buka browser dan kunjungi:
```bash
[npm install](http://localhost:3000/login)
```
## 4. Struktur Proyek
```bash
EVALUASI-PWL2/
├── .next/                       # Folder build otomatis dari Next.js (jangan diubah)
├── app/                         # Folder utama berbasis App Router
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js     # Route API untuk autentikasi NextAuth
│   ├── berita/
│   │   └── page.js              # Halaman untuk daftar atau detail berita
│   ├── compoen/
│   │   └── newscard.js          # Komponen card berita (kemungkinan komponen UI)
│   ├── dashboard/
│   │   └── page.tsx            # Halaman dashboard (setelah login)
│   ├── login/
│   │   └── page.tsx            # Halaman login dengan email & Google
├── test/
│   └── BeritaUtama.tsx         # Mungkin komponen utama untuk berita (bisa jadi homepage)
├── favicon.ico                  # Ikon web
├── globals.css                  # Styling global Tailwind atau CSS umum
├── layout.js / layout.tsx       # Layout default untuk semua halaman
├── page.js / page.tsx           # Halaman root (landing page utama)

```

## 5. Cara Penggunaan
  Buka halaman /login
  Login menggunakan Google
  Setelah login, pengguna diarahkan ke halaman utama berita
Di halaman utama:
menampil api dari portal yang ditambahkan



