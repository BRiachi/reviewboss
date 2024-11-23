import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings ⚙️</h1>
        <p className="mt-2 text-gray-600">
          Manage your restaurant's preferences and configurations
        </p>
      </div>

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
      </div>
    </div>
  )
}