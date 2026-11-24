# North Production

Website company profile untuk **North Production**, layanan produksi foto dan video dari Jogja Creative Production. Situs ini menampilkan layanan, paket harga, dan contoh karya foto maupun video.

## Fitur

- Halaman utama dengan ringkasan layanan dan portofolio.
- Daftar layanan dan halaman detail tiap layanan.
- Daftar paket harga dan halaman detail tiap paket.
- Galeri contoh foto dan video beserta halaman detail.
- Tautan kontak melalui email, WhatsApp, dan Instagram.

## Teknologi

- [Next.js](https://nextjs.org/) 16 dengan App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) untuk animasi antarmuka
- TypeScript

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, kemudian dari folder proyek jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah tersedia

```bash
npm run dev    # Jalankan server pengembangan
npm run build  # Buat build produksi
npm run start  # Jalankan build produksi
```

Jalankan `npm run build` sebelum `npm run start`.

## Struktur halaman

- `/` — halaman utama
- `/layanan` dan `/layanan/[slug]` — daftar layanan dan detail layanan
- `/harga` dan `/harga/[slug]` — daftar paket dan detail paket
- `/contoh-foto-video` dan `/contoh-foto-video/[slug]` — galeri dan detail karya

## Struktur kode

```text
src/app/
├── components/          # Komponen antarmuka bersama
├── layanan/             # Halaman layanan
├── harga/               # Halaman paket harga
├── contoh-foto-video/   # Galeri karya
├── globals.css          # Gaya global
├── layout.tsx           # Layout dan metadata situs
└── page.tsx              # Halaman utama
```
