import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { BenefitsSection } from '@/components/sections/benefits'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { PricingSection } from '@/components/sections/pricing'
import { StatsSection } from '@/components/sections/stats'
import { FaqSection } from '@/components/sections/faq'

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FaqSection />
    </main>
  )
}