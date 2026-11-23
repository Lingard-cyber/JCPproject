import Link from 'next/link'
import GradientWaves from './GradientWaves'

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
}

export default function SiteFooter() {
  return <footer className="np-footer">
    <div className="np-footer-scene">
      <div className="np-footer-waves" aria-hidden="true">
        <GradientWaves
          className="np-footer-waves-canvas"
          horizonColor="#49225B"
          waveColor="#6E3482"
          crestColor="#A56ABD"
          backgroundColor="transparent"
          speed={0.16}
          amplitude={2.2}
          waveScale={0.62}
          turbulence={16}
          quality="medium"
          opacity={0.72}
          intro
          mouseInteraction
        />
      </div>
      <div className="np-footer-frame">
        <div className="np-footer-topline">
          <Link className="np-footer-monogram" href="/" aria-label="North Production &mdash; beranda">N</Link>
          <p>PHOTO &middot; VIDEO<br />PRODUCTION</p>
        </div>

        <Link className="np-footer-cta" href="/#contact">
          <span>Mulai proyek kreatif Anda</span>
          <span className="np-footer-cta-icon"><ArrowIcon /></span>
        </Link>

        <div className="np-footer-grid">
          <div className="np-footer-col">
            <h2 className="np-footer-col-title">Jelajahi</h2>
            <Link href="/">Beranda</Link>
            <Link href="/layanan">Layanan</Link>
            <Link href="/harga">Daftar Harga</Link>
            <Link href="/contoh-foto-video">Contoh Foto &amp; Video</Link>
            <Link href="/#contact">Kontak</Link>
          </div>
          <div className="np-footer-col">
            <h2 className="np-footer-col-title">Layanan</h2>
            <Link href="/layanan">Foto Produk</Link>
            <Link href="/layanan">Foto &amp; Video Event</Link>
            <Link href="/layanan">Portrait &amp; Corporate</Link>
            <Link href="/layanan">Company Profile</Link>
          </div>
          <div className="np-footer-col np-footer-featured">
            <h2 className="np-footer-col-title">Terhubung</h2>
            <a href="https://www.instagram.com/north.production/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
            <a href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
            <a href="mailto:jogjacreativeproduction@gmail.com">Email <ArrowIcon /></a>
            <Link className="np-footer-message" href="/#contact">Diskusikan proyek <ArrowIcon /></Link>
          </div>
        </div>

        <p className="np-footer-wordmark" aria-label="North Production">
          NORTH PRODUCTION
        </p>
        <div className="np-footer-bottom">
          <span>&copy; 2025 PT Jogja Creative Production</span>
          <span>Yogyakarta &middot; Indonesia</span>
        </div>
      </div>
    </div>
  </footer>
}
