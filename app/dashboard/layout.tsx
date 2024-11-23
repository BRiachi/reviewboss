"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  QrCode, 
  Users, 
  Star, 
  Award,
  Settings,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "QR Codes",
    href: "/dashboard/qr-codes",
    icon: QrCode
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: Star
  },
  {
    title: "Rewards",
    href: "/dashboard/rewards",
    icon: Award
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
]

interface SidebarNavProps {
  className?: string
}

function SidebarNav({ className }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("space-y-1", className)}>
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50">
        <div className="flex flex-col flex-grow border-r bg-muted/40 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <QrCode className="h-6 w-6" />
              <span className="font-bold">ReviewBoost</span>
            </Link>
          </div>
          <div className="mt-8 flex-grow px-4">
            <SidebarNav />
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden fixed left-4 top-4 z-40"
            size="icon"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex flex-col h-full bg-muted/40">
            <div className="flex items-center justify-between px-4 py-5 border-b">
              <Link href="/dashboard" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                <QrCode className="h-6 w-6" />
                <span className="font-bold">ReviewBoost</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 px-4 py-4">
              <SidebarNav />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64">
        {children}
      </main>
    </div>
  )
}