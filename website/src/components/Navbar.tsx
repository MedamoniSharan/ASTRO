import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { navLinks, site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'

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
    <header className="sticky top-0 z-50 py-2 sm:py-3">
      <div className="container-x max-sm:px-3">
      <nav
        className={`flex h-16 items-center justify-between gap-3 rounded-2xl bg-white/95 pr-2 pl-3 backdrop-blur-lg transition-shadow duration-300 sm:h-20 sm:gap-4 sm:px-6 ${
          scrolled ? 'shadow-xl shadow-crimson-900/15 ring-1 ring-sand/60' : 'shadow-lg shadow-saffron-700/25'
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={logo}
            alt={`${site.name} logo`}
            className="size-10 shrink-0 rounded-full object-cover ring-2 ring-gold-400/70 sm:size-12"
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-[15px] leading-[1.1] font-bold text-crimson-700 min-[400px]:text-base sm:text-xl">
              {site.name}
            </span>
            <span className="mt-0.5 block font-accent text-[9px] tracking-[0.18em] text-gold-600 uppercase sm:text-[11px] sm:tracking-[0.2em]">
              {site.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-accent text-[13px] tracking-[0.12em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-crimson-600 after:transition-all hover:text-crimson-600 hover:after:w-full ${
                  i === 0 ? 'text-crimson-600 after:w-full' : 'text-ink after:w-0'
                }`}
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
            className="grid size-11 shrink-0 place-items-center rounded-full text-crimson-700 hover:bg-crimson-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>
      </div>

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
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col overflow-y-auto bg-cream-50 p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl lg:hidden"
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
              <div className="mt-auto grid gap-2 pt-8">
                <a href={telLink} className="btn-primary">
                  <Phone className="size-4" />
                  Call {site.phone}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-[#25D366] text-white hover:bg-[#1ebe5b]"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
