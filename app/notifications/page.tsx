import { NotificationsList } from "@/components/app/notifications-list"

export default function NotificationsPage() {
  return (
    <div className="container max-w-screen-md py-6">
      <h1 className="mb-6 text-2xl font-bold">Notifications</h1>
      <NotificationsList />
    </div>
  )
}

