import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from './components/layout/dashboard-layout'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import QRCodesPage from './pages/dashboard/qr-codes'
import ReviewsPage from './pages/dashboard/reviews'
import RewardsPage from './pages/dashboard/rewards'
import SettingsPage from './pages/dashboard/settings'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="qr-codes" element={<QRCodesPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  )
}