import { ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { site } from '../data/site'
import { YouTubeIcon } from './BrandIcons'
import { Reveal } from './Reveal'

export function YouTubeSection() {
  return (
    <section className="py-14 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-sand/70 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-12">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-gold-300/30 blur-3xl"
            />
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="relative shrink-0">
                <img
                  src={logo}
                  alt="Srivalli Astrology"
                  loading="lazy"
                  className="size-28 rounded-full object-cover ring-4 ring-gold-400/70"
                />
                <span className="absolute -right-1 -bottom-1 grid size-10 place-items-center rounded-full bg-[#FF0000] text-white ring-4 ring-white">
                  <YouTubeIcon className="size-5" />
                </span>
              </div>
              <div className="flex-1">
                <p className="font-accent text-xs tracking-[0.3em] text-crimson-600 uppercase">
                  Srivalli Astrology on YouTube
                </p>
                <h2 className="mt-3 text-[1.75rem] leading-tight font-semibold text-crimson-800 sm:text-4xl">
                  Learn about pujas, doshas and muhurthams
                </h2>
                <p className="mt-3 text-ink/70">
                  Watch our videos on Vedic rituals, astrology insights and devotional practices at{' '}
                  <span className="font-medium text-crimson-700">{site.youtubeHandle}</span>.
                </p>
              </div>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="btn w-full shrink-0 bg-[#FF0000] px-7 py-3.5 text-base text-white sm:w-auto shadow-lg shadow-red-600/25 hover:-translate-y-0.5 hover:bg-[#d90000]"
              >
                <YouTubeIcon className="size-5" />
                Watch on YouTube
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
