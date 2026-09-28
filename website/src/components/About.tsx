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
    <section id="about" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -top-5 -left-5 h-full w-full rounded-[2rem] border-2 border-gold-400/70"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-crimson-900/20">
            <img
              src={about}
              alt={site.founder}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
          </div>
          <div className="absolute -right-3 -bottom-6 rounded-2xl bg-crimson-700 px-6 py-4 text-cream-50 shadow-xl sm:right-6">
            <p className="font-display text-2xl font-bold">{site.founder}</p>
            <p className="font-accent text-xs tracking-[0.2em] text-gold-300 uppercase">Founder &amp; Purohit</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 font-accent text-xs tracking-[0.3em] text-crimson-600 uppercase">
            <span className="h-px w-8 bg-crimson-600/40" />
            About Us
          </div>
          <h2 className="mt-4 text-4xl leading-tight font-semibold text-crimson-800 sm:text-5xl">
            Preserving Tradition, Spreading Divine Grace
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            {site.name}, led by <strong className="text-crimson-700">{site.founder}</strong>, provides
            traditional Vedic puja and spiritual services performed according to established customs and
            rituals. Our experienced purohits conduct ceremonies with proper procedures, mantras and
            devotional practices for homes, families and special occasions.
          </p>
          <p className="mt-4 leading-relaxed text-ink/75">
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
