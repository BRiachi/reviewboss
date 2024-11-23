import { motion } from 'framer-motion'
import { Clock, Star, Trophy, LineChart } from 'lucide-react'
import { Card } from '@/components/ui/card'

const benefits = [
  {
    title: 'SAVE TIME WITH AUTOMATION ⚡',
    description: 'Let AI handle review responses while you focus on growing your business.',
    icon: Clock,
  },
  {
    title: 'BOOST YOUR ONLINE REPUTATION 🌟',
    description: 'Collect reviews seamlessly and grow your visibility across platforms.',
    icon: Star,
  },
  {
    title: 'MOTIVATE YOUR TEAM 🏆',
    description: 'Reward employees based on performance and customer satisfaction.',
    icon: Trophy,
  },
  {
    title: 'GAIN INSIGHTS AT A GLANCE 📊',
    description: 'Understand customer sentiment with advanced analytics and reporting.',
    icon: LineChart,
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">WHY CHOOSE OUR PLATFORM? 🚀</h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <Card 
                  key={benefit.title}
                  className="p-6 bg-white border-2 border-gray-100 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant team celebrating success"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}