import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardHeader } from "@/components/dashboard/header"

export const metadata: Metadata = {
  title: "Features | Tribal Community Portal",
  description: "Explore the features of our tribal community portal.",
}

export default function FeaturesPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Features" 
        text="Explore what our community portal has to offer." 
      />
      {/* Add your features content here */}
    </DashboardShell>
  )
}