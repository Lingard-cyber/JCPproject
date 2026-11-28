'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HeroWaveScene from './components/HeroWaveScene'
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

const socialGallery = [
  {
    shortcode: 'DQd7UgJk8ea',
    image: '/social/DQd7UgJk8ea.webp',
    alt: 'Dokumentasi acara dan kebersamaan tim North Production',
    caption: 'Momen kebersamaan tim North Production dalam sebuah acara. 🤝',
  },
  {
    shortcode: 'DQycrvHk1XJ',
    image: '/social/DQycrvHk1XJ.webp',
    alt: 'Keluarga berfoto bersama pada upacara pengukuhan guru besar UGM',
    caption: 'Hari istimewa dalam pengukuhan Guru Besar Universitas Gadjah Mada. Selamat atas pencapaiannya! 🎓',
  },
  {
    shortcode: 'DQydjeAk6e5',
    image: '/social/DQydjeAk6e5.webp',
    alt: 'Para guru besar UGM berfoto bersama setelah upacara pengukuhan',
    caption: 'Mengabadikan suasana khidmat dan kebanggaan di Universitas Gadjah Mada.',
  },
  {
    shortcode: 'DQYMdZIk7dD',
    image: '/social/DQYMdZIk7dD.webp',
    alt: 'Momen wisuda bersama keluarga dan lulusan UGM',
    caption: 'Cerita di balik toga, senyum keluarga, dan perjalanan panjang yang akhirnya sampai di sini. 🎓',
  },
  {
    shortcode: 'DQk5X_RgjM4',
    image: '/social/DQk5X_RgjM4.webp',
    alt: 'Komunitas mengikuti kegiatan yoga bersama di ruang terbuka',
    caption: 'Bergerak dan bernapas bersama dalam kegiatan Komunitas Ayo Yoga.',
  },
  {
    shortcode: 'DQf-uuYgvBL',
    image: '/social/DQf-uuYgvBL.webp',
    alt: 'Promosi Villa Laria di kawasan Parangtritis, Yogyakarta',
    caption: 'Suasana tenang dan hamparan hijau di Villa Laria, Parangtritis — Yogyakarta.',
  },
  {
    shortcode: 'ClBFxaIAgmv',
    image: '/social/ClBFxaIAgmv.webp',
    alt: 'Suasana adegan film pendek di sebuah ruangan klasik',
    caption: 'Sepotong suasana dari produksi film pendek bersama North Production. 🎬',
  },
]

const aboutSlides = [
  {
    title: 'RANGKAI',
    description: 'Setiap produksi berawal dari cerita dan tujuan yang jelas. Kami merangkai arah visual bersama Anda sejak awal.',
    cardTitle: 'Perjalanan Kolaboratif',
    cardDescription: 'Proses kreatif yang terbuka, terarah, dan melibatkan ide dari awal.',
    icon: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20M16 5.2a3 3 0 0 1 0 5.7m2 3.4a4.5 4.5 0 0 1 3 4.2V20" /></>,
    art: <><rect x="12" y="18" width="38" height="52" rx="5" /><rect x="40" y="10" width="38" height="52" rx="5" /><rect x="68" y="18" width="38" height="52" rx="5" /><path d="M22 31h18M22 40h14M50 23h18M50 32h14M78 31h18M78 40h14" /></>,
  },
  {
    title: 'ABADIKAN',
    description: 'Foto dan video kami dibuat dengan perhatian pada detail, suasana, dan momen yang ingin disampaikan.',
    cardTitle: 'Produksi Visual',
    cardDescription: 'Dari konsep, eksekusi, hingga hasil siap tayang yang berdampak.',
    icon: <><rect x="4" y="4" width="16" height="17" rx="2" /><path d="M9 4V2.5h6V4M8 10h8m-8 4 2 2 4-4m-6 7h8" /></>,
    art: <><path d="M14 29h19l8-12h28l8 12h17a6 6 0 0 1 6 6v32a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V35a6 6 0 0 1 6-6Z" /><circle cx="53" cy="49" r="15" /><circle cx="53" cy="49" r="6" /><path d="M79 39h8M15 37h9" /></>,
  },
  {
    title: 'GERAKKAN',
    description: 'Hasil akhirnya adalah visual yang membantu brand lebih mudah terhubung dengan audiensnya.',
    cardTitle: 'Dampak Nyata',
    cardDescription: 'Karya visual yang tidak hanya menarik, tapi juga memberi hasil terukur.',
    icon: <><path d="m3 8 9-5 9 5-9 5-9-5Zm0 8 9 5 9-5M3 12l9 5 9-5" /></>,
    art: <><path d="M14 13V72h94M27 60l22-23 18 12 29-34M82 15h14v14" /><circle cx="27" cy="60" r="3" /><circle cx="49" cy="37" r="3" /><circle cx="67" cy="49" r="3" /><circle cx="96" cy="15" r="3" /></>,
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
  const socialTrackRef = useRef<HTMLDivElement>(null)
  const [isSocialPaused, setIsSocialPaused] = useState(false)
  const [activeAboutStep, setActiveAboutStep] = useState(0)
  const [isAboutHovered, setIsAboutHovered] = useState(false)
  const [isAboutFocused, setIsAboutFocused] = useState(false)

  const scrollSocial = useCallback((direction: -1 | 1) => {
    const track = socialTrackRef.current
    if (!track) return
    const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    const card = track.firstElementChild
    const cardWidth = card instanceof HTMLElement ? card.getBoundingClientRect().width : track.clientWidth * 0.8
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    const target = direction > 0 && isAtEnd ? 0 : track.scrollLeft + direction * (cardWidth + gap)
    track.scrollTo({ left: Math.max(0, target), behavior: rm ? 'auto' : 'smooth' })
  }, [rm])

  useEffect(() => {
    if (rm || isSocialPaused) return
    const timer = window.setInterval(() => scrollSocial(1), 3000)
    return () => window.clearInterval(timer)
  }, [isSocialPaused, rm, scrollSocial])

  useEffect(() => {
    if (rm || isAboutHovered || isAboutFocused) return
    const timer = window.setInterval(() => {
      setActiveAboutStep(current => (current + 1) % aboutSlides.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [isAboutFocused, isAboutHovered, rm])

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

        {/* ════════ HERO + SERVICES SHARED SCENE ════════ */}
        <div className="np-hero-services-flow">
          <div className="np-hero-overlay" aria-hidden="true" />

        {/* ════════ HERO ════════ */}
        <section className="np-hero" id="top" aria-label="North Production hero">
          <img
            className="np-hero-background"
            src="/hero-studio-background.png"
            alt=""
            width={1673}
            height={940}
            fetchPriority="high"
          />
          <HeroWaveScene />
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
                <a href={whatsappLink('Halo, saya ingin berdiskusi tentang proyek bersama North Production.')} className="np-btn-ghost" target="_blank" rel="noreferrer">
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

          <div className="np-services-curve" aria-hidden="true">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,0 Q720,156 1440,0 L1440,80 L0,80 Z" fill="#EBE5F7" />
            </svg>
          </div>
        </section>
        </div>

        {/* ════════ PHILOSOPHY / ABOUT ════════ */}
        <motion.section
          className="np-identity"
          id="about"
          aria-labelledby="np-identity-title"
          initial={rm ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: rm ? 0 : 0.32, ease: 'easeOut' }}
          onPointerEnter={() => setIsAboutHovered(true)}
          onPointerLeave={() => setIsAboutHovered(false)}
          onFocusCapture={() => setIsAboutFocused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsAboutFocused(false)
          }}
        >
          <div className="np-identity-copy">
            <p className="np-identity-eyebrow">Tentang Kami</p>
            <div className="np-identity-story">
              <div className="np-identity-indicators" role="group" aria-label="Pilih tahap cerita North Production">
                {aboutSlides.map((slide, index) => (
                  <button
                    className={index === activeAboutStep ? 'is-active' : ''}
                    key={slide.title}
                    type="button"
                    aria-label={`Tampilkan ${slide.title.toLowerCase()}`}
                    aria-pressed={index === activeAboutStep}
                    onClick={() => setActiveAboutStep(index)}
                  />
                ))}
              </div>
              <div className="np-identity-story-copy">
                <h2 className="np-identity-quote" id="np-identity-title">
                  {aboutSlides.map((slide, index) => (
                    <button
                      className={index === activeAboutStep ? 'is-active' : ''}
                      key={slide.title}
                      type="button"
                      aria-pressed={index === activeAboutStep}
                      onClick={() => setActiveAboutStep(index)}
                    >
                      {slide.title}
                    </button>
                  ))}
                </h2>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    className="np-identity-intro"
                    key={activeAboutStep}
                    aria-live="polite"
                    initial={rm ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={rm ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: rm ? 0 : 0.28, ease: 'easeOut' }}
                  >
                    {aboutSlides[activeAboutStep].description}
                  </motion.p>
                </AnimatePresence>
                <a className="np-identity-link" href={whatsappLink('Halo, saya ingin mengenal layanan North Production lebih lanjut.')} target="_blank" rel="noreferrer">Kenal Lebih Dekat</a>
              </div>
            </div>
          </div>

          <div className="np-identity-showcase">
            <p className="np-identity-showcase-intro">
              North Production adalah partner kreatif untuk kebutuhan produksi foto, video, dan konten visual profesional di Yogyakarta dan seluruh Indonesia.
            </p>
            <div className="np-identity-principles" aria-label="Prinsip North Production">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  className="np-identity-principle-card"
                  key={activeAboutStep}
                  initial={rm ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-32px' }}
                  exit={rm ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: rm ? 0 : 0.34, ease: 'easeOut' }}
                >
                  <div className="np-identity-principle-surface">
                    <span className="np-identity-item-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{aboutSlides[activeAboutStep].icon}</svg>
                    </span>
                    <div className="np-identity-item-content">
                      <span className="np-identity-item-number">0{activeAboutStep + 1}</span>
                      <h3 className="np-identity-item-label">{aboutSlides[activeAboutStep].cardTitle}</h3>
                      <p className="np-identity-item-text">{aboutSlides[activeAboutStep].cardDescription}</p>
                    </div>
                    <span className="np-identity-card-art" aria-hidden="true">
                      <svg viewBox="0 0 120 88" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{aboutSlides[activeAboutStep].art}</svg>
                    </span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
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
        <section className="np-social" id="ikuti-kami" aria-label="Instagram North Production">
          <div className="np-social-gallery-heading">
            <div>
              <p className="np-social-label">Follow Us</p>
              <a href="https://www.instagram.com/north.production/" target="_blank" rel="noreferrer" className="np-social-handle">
                @NORTH.<em>PRODUCTION</em>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4.5 11.5 11.5 4.5M5 4.5h6.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="np-social-actions">
              <div className="np-social-controls" aria-label="Navigasi foto Instagram">
                <button type="button" onClick={() => scrollSocial(-1)} aria-label="Foto sebelumnya">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m0 0 7-7m-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" onClick={() => scrollSocial(1)} aria-label="Foto berikutnya">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m0 0-7-7m7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="np-social-grid"
            ref={socialTrackRef}
            onPointerEnter={() => setIsSocialPaused(true)}
            onPointerLeave={() => setIsSocialPaused(false)}
            onFocusCapture={() => setIsSocialPaused(true)}
            onBlurCapture={() => setIsSocialPaused(false)}
          >
            {socialGallery.map((post, index) => (
              <motion.article
                className="np-social-photo np-social-post"
                key={post.shortcode}
                initial={rm ? false : { opacity: 0, scale: 1.035 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: socialTrackRef, once: true, amount: 0.25 }}
                transition={{ duration: rm ? 0 : 0.45, delay: rm ? 0 : index * 0.035, ease: 'easeOut' }}
              >
                    <a className="np-social-post-image" href={`https://www.instagram.com/p/${post.shortcode}/`} target="_blank" rel="noreferrer" aria-label={`Buka postingan Instagram: ${post.caption}`}>
                      <img src={post.image} alt={post.alt} loading="lazy" />
                    </a>
                    <div className="np-social-post-details">
                      <div className="np-social-post-actions" aria-hidden="true">
                        <span>
                      <svg className="is-liked" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" /></svg>
                      <svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.5 8.5 0 0 1-12.24 7.6L3 21l1.9-5.76A8.5 8.5 0 1 1 21 11.5Z" /></svg>
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7Z" /></svg>
                        </span>
                    <svg className="np-social-post-save" viewBox="0 0 24 24" fill="none"><path d="M7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75A1.75 1.75 0 0 1 7.75 3Z" /></svg>
                      </div>
                      <p className="np-social-post-caption"><strong>north_production</strong> {post.caption}</p>
                      <a className="np-social-post-comments" href={`https://www.instagram.com/p/${post.shortcode}/`} target="_blank" rel="noreferrer">Lihat postingan di Instagram</a>
                    </div>
              </motion.article>
            ))}
          </div>
          <div className="np-social-rule" aria-hidden="true" />
        </section>

        {/* ════════ CTA BAND ════════ */}
        <motion.section className="np-cta-band" id="contact" {...fade}>
          <div className="np-cta-card">
            <div className="np-cta-content">
              <p className="np-cta-eyebrow">Mulai Kolaborasi</p>
              <h2 className="np-cta-band-text">
                Punya proyek yang ingin <em>diwujudkan?</em>
              </h2>
              <p className="np-cta-description">
                Ceritakan kebutuhan visual Anda kepada kami. Tim North Production siap merancang solusi kreatif untuk brand, bisnis, atau event Anda.
              </p>
            </div>
            <div className="np-cta-action">
              <a href={whatsappLink('Halo, saya ingin berdiskusi tentang proyek bersama North Production.')} className="np-cta-button" target="_blank" rel="noreferrer">
                Mulai Percakapan <span aria-hidden="true">→</span>
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
