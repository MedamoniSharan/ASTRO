import {
  Baby,
  Flame,
  Flower2,
  Gem,
  GraduationCap,
  HandHeart,
  House,
  Lamp,
  Sparkles,
  Stars,
  type LucideIcon,
} from 'lucide-react'
import { services, type Service } from '../data/site'
import { RevealGroup, RevealItem } from './Reveal'
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
    <section id="services" className="relative bg-cream-100 py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 kolam-bg opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Services"
          title="A Wide Range of Vedic Services"
          description="From daily devotional pujas to life's biggest ceremonies, we bring tradition to your doorstep."
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
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
      </div>
    </section>
  )
}
