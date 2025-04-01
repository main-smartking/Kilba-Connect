import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { NotificationBar } from "@/components/dashboard/notification-bar"
import { EventsSection } from "@/components/dashboard/events-section"
import { OpportunitiesPanel } from "@/components/dashboard/opportunities-panel"
import { CommunityMembers } from "@/components/dashboard/community-members"
export const metadata: Metadata = {
  title: "Dashboard | Tribal Community Portal",
  description: "Manage your tribal community information and stay updated.",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome to your tribal community portal." />
      <div className="grid gap-6">
        <NotificationBar />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EventsSection className="lg:col-span-2" />
          <OpportunitiesPanel />
        </div>
        <CommunityMembers />
      </div>
    </DashboardShell>
  )
}

