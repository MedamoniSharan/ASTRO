export function TempleSilhouette({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 320" className={className} fill="currentColor">
      <path d="M10 320 V270 H28 V250 H44 V226 H58 V202 H70 V178 H80 V154 H88 V132 H94 V118 H106 V132 H112 V154 H120 V178 H130 V202 H142 V226 H156 V250 H172 V270 H190 V320 Z" />
      <path d="M100 86 C 108 96 108 106 100 112 C 92 106 92 96 100 86 Z" />
      <rect x="98.5" y="72" width="3" height="16" rx="1.5" />
      <g fill="rgb(0 0 0 / 0.08)">
        <rect x="36" y="256" width="128" height="4" />
        <rect x="52" y="234" width="96" height="4" />
        <rect x="64" y="210" width="72" height="4" />
        <rect x="74" y="186" width="52" height="4" />
        <rect x="83" y="162" width="34" height="4" />
      </g>
    </svg>
  )
}
