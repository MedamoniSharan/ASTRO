import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import ganapathi from '../assets/ganapathi-puja.jpg'
import houseCeremony from '../assets/house-ceremony.jpg'
import logo from '../assets/logo.jpg'
import { site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { fadeUp, stagger } from './motion'
import { SunRays } from './SunRays'

export function Hero() {
  const reduce = useReducedMotion()
  const motionProps = reduce ? {} : { initial: 'hidden', animate: 'visible' }

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 kolam-bg" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-gold-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-40 -z-10 size-[32rem] rounded-full bg-crimson-500/10 blur-3xl"
      />

      <div className="container-x grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
        <motion.div variants={stagger} {...motionProps} className="flex flex-col items-start">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-100/70 px-4 py-1.5 text-xs font-medium text-crimson-700"
          >
            <Sparkles className="size-3.5 text-gold-500" />
            {site.strapline}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.75rem] leading-[1.08] font-bold text-balance text-crimson-800 sm:text-6xl lg:text-7xl"
          >
            Sacred Vedic Rituals,{' '}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,rgb(255_210_77/0.7)_62%,rgb(255_210_77/0.7)_92%,transparent_92%)] text-crimson-600">
              performed with devotion
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {site.name} provides traditional Vedic puja and spiritual services performed according to
            established customs. Our experienced purohits conduct every ceremony with proper procedures,
            mantras and devotion for your home, family and special occasions.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href={telLink} className="btn-primary px-7 py-3.5 text-base">
              <Phone className="size-4" />
              Call {site.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline px-7 py-3.5 text-base">
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink/70">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-crimson-600" />
              Authentic procedures
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-crimson-600" />
              Available all over India
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl pb-16 lg:pb-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-crimson-900/20">
            <img
              src={ganapathi}
              alt="Family performing Ganapathi puja"
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-2 -left-4 w-1/2 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:-left-10 lg:-bottom-6">
            <img
              src={houseCeremony}
              alt="Gruhapravesham ceremony with homam"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute -top-10 -right-4 size-32 animate-float sm:-right-8 sm:size-40">
            <SunRays className="absolute inset-0 size-full animate-spin-slow drop-shadow-md" />
            <img
              src={logo}
              alt=""
              className="absolute inset-[22%] size-[56%] rounded-full object-cover ring-4 ring-white"
            />
          </div>

          <div className="absolute right-2 bottom-4 rounded-2xl border border-gold-300/60 bg-cream-50/95 px-5 py-3 shadow-lg backdrop-blur sm:right-6 lg:bottom-0">
            <p className="font-display text-2xl font-bold text-crimson-700">From ₹2,000</p>
            <p className="text-xs text-ink/60">Ganapathi Puja onwards</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
