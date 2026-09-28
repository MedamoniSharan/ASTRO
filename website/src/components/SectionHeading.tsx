import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''} font-accent text-xs tracking-[0.3em] uppercase ${
          dark ? 'text-gold-300' : 'text-crimson-600'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-gold-300/60' : 'bg-crimson-600/40'}`} />
        {eyebrow}
        <span className={`h-px w-8 ${dark ? 'bg-gold-300/60' : 'bg-crimson-600/40'}`} />
      </div>
      <h2
        className={`mt-4 text-4xl leading-tight font-semibold sm:text-5xl ${
          dark ? 'text-cream-50' : 'text-crimson-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-cream-100/80' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
