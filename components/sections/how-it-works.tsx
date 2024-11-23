"use client"

import { motion } from 'framer-motion'
import { QrCode, MessageSquare, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'

const steps = [
  {
    title: 'ASSIGN QR CODES 📱',
    description: 'Give each team member their unique QR code for collecting reviews.',
    icon: QrCode,
    emoji: '🎯',
  },
  {
    title: 'COLLECT REVIEWS ⭐️',
    description: 'Customers scan the QR code to leave their feedback instantly.',
    icon: MessageSquare,
    emoji: '📝',
  },
  {
    title: 'REWARD SUCCESS 🎉',
    description: 'Track performance and reward achievements automatically.',
    icon: Trophy,
    emoji: '🏆',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">HOW IT WORKS 🚀</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start boosting your online reputation in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full bg-white border-2 border-gray-100 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-lg">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}