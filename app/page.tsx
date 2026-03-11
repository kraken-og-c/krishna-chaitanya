import AnalyzerSection from '@/sections/AnalyzerSection'
import BreakdownSection from '@/sections/BreakdownSection'
import CaseStudySection from '@/sections/CaseStudySection'
import CTASection from '@/sections/CTASection'
import HeroSection from '@/sections/HeroSection'
import PortfolioSection from '@/sections/PortfolioSection'
import ProcessSection from '@/sections/ProcessSection'
import PsychologySection from '@/sections/PsychologySection'
import SocialProofSection from '@/sections/SocialProofSection'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] opacity-30" />
      <HeroSection />
      <PsychologySection />
      <PortfolioSection />
      <CaseStudySection />
      <BreakdownSection />
      <AnalyzerSection />
      <ProcessSection />
      <SocialProofSection />
      <CTASection />
    </main>
  )
}
