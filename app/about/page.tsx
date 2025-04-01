import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardHeader } from "@/components/dashboard/header"

export const metadata: Metadata = {
  title: "About | Tribal Community Portal",
  description: "Learn about our tribal community portal.",
}

export default function AboutPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="About" 
        text="Learn more about our community portal." 
      />
      {/* Add your about content here */}
    </DashboardShell>
  )
}