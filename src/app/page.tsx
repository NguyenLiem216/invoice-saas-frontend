import { DashboardLayout } from "../components/layout/dashboard-layout"
import { DashboardOverview } from "../components/dashboard/dashboard-overview"
import { RouteGuard } from "../components/auth/route-guard"

export default function DashboardPage() {
  return (
    <RouteGuard requireAuth={true}>
      <DashboardLayout>
        <DashboardOverview />
      </DashboardLayout>
    </RouteGuard>
  )
}
