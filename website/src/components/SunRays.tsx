type SunRaysProps = {
  className?: string
  rays?: number
}

export function SunRays({ className, rays = 16 }: SunRaysProps) {
  const petals = Array.from({ length: rays }, (_, i) => (360 / rays) * i)

  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <defs>
        <linearGradient id="petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8262a" />
          <stop offset="100%" stopColor="#7a1216" />
        </linearGradient>
      </defs>
      {petals.map((angle) => (
        <path
          key={angle}
          d="M100 8 C108 22 110 34 104 48 L100 56 L96 48 C90 34 92 22 100 8 Z"
          fill="url(#petal)"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
    </svg>
  )
}
