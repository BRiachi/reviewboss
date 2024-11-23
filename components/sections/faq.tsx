"use client"

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: "How does the QR code system work?",
    answer: "Each team member gets a unique QR code that customers can scan to leave reviews. The system automatically tracks which team member received the review, making it easy to monitor performance and distribute rewards."
  },
  {
    question: "Can I customize the review template?",
    answer: "Yes! You can create custom review templates for different services or experiences. This makes it easier for customers to leave detailed, relevant feedback while maintaining authenticity."
  },
  {
    question: "How are employee rewards calculated?",
    answer: "Rewards are based on multiple factors including the number of reviews collected, average rating, and customer sentiment. You can customize the reward criteria to align with your business goals."
  },
  {
    question: "Is the platform suitable for multiple locations?",
    answer: "Absolutely! Our platform is designed to handle multiple locations with ease. You can manage all your venues from a single dashboard while maintaining separate team performance tracking."
  },
  {
    question: "What kind of analytics are available?",
    answer: "Our platform provides comprehensive analytics including review trends, team performance metrics, customer sentiment analysis, and detailed reports that can be customized to your needs."
  }
]

export function FaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions 💭</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 text-left text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}