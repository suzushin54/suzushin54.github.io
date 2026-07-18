import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { Strengths } from '@/components/sections/strengths'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Talks } from '@/components/sections/talks'
import { Contact } from '@/components/sections/contact'
import { DepthDivider } from '@/components/depth-divider'
import { profile } from '@/lib/portfolio-data'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <DepthDivider mark="— 5m —" />
        <Strengths />
        <DepthDivider mark="— 10m —" />
        <Skills />
        <DepthDivider mark="— 15m —" />
        <Experience />
        <DepthDivider mark="— 20m —" />
        <Talks />
        <DepthDivider mark="— 25m —" />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · TypeScript · Tailwind</span>
        </div>
      </footer>
    </div>
  )
}
