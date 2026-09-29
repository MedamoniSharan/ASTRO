import { useState, type FormEvent, type ReactNode } from 'react'
import {
  CalendarCheck,
  CalendarDays,
  ChevronDown,
  Clock,
  Languages,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import { pujas, site, telLink, yagams } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { Reveal } from './Reveal'

const timeSlots = [
  'Early morning (5 AM – 8 AM)',
  'Morning (8 AM – 11 AM)',
  'Afternoon (11 AM – 2 PM)',
  'Evening (4 PM – 7 PM)',
  'As per muhurtham (please suggest)',
]

const languages = ['Telugu', 'Hindi', 'Tamil', 'Kannada', 'Marathi', 'Sanskrit only']

const otherOption = 'Other / Not sure yet'

const trustPoints = [
  { icon: ShieldCheck, title: 'Experienced Purohits', text: 'Traditional & trusted' },
  { icon: MapPin, title: 'All over India', text: 'At your home or venue' },
  { icon: CalendarCheck, title: 'Muhurtham Guidance', text: 'Auspicious date & time' },
  { icon: UsersRound, title: 'Complete Arrangements', text: 'Purohit, samagri & more' },
]

function localISODate(date: Date) {
  const offset = date.getTimezoneOffset() * 60_000
  return new Date(date.getTime() - offset).toISOString().slice(0, 10)
}

const today = localISODate(new Date())

function formatDate(iso: string) {
  return new Date(`${iso}T00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const fieldClass =
  'h-[54px] w-full appearance-none rounded-xl border border-sand/80 bg-cream-50 pr-10 pl-11 text-[15px] text-ink transition outline-none placeholder:text-ink/40 hover:border-gold-500/70 focus:border-crimson-600 focus:bg-white focus:ring-4 focus:ring-crimson-600/10 [&::-webkit-date-and-time-value]:text-left'

type FieldProps = {
  id: string
  label: string
  icon: typeof Sparkles
  select?: boolean
  children: ReactNode
}

function Field({ id, label, icon: Icon, select, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-crimson-900">
        {label}
      </label>
      <div className="relative">
        <Icon aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-crimson-600/80" />
        {children}
        {select && (
          <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink/50" />
        )}
      </div>
    </div>
  )
}

export function BookingForm() {
  const [puja, setPuja] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [city, setCity] = useState('')
  const [language, setLanguage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const details = [
      `Puja: ${puja}`,
      `Date: ${formatDate(date)}`,
      `Time: ${time}`,
      `City: ${city.trim()}`,
      `Priest language: ${language || 'Any'}`,
    ]
    const text = [
      'Namaste, I would like to book a puja.',
      details.join('\n'),
      'Please confirm availability and share the details.',
    ].join('\n\n')
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section id="book" aria-labelledby="book-title" className="relative pt-16 sm:pt-24 lg:pt-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 font-accent text-xs tracking-[0.3em] text-crimson-600 uppercase">
            <Sparkles className="size-3.5 text-gold-500" />
            Find the right Vedic service
          </p>
          <h2 id="book-title" className="mt-3 text-[2.25rem] leading-tight font-semibold text-crimson-800 sm:mt-4 sm:text-5xl">
            Book a Puja
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink/70 sm:mt-4 sm:text-base lg:mx-0">
            Choose your puja, preferred date and time. We will confirm the purohit, muhurtham and all arrangements
            with you on WhatsApp.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 text-left sm:gap-x-6">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-600 ring-1 ring-gold-400/40">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm leading-tight font-semibold text-crimson-900">{title}</span>
                  <span className="mt-0.5 block text-xs text-ink/60">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl border border-sand/60 bg-white p-5 shadow-xl shadow-crimson-900/10 sm:p-8"
          >
            <div aria-hidden className="absolute inset-x-8 -top-px h-1 rounded-b-full bg-gradient-to-r from-crimson-600 via-gold-400 to-crimson-600" />

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="sm:col-span-2">
                <Field id="book-puja" label="Puja" icon={Sparkles} select>
                  <select
                    id="book-puja"
                    required
                    value={puja}
                    onChange={(e) => setPuja(e.target.value)}
                    className={`${fieldClass} ${puja ? '' : 'text-ink/50'}`}
                  >
                    <option value="" disabled>
                      Choose Puja
                    </option>
                    <optgroup label="Pujas">
                      {pujas.map((p) => (
                        <option key={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Homams & Yagams">
                      {yagams.map((y) => (
                        <option key={y.name}>{y.name}</option>
                      ))}
                    </optgroup>
                    <option>{otherOption}</option>
                  </select>
                </Field>
              </div>

              <Field id="book-date" label="Date" icon={CalendarDays}>
                <input
                  id="book-date"
                  type="date"
                  required
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${fieldClass} pr-3 ${date ? '' : 'text-ink/50'}`}
                />
              </Field>

              <Field id="book-time" label="Time" icon={Clock} select>
                <select
                  id="book-time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`${fieldClass} ${time ? '' : 'text-ink/50'}`}
                >
                  <option value="" disabled>
                    Select Time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </Field>

              <Field id="book-city" label="City" icon={MapPin}>
                <input
                  id="book-city"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="e.g. Hyderabad"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`${fieldClass} pr-4`}
                />
              </Field>

              <Field id="book-language" label="Priest Language" icon={Languages} select>
                <select
                  id="book-language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`${fieldClass} ${language ? '' : 'text-ink/50'}`}
                >
                  <option value="">Any language</option>
                  {languages.map((lang) => (
                    <option key={lang}>{lang}</option>
                  ))}
                </select>
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-6 min-h-[56px] w-full text-base sm:mt-7">
              <WhatsAppIcon className="size-5" />
              Book on WhatsApp
            </button>
            <a
              href={telLink}
              className="btn mt-3 min-h-[52px] w-full border border-gold-400/50 bg-gold-100 text-base text-crimson-800 hover:bg-gold-200"
            >
              <Phone className="size-[18px]" />
              Or call {site.phone}
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
