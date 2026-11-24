'use client'

import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'

const posts = [
  'DQd7UgJk8ea',
  'DQYMdZIk7dD',
  'DQk5X_RgjM4',
  'ClBFxaIAgmv',
  'DQydjeAk6e5',
  'DQf-uuYgvBL',
]

export default function SocialGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  function scrollPosts(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="np-social" id="ikuti-kami" aria-label="Instagram North Production">
      <div className="np-social-gallery-heading">
        <div>
          <p className="np-social-label">Follow Us</p>
          <a
            href="https://www.instagram.com/north.production/"
            target="_blank"
            rel="noreferrer"
            className="np-social-handle"
          >
            @NORTH.<em>PRODUCTION</em>
          </a>
        </div>
        <div className="np-social-actions">
          <div className="np-social-controls" aria-label="Navigasi unggahan Instagram">
            <button type="button" onClick={() => scrollPosts(-1)} aria-label="Unggahan sebelumnya">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5m0 0 7-7m-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={() => scrollPosts(1)} aria-label="Unggahan berikutnya">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-7-7m7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="np-social-grid" ref={trackRef}>
        {posts.map((shortcode, index) => (
          <article className="np-social-photo" key={shortcode}>
            <div className="np-social-media-window">
              <iframe
                className="np-social-embed"
                src={`https://www.instagram.com/p/${shortcode}/embed/?hidecaption=true`}
                title={`Unggahan Instagram North Production ${index + 1}`}
                loading="lazy"
                allow="encrypted-media; picture-in-picture"
                scrolling="no"
                tabIndex={-1}
                allowFullScreen
              />
            </div>
          </article>
        ))}
      </div>
      <div className="np-social-rule" aria-hidden="true" />
    </section>
  )
}
