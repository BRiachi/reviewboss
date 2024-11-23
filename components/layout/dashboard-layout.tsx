import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  QrCode, 
  Star, 
  Award,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

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

function SidebarNav() {
  return (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end
          className={({ isActive }) => cn(
            "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            isActive 
              ? "bg-blue-100 text-blue-900" 
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          <item.icon className="h-5 w-5 flex-shrink-0" />
          <span>{item.title}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export function DashboardLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50">
        <div className="flex flex-col flex-grow border-r bg-white pt-5 pb-4">
          <div className="flex items-center flex-shrink-0 px-4">
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-gray-900">ReviewBoost</span>
            </NavLink>
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
          <div className="flex flex-col h-full bg-white">
            <div className="flex items-center justify-between px-4 py-5 border-b">
              <NavLink to="/dashboard" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                <QrCode className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-gray-900">ReviewBoost</span>
              </NavLink>
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
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}