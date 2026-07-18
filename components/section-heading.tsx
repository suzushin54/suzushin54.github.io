export function SectionHeading({
  index,
  label,
  labelJa,
  coord,
}: {
  index: string
  label: string
  labelJa: string
  coord: string
}) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-muted-foreground/70">
        <span aria-hidden>┌ SECTION</span>
        <span aria-hidden>{coord} ┐</span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="rounded-sm bg-brand-accent px-1.5 py-0.5 font-mono text-xs font-semibold text-brand-accent-foreground">
          {index}
        </span>
        <h2 className="font-mono text-sm font-medium tracking-wide text-foreground dark:text-brand-royal">
          {label}
        </h2>
        <span className="text-sm text-muted-foreground">{labelJa}</span>
        <div className="ml-2 h-px flex-1 bg-border dark:bg-brand-royal/30" aria-hidden />
      </div>
    </div>
  )
}
