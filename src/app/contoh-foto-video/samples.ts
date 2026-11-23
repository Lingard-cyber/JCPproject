export type WorkSample = {
  slug: string
  label: string
  title: string
  description: string
  src: string
  alt: string
}

export const workSamples: WorkSample[] = [
  {
    slug: 'portrait-editorial',
    label: 'Portrait editorial',
    title: 'Portrait dengan karakter',
    description: 'Pendekatan portrait untuk personal branding, editorial, dan profil profesional.',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85',
    alt: 'Portrait editorial dengan pencahayaan natural',
  },
  {
    slug: 'produksi-video',
    label: 'Produksi video',
    title: 'Produksi video brand',
    description: 'Materi video yang disiapkan untuk memperkenalkan produk, layanan, atau perusahaan.',
    src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85',
    alt: 'Kamera saat produksi video',
  },
  {
    slug: 'dokumentasi-event',
    label: 'Dokumentasi event',
    title: 'Momen acara dalam cerita visual',
    description: 'Dokumentasi suasana, rangkaian kegiatan, dan momen penting sebuah acara.',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    alt: 'Suasana dokumentasi acara',
  },
  {
    slug: 'visual-produk',
    label: 'Visual produk',
    title: 'Foto untuk katalog dan promosi',
    description: 'Visual produk dengan komposisi yang mendukung karakter dan kebutuhan publikasi brand.',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85',
    alt: 'Perlengkapan kamera untuk produksi visual produk',
  },
  {
    slug: 'produksi-komersial',
    label: 'Produksi komersial',
    title: 'Konten kampanye dan iklan',
    description: 'Persiapan visual untuk materi promosi dan kampanye di kanal digital.',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
    alt: 'Persiapan produksi komersial',
  },
]
