import { SectionHeading } from '@/components/section-heading'
import { strengths } from '@/lib/portfolio-data'

export function Strengths() {
  return (
    <section id="strengths" className="scroll-mt-20 py-16">
      <SectionHeading
        index="01"
        label="Strengths"
        labelJa="強み / What I do"
        coord="35.4437°N"
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {strengths.map((item) => (
          <div
            key={item.no}
            className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-muted/40"
          >
            <span className="font-mono text-xs text-brand">{item.no}</span>
            <p className="text-pretty font-medium leading-relaxed">
              {item.title}
            </p>
            <p className="mt-auto font-mono text-xs text-muted-foreground">
              {item.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
