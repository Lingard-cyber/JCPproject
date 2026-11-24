'use client'

import { motion, useReducedMotion } from 'motion/react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import SocialGallery from './components/SocialGallery'
import { whatsappLink } from './contact'

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
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=max&w=1600&q=90',
    alt: 'Brand lifestyle editorial shoot',
  },
  {
    id: 'corporate',
    num: '02',
    type: 'VIDEO PRODUCTION',
    title: 'Corporate Profile',
    src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=max&w=1400&q=90',
    alt: 'Corporate video production',
  },
  {
    id: 'event',
    num: '03',
    type: 'PHOTO PRODUCTION',
    title: 'Event Documentation',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=max&w=1400&q=90',
    alt: 'Event documentation photography',
  },
  {
    id: 'product',
    num: '04',
    type: 'PHOTO PRODUCTION',
    title: 'Product Visual Story',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=max&w=1400&q=90',
    alt: 'Product visual storytelling',
  },
  {
    id: 'commercial',
    num: '05',
    type: 'VIDEO PRODUCTION',
    title: 'Commercial Content',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=max&w=1400&q=90',
    alt: 'Commercial content production',
  },
]

const marqueeItems = [
  'VISUAL STORIES, MADE FOR EVERY BRAND', '✳',
  'PHOTO & VIDEO PRODUCTION', '✦',
  'YOGYAKARTA · INDONESIA', '✳',
]

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

        {/* ════════ HERO ════════ */}
        <section className="np-hero" id="top" aria-label="North Production hero">
          <div className="np-hero-overlay" aria-hidden="true" />

          <div className="np-hero-body">
            {/* Eyebrow */}
            <motion.p className="np-hero-label" {...heroFade} transition={{ duration: 0.5 }}>
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
                  Lihat Layanan
                </a>
                <a href="#contact" className="np-btn-ghost">
                  Mulai Proyek
                </a>
              </div>
            </motion.div>
          </div>

          {/* ════════ MARQUEE ════════ */}
          <div className="np-marquee-band" aria-hidden="true">
            <div className="np-marquee-track">
              {[0, 1].map(copy => (
                <div className="np-marquee-group" key={copy}>
                  {marqueeItems.map((item, index) => (
                    <span className={item.length < 3 ? 'sep' : 'copy'} key={`${copy}-${index}`}>{item}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* ════════ PHILOSOPHY / ABOUT ════════ */}
        <motion.section
          className="np-identity"
          id="about"
          aria-labelledby="np-identity-title"
          initial={rm ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: rm ? 0 : 0.32, ease: 'easeOut' }}
        >
          <div className="np-identity-copy">
            <p className="np-identity-eyebrow">Tentang Kami</p>
            <h2 className="np-identity-quote" id="np-identity-title">
              Kami percaya cerita visual yang kuat mampu{' '}
              <strong>menggerakkan audiens</strong> dan{' '}
              <strong>memperkuat brand</strong> secara nyata.
            </h2>
            <p className="np-identity-intro">
              North Production adalah partner kreatif untuk kebutuhan produksi foto, video, dan konten visual profesional di Yogyakarta dan seluruh Indonesia.
            </p>
            <a className="np-identity-link" href="#contact">
              Kenal Lebih Dekat
            </a>
          </div>

          <div className="np-identity-showcase">
            <div className="np-identity-principles">
              {[
                {
                  number: '01',
                  title: 'Produksi Visual',
                  text: 'Foto, video, dan konten visual untuk kebutuhan komunikasi brand.',
                  icon: <><rect x="3" y="6" width="18" height="15" rx="1.5" /><path d="M3 10h18M5 6l4 4m2-4 4 4m2-4 4 4" /></>,
                },
                {
                  number: '02',
                  title: 'Pendekatan Kolaboratif',
                  text: 'Setiap proyek dirancang bersama berdasarkan tujuan dan kebutuhan visual klien.',
                  icon: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20M16 5.2a3 3 0 0 1 0 5.7m2 3.4a4.5 4.5 0 0 1 3 4.2V20" /></>,
                },
                {
                  number: '03',
                  title: 'Dampak Nyata',
                  text: 'Visual yang kuat membantu brand terhubung dengan audiensnya.',
                  icon: <><path d="M4 19V5m0 14h17M8 15l3-4 3 2 5-7" /><path d="M15.5 6H19v3.5" /></>,
                },
              ].map(item => (
                <motion.article
                  className="np-identity-item"
                  key={item.number}
                  initial={rm ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-32px' }}
                  transition={{ duration: rm ? 0 : 0.28, delay: rm ? 0 : Number(item.number) * 0.04, ease: 'easeOut' }}
                >
                  <span className="np-identity-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                  </span>
                  <div className="np-identity-item-content">
                    <span className="np-identity-item-number">{item.number}</span>
                    <h3 className="np-identity-item-label">{item.title}</h3>
                    <p className="np-identity-item-text">{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <figure className="np-identity-photo">
              <motion.div
                className="np-identity-photo-reveal"
                initial={rm ? false : { opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-48px' }}
                transition={{ duration: rm ? 0 : 0.45, ease: 'easeOut' }}
              >
                <img src="/about-production.jpg" alt="Fotografer mengambil gambar di area hijau" loading="lazy" />
              </motion.div>
              <figcaption>Di Balik Produksi</figcaption>
            </figure>
          </div>
        </motion.section>

        {/* ════════ WORK / PORTFOLIO ════════ */}
        <section className="np-work" id="work">
          <div className="np-work-heading">
            <div>
              <p className="np-work-gallery-label">Karya Pilihan</p>
              <h2 className="np-work-title">Selected <em>Work</em></h2>
            </div>
            <a className="np-work-instagram" href="https://www.instagram.com/north.production/" target="_blank" rel="noreferrer">
              Lihat semua di Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="np-work-grid" role="list" aria-label="Karya pilihan North Production">
            {works.map(w => (
              <article className={`np-work-card np-work-card-${w.id}`} key={w.id} role="listitem">
                <div className="np-work-card-image">
                  <motion.img
                    src={w.src}
                    alt={w.alt}
                    loading="lazy"
                    initial={rm ? false : { opacity: 0, scale: 1.035 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={rm ? undefined : { scale: 1.025 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: rm ? 0 : 0.45, delay: rm ? 0 : Number(w.num) * 0.035, ease: 'easeOut' }}
                  />
                  <span className="np-work-card-num">{w.num}</span>
                  <div className="np-work-card-info">
                    <p className="np-work-card-type">{w.type}</p>
                    <h3 className="np-work-card-title">{w.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ════════ SOCIAL ════════ */}
        <SocialGallery />

        {/* ════════ CTA BAND ════════ */}
        <motion.section className="np-cta-band" id="contact" {...fade}>
          <div className="np-cta-photo" aria-hidden="true">
            <img src="/north-collaboration.png" alt="" loading="lazy" />
          </div>
          <div className="np-cta-content">
            <p className="np-cta-eyebrow">Mulai Kolaborasi</p>
            <h2 className="np-cta-band-text">
              Punya proyek yang ingin<br /><em>diwujudkan?</em>
            </h2>
            <p className="np-cta-description">
              Ceritakan kebutuhan visual Anda kepada kami. Tim North Production siap merancang solusi kreatif untuk brand, bisnis, atau event Anda.
            </p>
            <div className="np-cta-benefits">
              <article className="np-cta-benefit">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                <div><h3>Respons Cepat</h3><p>Tim siap membantu</p></div>
              </article>
              <article className="np-cta-benefit">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                <div><h3>Solusi Kreatif</h3><p>Sesuai kebutuhan brand</p></div>
              </article>
              <article className="np-cta-benefit">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 3h8m-9 2H5v16h14V5h-2M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div><h3>Profesional</h3><p>Dari ide hingga produksi</p></div>
              </article>
            </div>
            <a href={whatsappLink('Halo, saya ingin berdiskusi tentang proyek bersama North Production.')} className="np-cta-button" target="_blank" rel="noreferrer">
              Mulai Percakapan
            </a>
          </div>
        </motion.section>
      </main>

      {/* ════════ FOOTER ════════ */}
      <SiteFooter />
    </>
  )
}
