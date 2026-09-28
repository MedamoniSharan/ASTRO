import { Phone } from 'lucide-react'
import { telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative size-7" />
      </a>
      <a
        href={telLink}
        aria-label="Call now"
        className="grid size-14 place-items-center rounded-full bg-crimson-600 text-gold-300 shadow-xl shadow-crimson-900/30 transition-transform hover:scale-110"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
