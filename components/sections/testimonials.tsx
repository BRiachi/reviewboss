"use client"

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: "John Smith",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100",
    content: "ReviewBoost transformed how we handle customer feedback. Our team is more motivated than ever, and our online ratings have significantly improved!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Restaurant Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
    content: "The QR code system makes collecting reviews effortless. Our servers love competing for top spots on the leaderboard!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Chain Restaurant Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100",
    content: "Managing multiple locations has never been easier. The insights we get help us maintain consistent service quality across all our restaurants.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">SUCCESS STORIES FROM INDUSTRY LEADERS 💬</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how restaurants like yours are transforming their customer feedback process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full bg-white">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}