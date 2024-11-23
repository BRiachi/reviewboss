import { motion } from 'framer-motion'

const stats = [
  { label: 'Guest Reviews Collected', value: '500K+', emoji: '⭐️' },
  { label: 'Partner Venues', value: '2K+', emoji: '🏨' },
  { label: 'Staff Satisfaction', value: '96%', emoji: '🎯' },
  { label: 'Average Rating Increase', value: '47%', emoji: '📈' },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 bg-blue-50 rounded-2xl">
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <div className="text-4xl font-bold mb-2 text-blue-700">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}