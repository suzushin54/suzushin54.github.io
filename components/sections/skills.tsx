import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <SectionHeading index="02" label="Skills" labelJa="スキル" coord="139.6380°E" />

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 sm:flex-row sm:gap-8"
          >
            <div className="w-32 shrink-0 pt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
