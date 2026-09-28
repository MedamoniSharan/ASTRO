import { UserRound } from 'lucide-react'
import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { Reveal } from './Reveal'

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      <path d="M0 62 A62 62 0 0 1 62 0" strokeWidth="1.5" />
      <path d="M0 46 A46 46 0 0 1 46 0" strokeWidth="1" strokeDasharray="2 4" />
      <path d="M0 30 A30 30 0 0 1 30 0" strokeWidth="1.5" />
      {[15, 35, 55, 75].map((deg) => {
        const r = (deg * Math.PI) / 180
        const x = 62 * Math.cos(r)
        const y = 62 * Math.sin(r)
        return (
          <g key={deg} transform={`translate(${x} ${y}) rotate(${deg})`}>
            <path d="M0 0 C 6 -4 12 -4 16 0 C 12 4 6 4 0 0 Z" fill="currentColor" stroke="none" />
          </g>
        )
      })}
      <circle cx="0" cy="0" r="14" fill="currentColor" stroke="none" opacity="0.5" />
      {[10, 30, 50, 70, 80].map((deg) => {
        const r = (deg * Math.PI) / 180
        return <circle key={deg} cx={46 * Math.cos(r)} cy={46 * Math.sin(r)} r="1.8" fill="currentColor" stroke="none" />
      })}
    </svg>
  )
}

function Deepam({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 96 96" className={className}>
      <defs>
        <radialGradient id="deepam-glow" cx="50%" cy="38%" r="50%">
          <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffe08a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="deepam-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6c7" />
          <stop offset="45%" stopColor="#ffc93d" />
          <stop offset="100%" stopColor="#f07d0c" />
        </linearGradient>
        <linearGradient id="deepam-brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd86b" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="36" r="34" fill="url(#deepam-glow)" />
      <path d="M48 12 C 56 24 58 34 48 44 C 38 34 40 24 48 12 Z" fill="url(#deepam-flame)">
        <animate attributeName="d" dur="1.6s" repeatCount="indefinite" values="M48 12 C 56 24 58 34 48 44 C 38 34 40 24 48 12 Z;M49 14 C 57 25 57 35 48 44 C 39 35 41 25 49 14 Z;M48 12 C 56 24 58 34 48 44 C 38 34 40 24 48 12 Z" />
      </path>
      <path d="M48 26 C 51 32 51 37 48 41 C 45 37 45 32 48 26 Z" fill="#fffbe6" />
      <path d="M18 50 H78 C 76 62 64 70 48 70 C 32 70 20 62 18 50 Z" fill="url(#deepam-brass)" />
      <path d="M18 50 H78" stroke="#8a5a00" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 70 H56 L60 80 H36 Z" fill="url(#deepam-brass)" />
      <rect x="28" y="80" width="40" height="6" rx="3" fill="url(#deepam-brass)" />
    </svg>
  )
}

export function HelpCta() {
  return (
    <section aria-labelledby="help-title" className="pb-16 sm:pb-24 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-crimson-600/30 bg-[linear-gradient(100deg,var(--color-crimson-600)_0%,var(--color-crimson-700)_52%,var(--color-crimson-800)_100%)] px-5 py-9 shadow-[0_14px_34px_rgb(92_11_25/0.12)] sm:px-8 lg:px-12 lg:py-10">
            <CornerOrnament className="pointer-events-none absolute top-0 left-0 -z-10 size-20 text-gold-300/40 sm:size-28" />
            <CornerOrnament className="pointer-events-none absolute top-0 right-0 -z-10 size-20 -scale-x-100 text-gold-300/40 sm:size-28" />
            <CornerOrnament className="pointer-events-none absolute bottom-0 left-0 -z-10 size-20 -scale-y-100 text-gold-300/40 sm:size-28" />
            <CornerOrnament className="pointer-events-none absolute right-0 bottom-0 -z-10 size-20 -scale-100 text-gold-300/40 sm:size-28" />

            <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div className="flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Deepam className="size-20 shrink-0 sm:size-24" />
                <div className="sm:text-left">
                  <h2
                    id="help-title"
                    className="text-[1.75rem] leading-tight font-bold text-cream-50 sm:text-3xl lg:text-[2.1rem]"
                  >
                    Have questions? We’re here to help.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-cream-100/80 sm:text-[15px]">
                    Not sure which puja is right for your occasion? Our team will guide you through the
                    ritual, muhurtham and arrangements.
                  </p>
                </div>
              </div>

              <nav
                aria-label="Contact options"
                className="grid w-full shrink-0 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-4"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-white bg-white px-7 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crimson-700 focus-visible:outline-none"
                >
                  <WhatsAppIcon className="size-5 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-crimson-100 bg-crimson-50 px-7 text-sm font-semibold text-crimson-700 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crimson-700 focus-visible:outline-none"
                >
                  <UserRound className="size-5" />
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
