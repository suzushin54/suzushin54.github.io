import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, SpeakerDeckIcon } from '@/components/brand-icons'
import { CompassRose } from '@/components/compass-rose'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-14 pt-20 pb-24 md:pt-28">
      <CompassRose className="pointer-events-none absolute -top-4 right-0 hidden size-64 text-brand/10 md:block lg:-right-16 lg:size-80" />

      <p className="mb-6 font-mono text-xs tracking-wide text-muted-foreground">
        <span className="text-brand dark:text-brand-royal">//</span> Software Engineer · Yokohama, Japan
      </p>

      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {profile.name}
      </h1>
      <div className="mt-4 hidden h-0.5 w-16 rounded-full bg-brand-royal dark:block" aria-hidden />
      <p className="mt-2 font-mono text-sm text-muted-foreground">
        {profile.title}
      </p>

      <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-foreground/90 md:text-lg">
        {profile.oneLiner}
      </p>

      <div className="mt-6 flex max-w-2xl items-start gap-3 border-l-2 border-brand/40 pl-4 dark:border-brand-royal/70">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {profile.current}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button
          size="lg"
          variant="outline"
          className="border-brand/60 text-brand hover:bg-brand/10 hover:text-brand"
          render={<a href={profile.github} target="_blank" rel="noreferrer" />}
        >
          <GithubIcon />
          GitHub
          <ArrowUpRight className="opacity-60" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-brand/60 text-brand hover:bg-brand/10 hover:text-brand"
          render={<a href={profile.speakerDeck} target="_blank" rel="noreferrer" />}
        >
          <SpeakerDeckIcon />
          Speaker Deck
          <ArrowUpRight className="opacity-60" />
        </Button>
        <Button
          size="lg"
          className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90"
          render={<a href="#contact" />}
        >
          Contact
        </Button>
      </div>
    </section>
  )
}
