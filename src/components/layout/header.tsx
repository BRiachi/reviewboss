import { Link } from 'react-router-dom'
import { QrCode } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="flex items-center space-x-2">
          <QrCode className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          <span className="text-lg sm:text-xl font-bold text-gray-900">ReviewBoost</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4 sm:space-x-6">
          <Link 
            to="/dashboard"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}