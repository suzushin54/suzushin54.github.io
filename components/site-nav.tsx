'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/lib/portfolio-data'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteNav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
        >
          <span className="text-brand-accent">$</span> blueprint_harbor
          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-brand-accent" aria-hidden />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                active === item.id
                  ? 'text-foreground dark:text-brand-royal'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              {active === item.id && (
                <span
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-accent dark:bg-brand-royal"
                  aria-hidden
                />
              )}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
