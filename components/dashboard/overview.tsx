"use client"

import { Card } from '@/components/ui/card'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
)

const metrics = [
  {
    title: "Today's Reviews",
    value: "47",
    change: "+12%",
    trend: "up",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.3",
    trend: "up",
  },
  {
    title: "Active Tables",
    value: "24",
    change: "85%",
    trend: "neutral",
  },
  {
    title: "Team Members Online",
    value: "12",
    change: "Full Staff",
    trend: "up",
  },
]

export function Overview() {
  const barData = {
    labels: ['Breakfast', 'Lunch', 'Dinner'],
    datasets: [
      {
        label: 'Reviews Collected',
        data: [15, 22, 18],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Average Rating',
        data: [4.7, 4.9, 4.8],
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1,
      },
    ],
  }

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Customer Satisfaction',
        data: [4.5, 4.6, 4.8, 4.7, 4.9, 4.8, 4.7],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-6 bg-white border border-gray-200 hover:border-blue-200 transition-colors">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-3xl font-semibold text-gray-900">{metric.value}</p>
              <p className={`ml-2 text-sm ${
                metric.trend === 'up' 
                  ? 'text-green-600' 
                  : metric.trend === 'down' 
                  ? 'text-red-600' 
                  : 'text-gray-600'
              }`}>
                {metric.change}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-white border border-gray-200">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Shift Performance</h3>
          <Bar data={barData} options={chartOptions} />
        </Card>
        <Card className="p-6 bg-white border border-gray-200">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Weekly Trends</h3>
          <Line data={lineData} options={chartOptions} />
        </Card>
      </div>
    </div>
  )
}