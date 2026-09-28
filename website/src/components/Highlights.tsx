import { BookOpen, CalendarDays, MapPin, Users } from 'lucide-react'
import { RevealGroup, RevealItem } from './Reveal'

const highlights = [
  {
    icon: BookOpen,
    title: 'Authentic Vedic Rituals',
    text: 'Every ceremony follows established customs, with the right procedures and mantras.',
  },
  {
    icon: Users,
    title: 'Experienced Purohits',
    text: 'Learned purohits who conduct each puja with care, clarity and devotion.',
  },
  {
    icon: CalendarDays,
    title: 'Simple Booking',
    text: 'Choose a puja, share your date and location, and we arrange the rest.',
  },
  {
    icon: MapPin,
    title: 'All Over India',
    text: 'Puja services for homes, families and businesses across India.',
  },
]

export function Highlights() {
  return (
    <section className="relative bg-crimson-700">
      <div className="container-x py-14">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <RevealItem key={title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold-400 text-crimson-800 shadow-lg shadow-black/10">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream-50">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream-100/75">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
