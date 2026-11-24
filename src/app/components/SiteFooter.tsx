import Link from 'next/link'
import GradientWaves from './GradientWaves'
import { whatsappLink } from '../contact'

export default function SiteFooter() {
  return <footer className="np-footer">
    <div className="np-footer-scene">
      <div className="np-footer-waves" aria-hidden="true">
        <GradientWaves
          className="np-footer-waves-canvas"
          horizonColor="#79518D"
          waveColor="#69377D"
          crestColor="#C58BD9"
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
          <Link className="np-footer-logo-link" href="/" aria-label="North Production — beranda">
            <img className="np-footer-logo" src="/north-production-logo.png" alt="" />
            <span className="np-footer-brand-name">NORTH PRODUCTION</span>
          </Link>
          <p>PHOTO &middot; VIDEO<br />PRODUCTION</p>
        </div>

        <Link className="np-footer-cta" href="/#contact">
          <span>Mulai proyek kreatif Anda</span>
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
            <a href="https://www.instagram.com/north.production/" target="_blank" rel="noreferrer">Instagram</a>
            <a href={whatsappLink('Halo, saya ingin menghubungi North Production.')} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="np-footer-message" href={whatsappLink('Halo, saya ingin mendiskusikan proyek bersama North Production.')} target="_blank" rel="noreferrer">Diskusikan proyek</a>
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
