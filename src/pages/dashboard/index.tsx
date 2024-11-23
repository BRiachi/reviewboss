import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { TeamPerformance } from "@/components/dashboard/team-performance"
import { CustomerFeedback } from "@/components/dashboard/customer-feedback"
import { RecentQRScans } from "@/components/dashboard/recent-qr-scans"

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Overview 📊</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor your restaurant's performance and team activity
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:gap-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">
                +0.3 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">QR Scans Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">
                +12 from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Full staff on duty
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-7 gap-4">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent QR Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentQRScans />
            </CardContent>
          </Card>
        </div>

        {/* Performance Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <TeamPerformance />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomerFeedback />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}