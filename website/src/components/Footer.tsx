import { MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { navLinks, pujas, site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-crimson-900 text-cream-100/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="size-14 rounded-full object-cover ring-2 ring-gold-400/70" />
            <div className="leading-tight">
              <p className="font-display text-xl font-bold text-cream-50">{site.name}</p>
              <p className="font-accent text-[11px] tracking-[0.2em] text-gold-300 uppercase">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Traditional Vedic pujas, homams and family ceremonies performed by experienced purohits with
            devotion and proper procedures.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-[#FF0000] hover:text-white"
            >
              <YouTubeIcon className="size-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href={telLink}
              aria-label="Call"
              className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gold-400 hover:text-crimson-900"
            >
              <Phone className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-accent text-sm tracking-[0.2em] text-gold-300 uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-sm tracking-[0.2em] text-gold-300 uppercase">Popular Pujas</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {pujas.slice(0, 6).map((puja) => (
              <li key={puja.name}>
                <a href="#pujas" className="transition-colors hover:text-gold-300">
                  {puja.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-sm tracking-[0.2em] text-gold-300 uppercase">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={telLink} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone className="size-4 text-gold-300" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon className="size-4 text-gold-300" />
                WhatsApp {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-gold-300" />
              {site.coverage}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-100/60 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="font-accent tracking-wide">{site.strapline}</p>
        </div>
      </div>
    </footer>
  )
}
