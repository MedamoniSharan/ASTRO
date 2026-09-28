import { pujas } from '../data/site'
import { PujaCard } from './PujaCard'
import { RevealGroup, RevealItem } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function PujaGrid() {
  return (
    <section id="pujas" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Puja Services"
          title="Participate in Auspicious Pujas"
          description="Transparent starting prices for our most requested ceremonies. Call or WhatsApp us to confirm the muhurtham, samagri and final arrangements."
        />
        <RevealGroup className="mt-10 flex flex-wrap justify-center gap-5 sm:mt-14 sm:gap-7">
          {pujas.map((puja) => (
            <RevealItem
              key={puja.name}
              className="w-full sm:w-[calc((100%-1.75rem)/2)] lg:w-[calc((100%-3.5rem)/3)] xl:w-[calc((100%-5.25rem)/4)]"
            >
              <PujaCard puja={puja} />
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-8 text-center text-xs text-ink/60 sm:mt-10 sm:text-sm">
          Prices are starting rates and may vary with location, number of purohits and puja requirements.
        </p>
      </div>
    </section>
  )
}
