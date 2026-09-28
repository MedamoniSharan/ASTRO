import { MapPin, Phone } from 'lucide-react'
import { site, telLink, whatsappLink } from '../data/site'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'

export function TopBar() {
  return (
    <div className="relative z-20 pt-9 sm:pt-11">
      <div className="container-x flex h-10 items-center justify-between gap-3 text-[11px] text-crimson-900 sm:text-[13px]">
        <p className="flex min-w-0 items-center gap-1.5 font-medium sm:gap-2">
          <MapPin className="size-3.5 shrink-0 text-crimson-700" />
          <span className="truncate">Puja services all over India</span>
        </p>

        <div className="flex shrink-0 items-center divide-x divide-crimson-900/15">
          <a
            href={site.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hidden h-10 w-10 place-items-center transition-colors hover:text-crimson-600 sm:grid"
          >
            <YouTubeIcon className="size-4" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden h-10 w-10 place-items-center transition-colors hover:text-crimson-600 sm:grid"
          >
            <WhatsAppIcon className="size-4" />
          </a>
          <a
            href={telLink}
            className="flex h-10 items-center gap-1.5 pl-3 font-semibold transition-colors hover:text-crimson-600 sm:pl-4"
          >
            <Phone className="size-3.5" />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
