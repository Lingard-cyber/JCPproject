'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'

type SiteLinkProps = ComponentProps<typeof Link>

export default function SiteLink({ href, onClick, target, download, ...props }: SiteLinkProps) {
  const hrefPath = typeof href === 'string' ? href : href.pathname
  const hasFragment = typeof href === 'string' ? href.includes('#') : Boolean(href.hash)
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target && target !== '_self') ||
      download ||
      !hrefPath?.startsWith('/') ||
      hrefPath.startsWith('//') ||
      hasFragment
    ) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  return (
    <Link
      {...props}
      href={href}
      target={target}
      download={download}
      scroll={hasFragment ? undefined : false}
      onClick={handleClick}
    />
  )
}
