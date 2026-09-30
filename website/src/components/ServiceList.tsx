import {
  Baby,
  Building2,
  Flame,
  Flower2,
  Gem,
  GraduationCap,
  HandHeart,
  House,
  Lamp,
  Phone,
  Sparkles,
  Stars,
  type LucideIcon,
} from 'lucide-react'
import { services, telLink, whatsappLink, type Service } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { Reveal, RevealGroup, RevealItem } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons: Record<Service['icon'], LucideIcon> = {
  home: House,
  om: Sparkles,
  hands: HandHeart,
  flame: Flame,
  rings: Gem,
  graduation: GraduationCap,
  baby: Baby,
  candle: Lamp,
  flower: Flower2,
  stars: Stars,
}

export function ServiceList() {
  return (
    <section id="services" className="relative bg-cream-100 py-16 sm:py-24 lg:py-28">
      <div aria-hidden className="absolute inset-0 kolam-bg opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Services"
          title="A Wide Range of Vedic Services"
          description="From daily devotional pujas to life's biggest ceremonies, we bring tradition to your doorstep."
        />

        <RevealGroup className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <RevealItem key={service.name}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white/80 p-4 text-center sm:gap-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crimson-600/30 hover:bg-white hover:shadow-lg">
                  <span className="grid size-14 place-items-center rounded-full bg-crimson-50 text-crimson-600 ring-1 ring-crimson-600/10 transition-colors duration-300 group-hover:bg-crimson-600 group-hover:text-gold-300">
                    <Icon className="size-6" />
                  </span>
                  <p className="text-xs leading-snug font-medium text-ink/85 sm:text-sm">{service.name}</p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <Reveal className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/60 bg-gradient-to-r from-gold-100 via-white to-gold-100 p-6 text-center shadow-lg shadow-gold-500/10 sm:p-8 lg:flex lg:items-center lg:gap-8 lg:text-left">
            <span className="mx-auto grid size-16 shrink-0 place-items-center rounded-2xl bg-crimson-600 text-gold-300 shadow-lg shadow-crimson-900/20 lg:mx-0">
              <Building2 className="size-8" />
            </span>
            <div className="mt-4 flex-1 lg:mt-0">
              <p className="font-accent text-xs tracking-[0.25em] text-crimson-600 uppercase">For Companies & Offices</p>
              <h3 className="mt-2 text-2xl leading-tight font-bold text-crimson-800 sm:text-3xl">
                Daily Puja Services in All MNC and Non&#8209;MNC Companies
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                Regular daily pujas at your office or business premises, performed on schedule by experienced purohits.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:flex sm:justify-center lg:mt-0 lg:shrink-0">
              <a
                href={whatsappLink('daily puja services for our company')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary min-h-[50px] px-6"
              >
                <WhatsAppIcon className="size-5" />
                Enquire on WhatsApp
              </a>
              <a href={telLink} className="btn-outline min-h-[50px] px-6">
                <Phone className="size-[18px]" />
                Call Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
