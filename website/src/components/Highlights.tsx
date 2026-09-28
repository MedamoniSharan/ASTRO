import { ArrowRight, Flame, House, Stars } from 'lucide-react'
import { RevealGroup, RevealItem } from './Reveal'

const cards = [
  {
    icon: House,
    title: 'Pujas at Your Home',
    text: 'Ganapathi puja, vratams, Gruhapravesham and family ceremonies performed at your doorstep.',
    href: '#pujas',
    cta: 'View pujas',
  },
  {
    icon: Flame,
    title: 'Homams & Yagams',
    text: 'Navagraha shanti, Sudarshana, Chandi and Rudra yagams conducted by a team of purohits.',
    href: '#yagams',
    cta: 'Explore yagams',
  },
  {
    icon: Stars,
    title: 'Astrology & Muhurtham',
    text: 'Consultations and auspicious muhurtham guidance for every important event in life.',
    href: '#contact',
    cta: 'Get in touch',
  },
]

export function Highlights() {
  return (
    <section className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32">
      <div className="container-x">
        <RevealGroup className="grid gap-12 pt-8 sm:gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text, href, cta }) => (
            <RevealItem key={title}>
              <a
                href={href}
                className="group relative flex h-full flex-col items-center rounded-2xl bg-white px-6 pt-12 pb-7 text-center shadow-xl shadow-crimson-900/10 ring-1 ring-sand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="absolute -top-8 left-1/2 grid size-16 -translate-x-1/2 rotate-45 place-items-center rounded-[0_50%_50%_50%] bg-white shadow-[0_-6px_14px_rgb(61_8_10/0.08)] ring-1 ring-sand/50">
                  <span className="grid size-12 -rotate-45 place-items-center rounded-full bg-crimson-50 text-crimson-600 transition-colors duration-300 group-hover:bg-crimson-600 group-hover:text-gold-300">
                    <Icon className="size-6" />
                  </span>
                </span>
                <h3 className="text-2xl font-bold text-crimson-800">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-600">
                  {cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
