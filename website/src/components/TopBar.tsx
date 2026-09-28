import { MapPin, Phone } from 'lucide-react'
import { site, telLink } from '../data/site'

export function TopBar() {
  return (
    <div className="bg-crimson-800 text-cream-100">
      <div className="container-x flex h-9 items-center justify-between text-xs">
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5 text-gold-300" />
          <span>Puja services all over India</span>
        </p>
        <p className="hidden font-accent tracking-wide text-gold-200 md:block">{site.strapline}</p>
        <a href={telLink} className="flex items-center gap-2 font-medium hover:text-gold-300">
          <Phone className="size-3.5 text-gold-300" />
          {site.phone}
        </a>
      </div>
    </div>
  )
}
