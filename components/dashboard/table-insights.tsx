"use client"

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Users, Clock } from 'lucide-react'

const tables = [
  {
    number: 1,
    section: 'Main Dining',
    server: 'Sarah C.',
    reviews: 12,
    rating: 4.9,
    status: 'active',
    occupancy: '4/4',
    timeSeated: '45 min',
  },
  {
    number: 2,
    section: 'Main Dining',
    server: 'Michael R.',
    reviews: 8,
    rating: 4.7,
    status: 'active',
    occupancy: '2/4',
    timeSeated: '15 min',
  },
  {
    number: 3,
    section: 'Patio',
    server: 'Emily L.',
    reviews: 15,
    rating: 4.8,
    status: 'available',
    occupancy: '0/6',
    timeSeated: '-',
  },
]

export function TableInsights() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-900">Table Performance 🪑</h3>
        <div className="space-y-4">
          {tables.map((table) => (
            <div
              key={table.number}
              className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4 bg-white rounded-lg border border-gray-200 items-center"
            >
              <div>
                <span className="text-lg font-semibold text-gray-900">Table {table.number}</span>
                <p className="text-sm text-gray-500">{table.section}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Server</span>
                <p className="font-medium text-gray-900">{table.server}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Reviews</span>
                <p className="font-medium text-gray-900">{table.reviews}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Rating</span>
                <p className="font-medium text-gray-900 flex items-center">
                  {table.rating}
                  <Star className="h-4 w-4 text-yellow-400 ml-1" />
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Occupancy</span>
                <p className="font-medium text-gray-900 flex items-center">
                  <Users className="h-4 w-4 mr-1 text-gray-400" />
                  {table.occupancy}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Time Seated</span>
                <p className="font-medium text-gray-900 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  {table.timeSeated}
                </p>
              </div>
              <div>
                <Badge
                  variant={table.status === 'active' ? 'default' : 'secondary'}
                  className={`capitalize ${
                    table.status === 'active' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {table.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}