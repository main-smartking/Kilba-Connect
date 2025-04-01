import { ProfileHeader } from "@/components/app/profile-header"
import { ProfileTabs } from "@/components/app/profile-tabs"

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <div className="container max-w-screen-md py-6">
        <ProfileTabs />
      </div>
    </div>
  )
}

