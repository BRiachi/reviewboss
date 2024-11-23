import { motion } from 'framer-motion'
import { QrCode, BarChart3, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    title: 'SMART REVIEW COLLECTION 📱',
    description: 'Custom QR codes for each staff member. Perfect for table service, hotel check-out, or event feedback.',
    icon: QrCode,
  },
  {
    title: 'REAL-TIME PERFORMANCE DASHBOARD 📊',
    description: 'Track guest satisfaction, service quality, and staff performance across all departments.',
    icon: BarChart3,
  },
  {
    title: 'STAFF RECOGNITION SYSTEM 🎁',
    description: 'Automatically reward top-performing servers, concierges, and event staff based on guest feedback.',
    icon: Trophy,
  },
]

export function FeaturesSection() {
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900">POWERFUL FEATURES FOR YOUR TEAM 🚀</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to collect, manage, and leverage customer feedback to grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full bg-white border-2 border-gray-100 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}