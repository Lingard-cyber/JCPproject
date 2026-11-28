'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import Link from './SiteLink'
import { productionServices } from '../layanan/services'
import { priceCategories } from '../harga/packages'
import { workSamples } from '../contoh-foto-video/samples'
import { whatsappLink } from '../contact'

const dropdowns = [
  {
    label: 'Layanan',
    href: '/layanan',
    items: [
      ...productionServices.map(service => ({ label: service.name, href: `/layanan/${service.slug}` })),
    ],
  },
  {
    label: 'Daftar Harga',
    href: '/harga',
    items: [
      ...priceCategories.map(category => ({ label: category.name, href: `/harga/${category.slug}` })),
      { label: 'Minta penawaran', href: whatsappLink('Halo, saya ingin meminta penawaran dari North Production.') },
    ],
  },
  {
    label: 'Contoh foto dan video',
    href: '/contoh-foto-video',
    items: [
      ...workSamples.map(sample => ({ label: sample.label, href: `/contoh-foto-video/${sample.slug}` })),
    ],
  },
]

function ChevronDown() {
  return <svg className="nav-chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="1.5" /></svg>
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    let frame = 0
    const updateScrollState = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > 32)

        const nav = document.querySelector<HTMLElement>('.np-nav')
        if (!nav) return
        const sampleY = Math.min(nav.offsetHeight / 2, window.innerHeight - 1)
        const sections = document.querySelectorAll<HTMLElement>('#main > section, #main > div, #main > article')
        let section: HTMLElement | null = null
        for (const candidate of sections) {
          const bounds = candidate.getBoundingClientRect()
          if (bounds.top <= sampleY && bounds.bottom > sampleY) {
            section = candidate
            break
          }
        }

        let surface: HTMLElement | null = section
        let rgb: number[] | null = null
        while (surface && surface.id !== 'main') {
          const style = window.getComputedStyle(surface)
          if (style.backgroundImage !== 'none') {
            rgb = [16, 24, 32]
            break
          }
          const background = style.backgroundColor
          const channels = background.match(/[\d.]+/g)?.map(Number)
          if (channels && channels.length >= 3 && (channels.length < 4 || channels[3] > 0.05)) {
            rgb = channels.slice(0, 3).map(channel => Math.round(channel))
            break
          }
          surface = surface.parentElement
        }

        if (!rgb) {
          const background = window.getComputedStyle(document.body).backgroundColor
          const channels = background.match(/[\d.]+/g)?.map(Number)
          rgb = channels?.length && channels.length >= 3 ? channels.slice(0, 3).map(Math.round) : [16, 24, 32]
        }

        nav.style.setProperty('--nav-surface-rgb', rgb.join(', '))
        const luminance = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
        nav.dataset.theme = luminance > 145 ? 'light' : 'dark'
      })
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setOpenDropdown(null)
      }
    }
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target
      if (target instanceof Element && !target.closest('.nav-links, .np-navigation-menu')) {
        setOpenDropdown(null)
      }
    }
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [])

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }
  const toggleDropdown = (label: string) => {
    setOpenDropdown(current => current === label ? null : label)
  }

  return <>
    <header className={`np-nav${scrolled ? ' is-scrolled' : ''}`}>
      <Link href="/" className="nav-brand" aria-label="North Production, ke beranda">
        <img className="nav-brand-logo" src="/north-production-logo.png" alt="" />
        <span className="nav-brand-title">NORTH PRODUCTION</span>
      </Link>

      <nav className="nav-links" aria-label="Navigasi utama">
        <Link href="/" className={pathname === '/' ? 'is-active' : undefined} aria-current={pathname === '/' ? 'page' : undefined} onClick={() => setOpenDropdown(null)}>Home</Link>
        {dropdowns.map(dropdown => <div className={`nav-dropdown-wrap${openDropdown === dropdown.label ? ' is-open' : ''}`} key={dropdown.label}>
          <button
            type="button"
            className={pathname === dropdown.href || pathname.startsWith(`${dropdown.href}/`) ? 'is-active' : undefined}
            aria-expanded={openDropdown === dropdown.label}
            onClick={() => toggleDropdown(dropdown.label)}
          >
            {dropdown.label}<ChevronDown />
          </button>
          {openDropdown === dropdown.label && <div className="nav-drop-panel">
            {dropdown.items.map(item => item.href.startsWith('https://wa.me/')
              ? <a href={item.href} key={item.href} target="_blank" rel="noreferrer" onClick={() => setOpenDropdown(null)}>{item.label}</a>
              : <Link href={item.href} key={item.href} onClick={() => setOpenDropdown(null)}>{item.label}</Link>)}
          </div>}
        </div>)}
      </nav>

      <a href={whatsappLink('Halo, saya ingin menghubungi North Production.')} className="nav-contact" target="_blank" rel="noreferrer" onClick={() => setOpenDropdown(null)}>Kontak</a>

      <button
        className="nav-hamburger"
        aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={mobileOpen}
        aria-controls="site-navigation-menu"
        type="button"
        onClick={() => {
          setMobileOpen(open => !open)
          setOpenDropdown(null)
        }}
      >
        <span className={`nav-menu-icon${mobileOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /><i /></span>
        <span className="nav-menu-label">Menu</span>
      </button>
    </header>

    <AnimatePresence>
      {mobileOpen && <motion.nav
        id="site-navigation-menu"
        className="np-navigation-menu"
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        aria-label="Navigasi utama"
      >
        <span className="menu-kicker">North Production · Navigasi</span>
        <div className="menu-page-links">
          <Link href="/" onClick={closeMobileMenu}><span className="menu-link-number">01</span><span>Home</span></Link>
          {dropdowns.map((dropdown, index) => <div className={`menu-dropdown${openDropdown === dropdown.label ? ' is-open' : ''}`} key={dropdown.label}>
            <button
              type="button"
              aria-expanded={openDropdown === dropdown.label}
              onClick={() => toggleDropdown(dropdown.label)}
            >
              <span className="menu-link-number">0{index + 2}</span>
              <span>{dropdown.label}</span>
              <ChevronDown />
            </button>
            {openDropdown === dropdown.label && <div className="menu-sub-links">
              {dropdown.items.map(item => item.href.startsWith('https://wa.me/')
              ? <a href={item.href} key={item.href} target="_blank" rel="noreferrer" onClick={() => closeMobileMenu()}>{item.label}</a>
              : <Link href={item.href} key={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}
            </div>}
          </div>)}
          <a href={whatsappLink('Halo, saya ingin menghubungi North Production.')} target="_blank" rel="noreferrer" onClick={() => closeMobileMenu()}><span className="menu-link-number">05</span><span>Kontak</span></a>
        </div>
        <a className="menu-contact-link" href={whatsappLink('Halo, saya ingin memulai proyek bersama North Production.')} target="_blank" rel="noreferrer" onClick={() => closeMobileMenu()}>Mulai Proyek</a>
      </motion.nav>}
    </AnimatePresence>
  </>
}
