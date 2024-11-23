"use client"

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Star, Award } from 'lucide-react'

const rewards = [
  {
    title: 'Top Server of the Month',
    recipient: 'Sarah Chen',
    achievement: '47 5-star reviews',
    prize: '$200 Bonus',
    icon: Trophy,
  },
  {
    title: 'Most Improved',
    recipient: 'Michael Rodriguez',
    achievement: '+0.5 rating increase',
    prize: '$100 Bonus',
    icon: Award,
  },
]

const leaderboard = [
  {
    name: 'Sarah Chen',
    points: 470,
    level: 'Gold',
    progress: 85,
  },
  {
    name: 'Michael Rodriguez',
    points: 380,
    level: 'Silver',
    progress: 65,
  },
]

export function Rewards() {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Rewards */}
        <Card className="bg-white border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Current Achievements 🏆</h3>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div
                  key={reward.title}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <reward.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{reward.title}</h4>
                        <p className="text-sm text-gray-600">{reward.recipient}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                      {reward.prize}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{reward.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Points Leaderboard */}
        <Card className="bg-white border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Points Leaderboard 📈</h3>
            <div className="space-y-4">
              {leaderboard.map((member) => (
                <div
                  key={member.name}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-block w-2 h-2 rounded-full ${
                          member.level === 'Gold' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`} />
                        <p className="text-sm text-gray-600">Level: {member.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{member.points}</p>
                      <p className="text-sm text-gray-600">points</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}