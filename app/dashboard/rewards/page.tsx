"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rewards } from "@/components/dashboard/rewards"
import { TableInsights } from "@/components/dashboard/table-insights"

export default function RewardsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Rewards & Recognition 🏆</h1>
          <p className="mt-2 text-muted-foreground">
            Track achievements and celebrate your team's success
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Team Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <Rewards />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Table Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <TableInsights />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}