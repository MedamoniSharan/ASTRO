import { CalendarDays, ListChecks, PhoneCall } from 'lucide-react'
import { RevealGroup, RevealItem } from './Reveal'
import { SectionHeading } from './SectionHeading'

const steps = [
  {
    icon: ListChecks,
    title: 'Choose your puja',
    text: 'Pick the puja, homam or ceremony you would like to perform.',
  },
  {
    icon: CalendarDays,
    title: 'Select date & location',
    text: 'Share your preferred date, muhurtham and the venue anywhere in India.',
  },
  {
    icon: PhoneCall,
    title: 'Call or WhatsApp us',
    text: 'Send your booking request and our team will confirm the details with you.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple & Convenient Booking"
          description="Our goal is to make traditional Vedic ceremonies convenient while keeping their spiritual and cultural significance intact."
        />

        <RevealGroup className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-gold-400/60 md:block"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <RevealItem key={title} className="relative flex flex-col items-center text-center">
              <span className="relative grid size-20 place-items-center rounded-full bg-cream-50 ring-2 ring-gold-400">
                <span className="grid size-16 place-items-center rounded-full bg-crimson-600 text-gold-300">
                  <Icon className="size-7" />
                </span>
                <span className="absolute -top-1 -right-1 grid size-7 place-items-center rounded-full bg-gold-400 font-display text-sm font-bold text-crimson-900">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-2xl font-bold text-crimson-800">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/70">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-14 max-w-2xl rounded-2xl border border-gold-300/60 bg-gold-100/50 px-6 py-4 text-center text-sm leading-relaxed text-crimson-800">
          Our team coordinates the purohit, puja samagri, timings and all other arrangements, so you can
          focus on the ceremony.
        </p>
      </div>
    </section>
  )
}
