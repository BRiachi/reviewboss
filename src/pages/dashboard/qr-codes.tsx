import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { QrCode, Download, Share2 } from 'lucide-react'

export default function QRCodesPage() {
  const [selectedServer, setSelectedServer] = useState('')

  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">QR Code Generator 📱</h1>
        <p className="mt-2 text-gray-600">
          Create and manage QR codes for your team members
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Generate QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Member
                </label>
                <Input
                  type="text"
                  placeholder="Select team member"
                  value={selectedServer}
                  onChange={(e) => setSelectedServer(e.target.value)}
                />
              </div>
              <Button className="w-full">
                <QrCode className="mr-2 h-4 w-4" />
                Generate QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-64 h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  Generate a QR code to preview
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" disabled>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}