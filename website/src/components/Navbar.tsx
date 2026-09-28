import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { navLinks, site, telLink } from '../data/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sand/60 bg-cream-50/85 shadow-sm backdrop-blur-lg'
          : 'bg-cream-50'
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt={`${site.name} logo`}
            className="size-12 shrink-0 rounded-full object-cover ring-2 ring-gold-400/70"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-bold text-crimson-700 sm:text-xl">
              {site.name}
            </span>
            <span className="block font-accent text-[11px] tracking-[0.2em] text-gold-600 uppercase">
              {site.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-ink/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold-400 after:transition-all hover:text-crimson-600 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={telLink} className="btn-primary hidden sm:inline-flex">
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-crimson-700 hover:bg-crimson-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-crimson-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-cream-50 p-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="" className="size-11 rounded-full ring-2 ring-gold-400/70" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-crimson-700 hover:bg-crimson-50"
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-medium text-ink/80 hover:bg-crimson-50 hover:text-crimson-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={telLink} className="btn-primary mt-auto">
                <Phone className="size-4" />
                Call {site.phone}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
