import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto text-center"
      >
        <div className="mb-8 inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          🎉 SPECIAL LAUNCH OFFER: FIRST 3 MONTHS FREE!
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          ELEVATE YOUR GUEST EXPERIENCE ✨{' '}
          <span className="text-blue-700">TURN REVIEWS INTO REWARDS! 🏆</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empower your team to collect reviews, track performance, and earn rewards while building your online reputation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&h=100&q=80"
            alt="Restaurant interior"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=200&h=100&q=80"
            alt="Fine dining"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=100&q=80"
            alt="Hotel lobby"
            className="rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </section>
  )
}