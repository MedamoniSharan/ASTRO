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
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple & Convenient Booking"
          description="Our goal is to make traditional Vedic ceremonies convenient while keeping their spiritual and cultural significance intact."
        />

        <RevealGroup className="relative mx-auto mt-10 grid max-w-md gap-8 sm:mt-16 md:max-w-none md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-gold-400/60 md:block"
          />
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-8 border-l-2 border-dashed border-gold-400/60 md:hidden"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <RevealItem
              key={title}
              className="relative flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
            >
              <span className="relative grid size-16 shrink-0 place-items-center rounded-full bg-cream-50 ring-2 ring-gold-400 md:size-20">
                <span className="grid size-12 place-items-center rounded-full bg-crimson-600 text-gold-300 md:size-16">
                  <Icon className="size-6 md:size-7" />
                </span>
                <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-gold-400 font-display text-sm font-bold text-crimson-900 md:size-7">
                  {i + 1}
                </span>
              </span>
              <div className="pt-1 md:pt-0">
                <h3 className="text-xl font-bold text-crimson-800 md:mt-6 md:text-2xl">{title}</h3>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink/70 md:mt-2">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold-300/60 bg-gold-100/50 px-5 py-4 text-center text-sm leading-relaxed text-crimson-800 sm:mt-14 sm:px-6">
          Our team coordinates the purohit, puja samagri, timings and all other arrangements, so you can
          focus on the ceremony.
        </p>
      </div>
    </section>
  )
}
