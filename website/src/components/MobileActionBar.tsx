import { Phone } from 'lucide-react'
import { telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand/70 bg-cream-50/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgb(61_8_10/0.08)] backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={telLink} className="btn-primary py-3 text-[15px]">
          <Phone className="size-4" />
          Call Now
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="btn bg-[#25D366] py-3 text-[15px] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#1ebe5b]"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
