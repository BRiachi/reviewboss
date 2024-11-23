"use client"

import { Card } from '@/components/ui/card'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { MessageSquare, Star } from 'lucide-react'

ChartJS.register(ArcElement, Tooltip, Legend)

const sentimentData = {
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [{
    data: [75, 20, 5],
    backgroundColor: [
      'rgba(16, 185, 129, 1)', // More opaque green
      'rgba(59, 130, 246, 1)', // More opaque blue
      'rgba(239, 68, 68, 1)', // More opaque red
    ],
    borderColor: [
      '#fff',
      '#fff',
      '#fff',
    ],
    borderWidth: 2,
  }],
}

const recentReviews = [
  {
    customer: 'John D.',
    rating: 5,
    comment: "Amazing service! The food was incredible and came out quickly. Will definitely be back! 😊",
    server: 'Sarah C.',
    time: '10 mins ago',
  },
  {
    customer: 'Emma W.',
    rating: 4,
    comment: "Great atmosphere and friendly staff. The dessert was exceptional! 🍰",
    server: 'Michael R.',
    time: '25 mins ago',
  },
]

export function CustomerFeedback() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 bg-white border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Recent Reviews 📝</h3>
            <div className="space-y-4">
              {recentReviews.map((review, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-medium text-gray-900">{review.customer}</span>
                      <span className="text-sm text-gray-600 ml-2">• {review.time}</span>
                    </div>
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Served by {review.server}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Sentiment Analysis 📊</h3>
            <div className="aspect-square">
              <Doughnut 
                data={sentimentData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: '#374151', // text-gray-700
                        font: {
                          weight: '500',
                        },
                        padding: 20,
                      },
                    },
                  },
                  cutout: '60%',
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}