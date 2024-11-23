"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <main className="flex-1 p-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings ⚙️</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your restaurant's preferences and configurations
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-8">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Restaurant Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="restaurantName">Restaurant Name</Label>
                    <Input id="restaurantName" defaultValue="The Grand Bistro" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Main St, New York, NY 10001" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Review Collection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Review Requests</Label>
                      <p className="text-sm text-muted-foreground">
                        Send review requests automatically after customer visits
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Review Moderation</Label>
                      <p className="text-sm text-muted-foreground">
                        Moderate reviews before they are published
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive daily summary of reviews and performance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get instant alerts for new reviews
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Low Rating Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified immediately for reviews under 3 stars
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Team Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Rewards</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically distribute rewards based on performance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Team Leaderboard</Label>
                    <p className="text-sm text-muted-foreground">
                      Show team performance rankings
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rewardThreshold">Reward Threshold (Reviews)</Label>
                  <Input id="rewardThreshold" type="number" defaultValue="50" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Connected Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Google Business Profile</Label>
                    <p className="text-sm text-muted-foreground">
                      Sync reviews with your Google Business listing
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Yelp</Label>
                    <p className="text-sm text-muted-foreground">
                      Connect with your Yelp business account
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>TripAdvisor</Label>
                    <p className="text-sm text-muted-foreground">
                      Sync reviews with TripAdvisor
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}