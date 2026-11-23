import type { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'North Production — Foto & Video | Jogja Creative Production',
  description:
    'Produksi foto dan video untuk brand, perusahaan, hotel, dan event bersama Jogja Creative Production di Yogyakarta.',
  openGraph: {
    title: 'North Production — Foto & Video',
    description:
      'Produksi foto dan video untuk brand, perusahaan, hotel, dan event bersama Jogja Creative Production.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
