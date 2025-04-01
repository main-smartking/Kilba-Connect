"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock notifications data
const initialNotifications = [
  {
    id: 1,
    title: "Community Meeting",
    message: "Monthly community meeting scheduled for next Friday at 6 PM.",
    priority: "high",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "New Scholarship Opportunity",
    message: "A new scholarship for tribal members is now available. Check the opportunities section.",
    priority: "medium",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Cultural Event",
    message: "Annual cultural celebration will be held next month. Registration is now open.",
    priority: "low",
    date: "2023-06-05",
  },
]

export function NotificationBar({ className }: { className?: string }) {
  const [notifications, setNotifications] = useState(initialNotifications)

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-4 border-red-500 dark:border-red-400"
      case "medium":
        return "border-l-4 border-yellow-500 dark:border-yellow-400"
      case "low":
        return "border-l-4 border-green-500 dark:border-green-400"
      default:
        return ""
    }
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-primary" />
          <CardTitle>Notifications</CardTitle>
        </div>
        <CardDescription className="ml-auto">{notifications.length} unread notifications</CardDescription>
      </CardHeader>
      <CardContent>
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "relative flex items-start rounded-md border bg-card p-4 shadow-sm",
                  getPriorityStyles(notification.priority),
                )}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => dismissNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Dismiss</span>
                    </Button>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(notification.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">No new notifications</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

