"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Search } from "lucide-react"

const reviews = [
  {
    id: 1,
    customer: "John D.",
    rating: 5,
    content: "Amazing service and delicious food! Sarah was incredibly attentive.",
    date: "2024-03-10",
    server: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
    },
    sentiment: "positive",
    table: "12",
  },
  {
    id: 2,
    customer: "Emma W.",
    rating: 4,
    content: "Great atmosphere and friendly staff. The dessert was exceptional!",
    date: "2024-03-10",
    server: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
    },
    sentiment: "positive",
    table: "5",
  },
  {
    id: 3,
    customer: "Alice M.",
    rating: 5,
    content: "Perfect dining experience! The service was impeccable.",
    date: "2024-03-09",
    server: {
      name: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100",
    },
    sentiment: "positive",
    table: "8",
  },
]

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredReviews = reviews.filter(review => 
    review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.server.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="flex-1 p-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Customer Reviews ⭐️</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor and analyze customer feedback
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <div className="flex items-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reviews..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex flex-col space-y-4 rounded-lg border p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={review.server.avatar} alt={review.server.name} />
                          <AvatarFallback>{review.server.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">{review.customer}</p>
                            <p className="text-sm text-muted-foreground">• Table {review.table}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Served by {review.server.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <Badge
                          variant="secondary"
                          className={review.sentiment === "positive" ? "bg-green-100 text-green-800" : ""}
                        >
                          {review.sentiment}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm">{review.content}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}</content>