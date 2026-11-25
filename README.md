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

Tidak ada variabel lingkungan yang wajib diisi. File `.env.local` dapat dibiarkan tanpa nilai; secret SSH pada workflow deploy hanya digunakan oleh GitHub Actions.

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

## Deploy otomatis

Workflow di `.github/workflows/deploy.yml` menjalankan build pada pull request dan setiap push ke `main`. Setelah build di `main` berhasil, workflow menyalin file commit tersebut ke server melalui SSH, lalu menjalankan `docker compose up -d --build`.

Sebelum deploy pertama, buka **Settings > Secrets and variables > Actions** di repositori GitHub dan buat repository secret berikut:

| Nama | Isi |
| --- | --- |
| `VPS_SSH_KEY` | Isi lengkap private key SSH yang dapat masuk sebagai pengguna tersebut |

Alamat VPS, pengguna SSH, host key publik, dan direktori proyek sudah tercantum di workflow. Jika VPS atau host key berubah, perbarui nilai tersebut di `.github/workflows/deploy.yml`. Pengguna SSH harus dapat menulis ke direktori proyek dan menjalankan `rsync` serta `docker compose`. Sinkronisasi menghapus file sumber yang sudah tidak ada di repositori, sambil mempertahankan `.env*`, `node_modules`, `.next`, `dist`, dan `out` di server. Docker network eksternal `n8n_default` juga harus tersedia sesuai `docker-compose.yml`.

Setelah secret `VPS_SSH_KEY` tersedia, push workflow terbaru ke `main` agar GitHub Actions menjalankan versi yang diperbarui. Jangan menyimpan private key di file proyek.

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
