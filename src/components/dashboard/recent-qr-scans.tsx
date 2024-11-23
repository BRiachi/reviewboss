import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentScans = [
  {
    id: 1,
    customer: "Anonymous",
    server: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
    },
    table: "Table 12",
    time: "2 mins ago",
    status: "pending"
  },
  {
    id: 2,
    customer: "John D.",
    server: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
    },
    table: "Table 5",
    time: "5 mins ago",
    status: "completed"
  },
]

export function RecentQRScans() {
  return (
    <div className="space-y-4">
      {recentScans.map((scan) => (
        <div key={scan.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={scan.server.avatar} alt={scan.server.name} />
              <AvatarFallback>{scan.server.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">{scan.server.name}</p>
              <p className="text-sm text-gray-600">{scan.table} • {scan.time}</p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className={scan.status === "completed" 
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
            }
          >
            {scan.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}