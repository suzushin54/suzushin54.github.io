export function CompassRose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      className={className}
    >
      <circle cx="100" cy="100" r="88" />
      <circle cx="100" cy="100" r="66" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="10" />
      {/* cardinal + intercardinal tick lines */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        const inner = i % 2 === 0 ? 12 : 40
        return (
          <line
            key={i}
            x1={100 + Math.sin(a) * inner}
            y1={100 - Math.cos(a) * inner}
            x2={100 + Math.sin(a) * 88}
            y2={100 - Math.cos(a) * 88}
          />
        )
      })}
      {/* four-point star needle */}
      <polygon points="100,18 112,100 100,182 88,100" />
      <polygon points="18,100 100,112 182,100 100,88" />
    </svg>
  )
}
