import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <SectionHeading index="03" label="Experience" labelJa="職歴" coord="DEPTH 03" />

      <ol className="relative flex flex-col gap-10 border-l border-border pl-6 md:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              className={`absolute -left-[27px] top-1.5 size-2.5 rounded-full border-2 md:-left-[35px] ${
                job.current
                  ? 'border-brand bg-brand'
                  : 'border-border bg-background'
              }`}
              aria-hidden
            />
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <div>
                <h3 className="font-medium tracking-tight">{job.company}</h3>
                <p className="font-mono text-xs text-brand">{job.role}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {job.period}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {job.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
