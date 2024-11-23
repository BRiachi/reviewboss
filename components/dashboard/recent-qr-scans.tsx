"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  {
    id: 3,
    customer: "Emma W.",
    server: {
      name: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100",
    },
    table: "Table 8",
    time: "12 mins ago",
    status: "completed"
  }
]

export function RecentQRScans() {
  return (
    <div className="space-y-8">
      {recentScans.map((scan) => (
        <div key={scan.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={scan.server.avatar} alt={scan.server.name} />
            <AvatarFallback>{scan.server.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{scan.server.name}</p>
            <p className="text-sm text-muted-foreground">
              {scan.table} • {scan.time}
            </p>
          </div>
          <div className="ml-auto">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              scan.status === "completed" 
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {scan.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}