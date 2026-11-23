'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'motion/react'
import PointerGlowShader from './components/PointerGlowShader'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    num: '01',
    name: 'Foto Produk',
    detail: 'Visual produk yang tajam, bersih, dan bercerita — untuk e-commerce, katalog, dan iklan digital.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <rect x="6" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity=".4"/>
        <rect x="14" y="8" width="6" height="4" rx="1" fill="currentColor" opacity=".3"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Foto & Video Event',
    detail: 'Dokumentasi acara korporat, konser, seminar, dan wedding — tangkap setiap momen penting.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <rect x="6" y="13" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M28 17.5l9-5v19l-9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Foto Portrait & Corporate',
    detail: 'Headshot profesional, foto tim, dan portrait editorial untuk kebutuhan personal branding.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <circle cx="22" cy="16" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Brand & Lifestyle',
    detail: 'Konten foto dan video yang memperkuat identitas brand dengan estetika yang konsisten.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <path d="M22 6l4.47 9.07L37 16.63l-7.5 7.31 1.77 10.31L22 29.07l-9.27 4.88 1.77-10.31L7 16.63l10.53-1.56z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Komersial & Iklan',
    detail: 'TVC, foto iklan, dan konten kampanye yang dirancang untuk menarik perhatian dan mendorong konversi.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <path d="M8 32V20l14-12 14 12v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="16" y="26" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="34" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M31.5 12h5M34 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    name: 'Company Profile & Visual Digital',
    detail: 'Video profil perusahaan dan konten visual untuk website, media sosial, dan presentasi bisnis.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="np-svc-icon" aria-hidden="true">
        <rect x="6" y="8" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 34h16M22 30v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 20l5-5 5 5 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const works = [
  {
    id: 'brand',
    num: '01',
    type: 'PHOTO PRODUCTION',
    title: 'Brand Lifestyle Shoot',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Brand lifestyle editorial shoot',
    featured: true,
  },
  {
    id: 'corporate',
    num: '02',
    type: 'VIDEO PRODUCTION',
    title: 'Corporate Profile',
    src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85',
    alt: 'Corporate video production',
    featured: false,
  },
  {
    id: 'event',
    num: '03',
    type: 'PHOTO PRODUCTION',
    title: 'Event Documentation',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
    alt: 'Event documentation photography',
    featured: false,
  },
  {
    id: 'product',
    num: '04',
    type: 'PHOTO PRODUCTION',
    title: 'Product Visual Story',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
    alt: 'Product visual storytelling',
    featured: false,
  },
  {
    id: 'commercial',
    num: '05',
    type: 'VIDEO PRODUCTION',
    title: 'Commercial Content',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85',
    alt: 'Commercial content production',
    featured: false,
  },
]

const socialPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=85',
    alt: 'Produksi panggung dan pertunjukan langsung',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
    alt: 'Portrait editorial untuk brand',
  },
  {
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=700&q=85',
    alt: 'Foto hidangan untuk promosi restoran',
  },
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85',
    alt: 'Dokumentasi ruang acara',
  },
]

const stats = [
  { n: 150, suffix: '+', label: 'Klien Puas' },
  { n: 300, suffix: '+', label: 'Proyek Selesai' },
  { n: 5, suffix: '+', label: 'Tahun Pengalaman' },
]

const marqueeItems = [
  'FOTO PRODUK', '·', 'VIDEO EVENT', '·', 'COMPANY PROFILE', '·',
  'BRAND LIFESTYLE', '·', 'CORPORATE PORTRAIT', '·', 'COMMERCIAL CONTENT', '·',
  'FOTO PRODUK', '·', 'VIDEO EVENT', '·', 'COMPANY PROFILE', '·',
  'BRAND LIFESTYLE', '·', 'CORPORATE PORTRAIT', '·', 'COMMERCIAL CONTENT', '·',
]

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
function IcoArrow({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M4 11h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function IcoDiag({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function IcoInsta({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="23" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  )
}

/* ─────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  useEffect(() => {
    if (!inView) return
    const dur = 1500, start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function NorthProductionPage() {
  const rm = useReducedMotion()

  const fade = rm
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } }

  const heroFade = rm
    ? {}
    : { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } }

  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten utama</a>

      {/* ════════ NAV ════════ */}
      <SiteHeader />

      <main id="main">

        {/* ════════ HERO — SHADER ════════ */}
        <section className="np-hero" id="top" aria-label="North Production hero">
          <div className="np-hero-canvas" aria-hidden="true">
            <PointerGlowShader scale={0.7} intensity={1.4} />
          </div>
          <div className="np-hero-overlay" aria-hidden="true" />

          <div className="np-hero-body">
            {/* Eyebrow */}
            <motion.p className="np-hero-label" {...heroFade} transition={{ duration: 0.5 }}>
              <span />
              PHOTO &amp; VIDEO PRODUCTION · YOGYAKARTA
            </motion.p>

            {/* Giant title */}
            <motion.h1
              className="np-hero-title"
              initial={rm ? false : { opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              NORTH<br />
              <em>PRO</em>DUCTION
            </motion.h1>

            {/* Stats row */}
            <motion.div
              className="np-hero-stats"
              initial={rm ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {stats.map(s => (
                <div className="np-stat" key={s.label}>
                  <span className="np-stat-n">
                    <Counter target={s.n} suffix={s.suffix} />
                  </span>
                  <span className="np-stat-l">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Bottom row */}
            <motion.div
              className="np-hero-bottom"
              initial={rm ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 }}
            >
              <p className="np-hero-desc">
                Layanan produksi foto dan video profesional untuk brand, perusahaan,
                hotel, dan event di Yogyakarta dan seluruh Indonesia.
              </p>
              <div className="np-hero-actions">
                <a href="#layanan" className="np-btn-primary">
                  Lihat Layanan <IcoArrow />
                </a>
                <a href="#contact" className="np-btn-ghost">
                  Mulai Proyek <IcoDiag />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ MARQUEE ════════ */}
        <div className="np-marquee-band" aria-hidden="true">
          <div className="np-marquee-track">
            {marqueeItems.map((item, i) => (
              <span key={i} className={item === '·' ? 'sep' : ''}>{item}</span>
            ))}
          </div>
        </div>

        {/* ════════ SERVICES ════════ */}
        <section className="np-services" id="layanan">
          <div className="np-services-header">
            <div>
              <p className="np-section-tag">Layanan Kami</p>
              <h2 className="np-section-title">
                Kami <em>Kerjakan</em>
              </h2>
            </div>
            <p className="np-services-desc">
              Setiap proyek kami rancang dengan pendekatan kreatif berbasis tujuan komunikasi,
              kebutuhan visual, dan platform publikasi brand Anda.
            </p>
          </div>

          <motion.div className="np-services-grid" {...fade}>
            {services.map(svc => (
              <article className="np-svc-card" key={svc.num} tabIndex={0}>
                <span className="np-svc-num">{svc.num}</span>
                {svc.icon}
                <div>
                  <p className="np-svc-name">{svc.name}</p>
                  <p className="np-svc-detail">{svc.detail}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </section>

        {/* ════════ IDENTITY / ABOUT ════════ */}
        <motion.section className="np-identity" id="about" {...fade}>
          <div className="np-identity-left">
            <blockquote className="np-identity-quote">
              Kami percaya cerita visual yang kuat mampu{' '}
              <strong>menggerakkan audiens</strong> dan{' '}
              <strong>memperkuat brand</strong> secara nyata.
            </blockquote>
          </div>
          <div className="np-identity-right">
            {[
              {
                label: 'Untuk Siapa',
                text: 'Brand, perusahaan, hotel, dan event yang membutuhkan konten visual profesional untuk pemasaran, branding, dan komunikasi.',
              },
              {
                label: 'Pendekatan Kami',
                text: 'Kreatif dan berbasis data — setiap frame dirancang untuk mendukung engagement, awareness, dan kepercayaan audiens.',
              },
              {
                label: 'Lokasi',
                text: 'Berbasis di Yogyakarta, siap melayani seluruh wilayah Indonesia.',
              },
            ].map(item => (
              <div className="np-identity-item" key={item.label}>
                <p className="np-identity-item-label">{item.label}</p>
                <p className="np-identity-item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ════════ WORK / PORTFOLIO ════════ */}
        <section className="np-work" id="work">
          <div className="np-work-header">
            <div>
              <p className="np-section-tag">Contoh foto dan video</p>
              <h2 className="np-section-title">
                Selected <em>Work</em>
              </h2>
            </div>
            <a href="https://www.instagram.com/north.production/" target="_blank" rel="noreferrer" className="np-view-all">
              Lihat semua di Instagram <IcoDiag />
            </a>
          </div>

          {/* Bento: featured (tall-left) + 2 stacked right */}
          <div className="np-work-bento">
            {works.slice(0, 1).map(w => (
              <motion.div className="np-work-card np-work-featured" key={w.id} whileHover="hover">
                <img src={w.src} alt={w.alt} loading="lazy" />
                <div className="np-work-card-overlay" />
                <span className="np-work-card-num">{w.num}</span>
                <div className="np-work-card-info">
                  <p className="np-work-card-type">{w.type}</p>
                  <h3 className="np-work-card-title">{w.title}</h3>
                </div>
              </motion.div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {works.slice(1, 3).map(w => (
                <motion.div className="np-work-card np-work-secondary" key={w.id} whileHover="hover">
                  <img src={w.src} alt={w.alt} loading="lazy" />
                  <div className="np-work-card-overlay" />
                  <span className="np-work-card-num">{w.num}</span>
                  <div className="np-work-card-info">
                    <p className="np-work-card-type">{w.type}</p>
                    <h3 className="np-work-card-title">{w.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extra row */}
          <div className="np-work-extra">
            {works.slice(3).map(w => (
              <motion.div className="np-work-card" key={w.id + '-ex'} whileHover="hover">
                <img src={w.src} alt={w.alt} loading="lazy" />
                <div className="np-work-card-overlay" />
                <span className="np-work-card-num">{w.num}</span>
                <div className="np-work-card-info">
                  <p className="np-work-card-type">{w.type}</p>
                  <h3 className="np-work-card-title">{w.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════ SOCIAL ════════ */}
        <section className="np-social" aria-label="Instagram North Production">
          <div className="np-social-heading">
            <p className="np-social-label">Ikuti Kami</p>
            <a
              href="https://www.instagram.com/north.production/"
              target="_blank" rel="noreferrer"
              className="np-social-handle"
            >
              <IcoInsta className="h-10 w-10" />
              @NORTH.PRODUCTION
              <IcoDiag className="h-7 w-7" />
            </a>
            <p className="np-social-right">
              Lihat karya terbaru dan suasana di balik proses produksi kami.
            </p>
          </div>
          <div className="np-social-grid">
            {socialPhotos.map((photo, index) => (
              <a
                className="np-social-photo"
                href="https://www.instagram.com/north.production/"
                target="_blank"
                rel="noreferrer"
                key={photo.alt}
                aria-label={`Lihat karya North Production di Instagram, foto ${index + 1}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        {/* ════════ CTA BAND ════════ */}
        <motion.section className="np-cta-band" id="contact" {...fade}>
          <div className="np-cta-band-copy">
            <p className="np-section-tag">Mulai kolaborasi</p>
            <h2 className="np-cta-band-text">
              Punya proyek<br />yang ingin <em>diwujudkan?</em>
            </h2>
          </div>
          <div className="np-cta-side">
            <p>
              Ceritakan kebutuhan visual Anda kepada kami. Tim North Production siap
              merancang solusi terbaik untuk brand Anda.
            </p>
            <div className="np-cta-actions">
              <a
                href="mailto:jogjacreativeproduction@gmail.com?subject=Diskusi%20North%20Production"
                className="np-btn-white"
              >
                Mulai percakapan <IcoDiag />
              </a>
              <a href="https://wa.me/6285600604388" target="_blank" rel="noreferrer" className="np-btn-outline">
                WhatsApp kami <IcoDiag />
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ════════ FOOTER ════════ */}
      <SiteFooter />
    </>
  )
}
