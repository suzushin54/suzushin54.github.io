import { SectionHeading } from '@/components/section-heading'
import { talks } from '@/lib/portfolio-data'

export function Talks() {
  return (
    <section id="talks" className="scroll-mt-20 py-16">
      <SectionHeading index="04" label="Talks" labelJa="登壇・発表" coord="BEARING 04" />

      <div className="flex flex-col divide-y divide-border border-y border-border">
        {talks.map((talk) => (
          <div
            key={talk.event}
            className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:gap-6"
          >
            <span className="w-14 shrink-0 font-mono text-xs text-muted-foreground">
              {talk.year}
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="text-pretty font-medium leading-relaxed">
                {talk.title}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {talk.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
