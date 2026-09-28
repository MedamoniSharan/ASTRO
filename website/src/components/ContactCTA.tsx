import { MapPin, Phone } from 'lucide-react'
import { site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { Reveal } from './Reveal'
import { SunRays } from './SunRays'

export function ContactCTA() {
  return (
    <section id="contact" className="pb-14 sm:pb-24 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-crimson-700 via-crimson-600 to-crimson-800 px-5 py-12 text-center shadow-2xl shadow-crimson-900/30 sm:rounded-[2rem] sm:px-12 sm:py-20">
            <SunRays
              rays={24}
              className="absolute top-1/2 left-1/2 -z-10 size-[44rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-15 mix-blend-screen"
            />
            <p className="font-accent text-xs tracking-[0.3em] text-gold-300 uppercase">
              Trusted Vedic Services • Traditional Procedures
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-[2.25rem] leading-tight font-bold text-cream-50 sm:mt-4 sm:text-6xl">
              Book Your Puja Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-cream-100/80 sm:mt-5 sm:text-base">
              Tell us the puja, date and location. Our team will get back to you with the purohit, samagri
              list and timings.
            </p>

            <a
              href={telLink}
              className="mt-6 inline-block font-display text-[2.5rem] font-bold text-gold-300 hover:text-gold-200 sm:mt-8 sm:text-5xl"
            >
              {site.phone}
            </a>

            <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3 sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
              <a href={telLink} className="btn-gold px-4 py-3.5 text-[15px] sm:px-7 sm:text-base">
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn bg-[#25D366] px-4 py-3.5 text-[15px] text-white shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-[#1ebe5b] sm:px-7 sm:text-base"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-cream-100/80">
              <MapPin className="size-4 text-gold-300" />
              Serving devotees all over India
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
