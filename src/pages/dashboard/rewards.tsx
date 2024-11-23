import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function RewardsPage() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Rewards & Recognition 🏆</h1>
        <p className="mt-2 text-gray-600">
          Track achievements and celebrate your team's success
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Team Achievements</CardTitle>
          </CardHeader>
          <CardContent>
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
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                      {reward.prize}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{reward.achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}