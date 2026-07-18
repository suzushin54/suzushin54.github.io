import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, SpeakerDeckIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeading index="05" label="Contact" labelJa="連絡先" coord="HARBOR 05" />

      <div className="rounded-lg border border-border bg-card p-8 md:p-10">
        <p className="max-w-xl text-pretty text-lg leading-relaxed">
          業務委託・技術顧問・登壇のご相談を歓迎します。
        </p>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Open to freelance, technical advisory, and speaking engagements.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-brand/60 text-brand hover:bg-brand/10 hover:text-brand"
            render={<a href={profile.github} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon />
            GitHub
            <ArrowUpRight className="opacity-60" />
          </Button>
          <Button
            variant="outline"
            className="border-brand/60 text-brand hover:bg-brand/10 hover:text-brand"
            render={<a href={profile.speakerDeck} target="_blank" rel="noreferrer" />}
          >
            <SpeakerDeckIcon />
            Speaker Deck
            <ArrowUpRight className="opacity-60" />
          </Button>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 font-mono text-xs sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">GitHub</dt>
            <dd className="break-all text-foreground/90">{profile.github}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">Speaker Deck</dt>
            <dd className="break-all text-foreground/90">{profile.speakerDeck}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
