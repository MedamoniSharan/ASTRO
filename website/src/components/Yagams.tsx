import { Disc3, Flame, Moon, Phone, Sun, type LucideIcon } from 'lucide-react'
import { telLink, whatsappLink, yagams, type Yagam } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'
import { RevealGroup, RevealItem } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SunRays } from './SunRays'

const icons: Record<Yagam['icon'], LucideIcon> = {
  sun: Sun,
  disc: Disc3,
  flame: Flame,
  moon: Moon,
}

export function Yagams() {
  return (
    <section
      id="yagams"
      className="relative isolate overflow-hidden bg-gradient-to-br from-crimson-800 via-crimson-700 to-crimson-900 py-16 sm:py-24 lg:py-28"
    >
      <SunRays
        rays={20}
        className="absolute -top-40 -right-40 -z-10 size-[34rem] animate-spin-slow opacity-15 mix-blend-screen"
      />
      <SunRays
        rays={20}
        className="absolute -bottom-48 -left-48 -z-10 size-[30rem] animate-spin-slow opacity-10 mix-blend-screen"
      />

      <div className="container-x">
        <SectionHeading
          tone="dark"
          eyebrow="Yagams & Shanti"
          title="Special Homams and Graha Shanti"
          description="Elaborate yagams performed by a team of purohits. Pricing depends on the scale of the homam, so please reach out for a personalised quote."
        />

        <RevealGroup className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {yagams.map((yagam) => {
            const Icon = icons[yagam.icon]
            return (
              <RevealItem key={yagam.name}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold-300/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/60 hover:bg-white/10">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {yagam.image ? (
                      <img
                        src={yagam.image}
                        alt={yagam.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative grid size-full place-items-center bg-gradient-to-br from-crimson-600 via-crimson-700 to-crimson-900">
                        <SunRays rays={16} className="absolute size-[140%] animate-spin-slow opacity-25 mix-blend-screen" />
                        <Icon className="relative size-20 text-gold-300 drop-shadow-[0_0_24px_rgb(255_210_77/0.6)]" />
                      </div>
                    )}
                    {yagam.image && (
                      <>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-crimson-900/80 to-transparent" />
                        <span className="absolute bottom-4 left-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-crimson-900 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:rotate-6 sm:left-6">
                          <Icon className="size-6" />
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-2xl font-bold text-cream-50">{yagam.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-100/75">{yagam.description}</p>
                    <p className="mt-4 font-accent text-sm tracking-wide text-gold-300 sm:mt-5">Price on request</p>
                    <div className="mt-4 flex gap-2">
                      <a
                        href={telLink}
                        aria-label={`Call to book ${yagam.name}`}
                        className="btn-gold flex-1 px-4 py-3 sm:py-2.5"
                      >
                        <Phone className="size-4" />
                        Enquire
                      </a>
                      <a
                        href={whatsappLink(yagam.name)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp to book ${yagam.name}`}
                        className="btn border border-cream-50/30 px-4 py-3 text-cream-50 hover:border-[#25D366] hover:bg-[#25D366] sm:px-3.5 sm:py-2.5"
                      >
                        <WhatsAppIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
