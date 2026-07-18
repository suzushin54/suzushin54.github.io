export function DepthDivider({ mark }: { mark: string }) {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="size-1 rotate-45 bg-brand/50" />
      <div className="h-px flex-1 border-t border-dashed border-brand/30" />
      <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">
        {mark}
      </span>
      <div className="h-px flex-1 border-t border-dashed border-brand/30" />
      <span className="size-1 rotate-45 bg-brand/50" />
    </div>
  )
}
