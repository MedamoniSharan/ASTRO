import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import ganapathi from '../assets/ganapathi-puja.jpg'
import houseCeremony from '../assets/house-ceremony.jpg'
import marriage from '../assets/marriage.jpg'
import logo from '../assets/logo.jpg'
import toranam from '../assets/toranam.png'
import { formatINR, site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { SunRays } from './SunRays'
import { TempleSilhouette } from './TempleSilhouette'

const slides = [
  {
    eyebrow: 'Book your puja today',
    title: 'Vedic Pujas for Every Sacred Occasion',
    text: 'Traditional puja and spiritual services performed according to established customs, with proper procedures, mantras and devotion for your home and family.',
    image: ganapathi,
    alt: 'Family performing Ganapathi puja',
    label: 'Ganapathi Puja',
    price: 2000,
  },
  {
    eyebrow: 'Gruhapravesham & Vastu',
    title: 'Bless Your New Home the Vedic Way',
    text: 'Gruhapravesham, Vastu puja and homam conducted by experienced purohits on an auspicious muhurtham, anywhere in India.',
    image: houseCeremony,
    alt: 'Gruhapravesham ceremony with homam',
    label: 'House Ceremony',
    price: 15000,
  },
  {
    eyebrow: 'Vivaham & family ceremonies',
    title: 'Sacred Rituals for Life’s Big Moments',
    text: 'From Namakaranam to Vivaham, every ceremony is performed step by step with the right mantras and traditions.',
    image: marriage,
    alt: 'Traditional Vedic wedding ceremony',
    label: 'Marriage Rituals',
    price: 11500,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const slide = slides[index]

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setInterval(() => go(1), 6000)
    return () => window.clearInterval(id)
  }, [reduce, paused, go, index])

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured puja services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
      className="relative isolate -mt-[156px] overflow-hidden bg-gradient-to-br from-saffron-300 via-saffron-400 to-saffron-500 pt-[156px] sm:-mt-[188px] sm:pt-[188px]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-11 bg-repeat-x drop-shadow-[0_3px_3px_rgb(36_92_26/0.35)] [background-size:auto_100%] sm:h-14"
        style={{ backgroundImage: `url(${toranam})` }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_top,rgb(255_236_170/0.55),transparent_70%)]"
      />
      <TempleSilhouette className="absolute bottom-0 -left-10 -z-10 h-64 text-saffron-600/45 sm:h-96 lg:left-0" />
      <TempleSilhouette className="absolute -right-10 bottom-0 -z-10 h-56 text-saffron-600/45 sm:h-80 lg:right-0" />

      <div className="container-x relative grid items-center gap-10 pt-6 pb-36 sm:pt-10 sm:pb-40 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-8 lg:pb-44">
        <div className="relative min-h-[23rem] sm:min-h-[22rem]">
          <span aria-hidden className="block text-5xl leading-none text-crimson-600 sm:text-6xl">
            ॐ
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease }}
              aria-live="polite"
            >
              <p className="mt-5 font-display text-lg font-bold tracking-[0.08em] text-crimson-600 uppercase sm:text-xl">
                {slide.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-[2.35rem] leading-[1.02] font-bold tracking-[0.02em] text-crimson-900 uppercase min-[400px]:text-[2.6rem] sm:text-6xl lg:text-[4.25rem]">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/80 sm:text-lg">{slide.text}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href={telLink} className="btn-primary rounded-md px-4 py-3.5 text-[15px] sm:px-8 sm:text-base">
              <Phone className="size-4" />
              <span className="sm:hidden">Call Now</span>
              <span className="hidden sm:inline">Call {site.phone}</span>
            </a>
            <a
              href={whatsappLink(slide.label)}
              target="_blank"
              rel="noreferrer"
              className="btn rounded-md bg-white/90 px-4 py-3.5 text-[15px] text-crimson-800 shadow-lg shadow-saffron-700/20 hover:-translate-y-0.5 hover:bg-white sm:px-8 sm:text-base"
            >
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
          <div className="absolute -inset-3 rounded-t-full rounded-b-[2rem] border-2 border-dashed border-crimson-700/30 sm:-inset-4" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[1.75rem] border-[6px] border-white bg-saffron-300 shadow-2xl shadow-saffron-700/40">
            <AnimatePresence initial={false}>
              <motion.img
                key={index}
                src={slide.image}
                alt={slide.alt}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                initial={reduce ? false : { opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.8, ease }}
                className="absolute inset-0 size-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-crimson-900/50 to-transparent" />
          </div>

          <div className="absolute -top-4 -left-6 size-24 sm:-left-10 sm:size-28">
            <SunRays className="absolute inset-0 size-full animate-spin-slow drop-shadow-md" />
            <img
              src={logo}
              alt=""
              className="absolute inset-[22%] size-[56%] rounded-full object-cover ring-4 ring-white"
            />
          </div>

          <div className="absolute -right-3 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-8">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-crimson-600 uppercase">{slide.label}</p>
            <p className="font-display text-2xl leading-tight font-bold text-crimson-900">
              <span className="text-sm font-medium text-ink/60">from </span>
              {formatINR(slide.price)}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-24 flex justify-center gap-2 sm:bottom-28 lg:bottom-32">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${s.label}`}
              aria-current={i === index}
              className="grid h-8 place-items-center px-1"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-crimson-700' : 'w-2 bg-crimson-900/30 hover:bg-crimson-900/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-md bg-crimson-900/80 text-gold-200 shadow-lg transition-colors hover:bg-crimson-800 lg:grid xl:left-6"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-md bg-crimson-900/80 text-gold-200 shadow-lg transition-colors hover:bg-crimson-800 lg:grid xl:right-6"
      >
        <ChevronRight className="size-5" />
      </button>
    </section>
  )
}
