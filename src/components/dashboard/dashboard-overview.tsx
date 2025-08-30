"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, DollarSign, TrendingUp, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const stats = [
  {
    title: "Total Invoices",
    value: "1,234",
    icon: FileText,
    change: "+12%",
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "456",
    icon: Users,
    change: "+8%",
    trend: "up",
  },
  {
    title: "Revenue",
    value: "$12,345",
    icon: DollarSign,
    change: "+15%",
    trend: "up",
  },
  {
    title: "Growth",
    value: "23%",
    icon: TrendingUp,
    change: "+3%",
    trend: "up",
  },
]

export function DashboardOverview() {
  const { toast } = useToast()

  const handleCreateInvoice = () => {
    toast.info("Tính năng đang phát triển", "Tạo hóa đơn sẽ có sẵn trong phiên bản tiếp theo.")
  }

  const handleViewCustomers = () => {
    toast.info("Tính năng đang phát triển", "Quản lý khách hàng sẽ có sẵn trong phiên bản tiếp theo.")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-sans">Dashboard</h1>
          <p className="text-muted-foreground font-mono">Welcome back! Here's an overview of your business.</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleViewCustomers} variant="outline">
            <Users className="h-4 w-4 mr-2" />
            View Customers
          </Button>
          <Button onClick={handleCreateInvoice}>
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium font-mono">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-sans">{stat.value}</div>
              <p className="text-xs text-accent font-mono">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="font-sans">Recent Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground font-mono">Invoice management features coming soon...</p>
              <Button onClick={handleCreateInvoice} variant="outline" className="w-full bg-transparent">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Invoice
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="font-sans">Customer Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground font-mono">Customer analytics coming soon...</p>
              <Button onClick={handleViewCustomers} variant="outline" className="w-full bg-transparent">
                <Users className="h-4 w-4 mr-2" />
                Manage Customers
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
