import { Phone } from 'lucide-react'
import { formatINR, telLink, whatsappLink, type Puja } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'

export function PujaCard({ puja }: { puja: Puja }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/70 hover:shadow-xl hover:shadow-crimson-900/10">
      <div className="relative overflow-hidden">
        <img
          src={puja.image}
          alt={puja.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-cream-50/90 px-3 py-1 font-accent text-[11px] tracking-wider text-crimson-700 uppercase backdrop-blur">
          {puja.subtitle}
        </span>
        <div className="absolute right-4 bottom-4 rounded-2xl bg-gold-400 px-4 py-2 text-right shadow-lg">
          <p className="text-[10px] font-medium tracking-wider text-crimson-800/80 uppercase">Starting</p>
          <p className="font-display text-xl leading-none font-bold text-crimson-900">{formatINR(puja.price)}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-crimson-800">{puja.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{puja.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <a href={telLink} className="btn-primary px-4 py-2.5">
            <Phone className="size-4" />
            Call
          </a>
          <a
            href={whatsappLink(puja.name)}
            target="_blank"
            rel="noreferrer"
            className="btn border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-[#128C7E] hover:bg-[#25D366] hover:text-white"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
