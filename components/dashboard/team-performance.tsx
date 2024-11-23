"use client"

import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Star, TrendingUp, Award, Target } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Server',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100',
    stats: {
      reviews: 47,
      rating: 4.9,
      badges: ['Top Server', 'Most Reviews'],
      improvement: '+15%',
      goals: '95%',
    },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Server',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100',
    stats: {
      reviews: 38,
      rating: 4.8,
      badges: ['Rising Star'],
      improvement: '+22%',
      goals: '88%',
    },
  },
  {
    name: 'Emily Johnson',
    role: 'Host',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100',
    stats: {
      reviews: 41,
      rating: 4.7,
      badges: ['Hospitality Pro'],
      improvement: '+18%',
      goals: '92%',
    },
  },
]

const shifts = [
  {
    name: 'Morning',
    performance: 92,
    reviews: 28,
    avgRating: 4.8,
  },
  {
    name: 'Lunch',
    performance: 96,
    reviews: 45,
    avgRating: 4.9,
  },
  {
    name: 'Dinner',
    performance: 88,
    reviews: 52,
    avgRating: 4.7,
  },
]

export function TeamPerformance() {
  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shifts.map((shift) => (
          <Card key={shift.name} className="p-6 bg-white border border-gray-200">
            <h4 className="font-semibold mb-4 text-gray-900">{shift.name} Shift Performance</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Performance Score</span>
                <span className="font-semibold text-gray-900">{shift.performance}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Reviews</span>
                <span className="font-semibold text-gray-900">{shift.reviews}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Avg Rating</span>
                <span className="font-semibold text-gray-900 flex items-center">
                  {shift.avgRating}
                  <Star className="h-4 w-4 text-yellow-500 ml-1" />
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Team Leaderboard */}
      <Card className="p-6 bg-white border border-gray-200">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Team Performance Rankings 🏆</h3>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-blue-600">#{index + 1}</span>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-700">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-purple-600" />
                    <p className="text-sm font-semibold text-gray-900">{member.stats.reviews} Reviews</p>
                  </div>
                  <p className="text-sm text-gray-700">Total Reviews</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <p className="text-sm font-semibold text-gray-900">{member.stats.rating}</p>
                  </div>
                  <p className="text-sm text-gray-700">Avg Rating</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <p className="text-sm font-semibold text-gray-900">{member.stats.improvement}</p>
                  </div>
                  <p className="text-sm text-gray-700">Improvement</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4 text-blue-600" />
                    <p className="text-sm font-semibold text-gray-900">{member.stats.goals}</p>
                  </div>
                  <p className="text-sm text-gray-700">Goals Met</p>
                </div>

                <div className="flex gap-2">
                  {member.stats.badges.map((badge) => (
                    <Badge 
                      key={badge} 
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}