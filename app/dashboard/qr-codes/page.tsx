"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import QRCode from 'qrcode'
import { Download, Share2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  teamMember: z.string().min(1, 'Please select a team member'),
  shift: z.string().optional(),
  customMessage: z.string().optional(),
})

const teamMembers = [
  { id: '1', name: 'Sarah Chen' },
  { id: '2', name: 'Michael Rodriguez' },
  { id: '3', name: 'Emily Johnson' },
]

const shifts = [
  { id: 'morning', name: 'Morning (6am - 2pm)' },
  { id: 'afternoon', name: 'Afternoon (2pm - 10pm)' },
  { id: 'evening', name: 'Evening (5pm - 11pm)' },
]

// Replace with your actual Google Place ID
const GOOGLE_PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4' // Example Place ID

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState<string>('')
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customMessage: '',
    },
  })

  async function generateQRCode(values: z.infer<typeof formSchema>) {
    const selectedMember = teamMembers.find(m => m.id === values.teamMember)
    // Using the correct Google Review URL format
    const reviewUrl = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}&source=g&utm_source=qr&utm_medium=${selectedMember?.name}`
    
    try {
      const qrDataUrl = await QRCode.toDataURL(reviewUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      })
      setQrCode(qrDataUrl)
      toast({
        title: "QR Code Generated! 🎉",
        description: `QR code for ${selectedMember?.name} has been created successfully.`,
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to generate QR code. Please try again.",
        variant: "destructive",
      })
    }
  }

  async function downloadQRCode() {
    if (!qrCode) return
    
    const link = document.createElement('a')
    link.href = qrCode
    link.download = 'review-qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast({
      title: "Downloaded! 📥",
      description: "QR code has been downloaded successfully.",
    })
  }

  function shareQRCode() {
    if (navigator.share && qrCode) {
      navigator.share({
        title: 'Review QR Code',
        text: 'Scan this QR code to leave a review!',
        url: qrCode,
      })
      .then(() => {
        toast({
          title: "Shared! 🔗",
          description: "QR code has been shared successfully.",
        })
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to share QR code. Please try again.",
          variant: "destructive",
        })
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">QR Code Generator 📱</h1>
          <p className="text-gray-700 mb-8">Create personalized QR codes for your team members to collect reviews</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Card */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Generate QR Code</CardTitle>
                <CardDescription className="text-gray-600">
                  Select a team member and customize the QR code settings
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(generateQRCode)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="teamMember"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Team Member</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                <SelectValue placeholder="Select a team member" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {teamMembers.map((member) => (
                                <SelectItem key={member.id} value={member.id}>
                                  {member.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="shift"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Shift (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                <SelectValue placeholder="Select a shift" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {shifts.map((shift) => (
                                <SelectItem key={shift.id} value={shift.id}>
                                  {shift.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription className="text-gray-600">
                            Add shift information to track performance by time period
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="customMessage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Custom Message (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              className="bg-white border-gray-300 text-gray-900" 
                              placeholder="Enter a custom message" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-gray-600">
                            Add a personalized message to appear with the review prompt
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Generate QR Code
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Preview Card */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Preview</CardTitle>
                <CardDescription className="text-gray-600">
                  Preview and download your generated QR code
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  {qrCode ? (
                    <>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
                      >
                        <img 
                          src={qrCode} 
                          alt="QR Code" 
                          className="w-64 h-64"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </motion.div>
                      <div className="flex gap-4">
                        <Button 
                          onClick={downloadQRCode} 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button 
                          onClick={shareQRCode} 
                          className="bg-gray-600 hover:bg-gray-700 text-white"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 w-full">
                      <p>Generate a QR code to preview it here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}