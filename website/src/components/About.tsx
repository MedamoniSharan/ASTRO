import { CircleCheck } from 'lucide-react'
import about from '../assets/about.jpg'
import { site } from '../data/site'
import { Reveal } from './Reveal'

const points = [
  'Ceremonies performed as per established Vedic customs',
  'Proper procedures, mantras and devotional practices',
  'Pujas for homes, families, businesses and special occasions',
  'Astrology and muhurtham guidance for every event',
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-16 sm:py-24 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -top-3 -left-3 h-full w-full rounded-3xl border-2 border-gold-400/70 sm:-top-5 sm:-left-5 sm:rounded-[2rem]"
          />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-crimson-900/20 sm:rounded-[2rem]">
            <img
              src={about}
              alt={site.founder}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
          </div>
          <div className="absolute right-3 -bottom-6 rounded-2xl bg-crimson-700 px-4 py-3 text-cream-50 shadow-xl sm:right-6 sm:px-6 sm:py-4">
            <p className="font-display text-xl font-bold sm:text-2xl">{site.founder}</p>
            <p className="font-accent text-xs tracking-[0.2em] text-gold-300 uppercase">Founder &amp; Purohit</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 font-accent text-xs tracking-[0.3em] text-crimson-600 uppercase">
            <span className="h-px w-8 bg-crimson-600/40" />
            About Us
          </div>
          <h2 className="mt-3 text-[2rem] leading-tight font-semibold text-crimson-800 sm:mt-4 sm:text-5xl">
            Preserving Tradition, Spreading Divine Grace
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/75 sm:mt-6 sm:text-base">
            {site.name}, led by <strong className="text-crimson-700">{site.founder}</strong>, provides
            traditional Vedic puja and spiritual services performed according to established customs and
            rituals. Our experienced purohits conduct ceremonies with proper procedures, mantras and
            devotional practices for homes, families and special occasions.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/75 sm:text-base">
            Our goal is to make traditional Vedic ceremonies convenient while maintaining their spiritual
            and cultural significance, wherever you are in India.
          </p>
          <ul className="mt-8 grid gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink/80">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-crimson-600" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
