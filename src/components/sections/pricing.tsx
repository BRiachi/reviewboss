import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 3 team members',
      'Basic QR code generation',
      'Simple performance tracking',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '49',
    description: 'Best for growing businesses',
    features: [
      'Unlimited team members',
      'Custom QR code branding',
      'Advanced analytics',
      'Team leaderboards',
      'Priority support',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated account manager',
      'Custom reporting',
      'SLA guarantees',
      'Training sessions',
    ],
  },
]

export function PricingSection() {
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing 💰</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`p-8 h-full bg-white border-2 ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-900'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}