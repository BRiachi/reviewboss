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
]

export function TeamPerformance() {
  return (
    <div className="space-y-4">
      {teamMembers.map((member, index) => (
        <div 
          key={member.name}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-blue-600">#{index + 1}</span>
            <Avatar className="h-10 w-10">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-700">{member.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <p className="text-sm font-semibold text-gray-900">{member.stats.rating}</p>
              </div>
              <p className="text-xs text-gray-700">Rating</p>
            </div>

            <div className="text-center">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <p className="text-sm font-semibold text-gray-900">{member.stats.improvement}</p>
              </div>
              <p className="text-xs text-gray-700">Growth</p>
            </div>

            <div className="flex gap-2">
              {member.stats.badges.map((badge) => (
                <Badge 
                  key={badge} 
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}