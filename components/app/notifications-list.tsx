"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Heart, MessageCircle, UserPlus } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Mock notifications data
const initialNotifications = [
  {
    id: 1,
    type: "like",
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "liked your post",
    postPreview: "Just finished setting up for our community gathering...",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: {
      name: "Michael Running Bear",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "commented on your post",
    postPreview: "This is wonderful! I'll definitely be there with my family.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "follow",
    user: {
      name: "Lisa Thunder",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "started following you",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "event",
    user: {
      name: "David Two Rivers",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "invited you to an event",
    eventName: "Annual Tribal Celebration",
    eventDate: "2023-07-15",
    time: "2 days ago",
    read: true,
  },
]

export function NotificationsList() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAsRead = (notificationId: number) => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === notificationId) {
          return {
            ...notification,
            read: true,
          }
        }
        return notification
      }),
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )

    toast({
      title: "All notifications marked as read",
    })
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />
      case "comment":
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case "follow":
        return <UserPlus className="h-4 w-4 text-green-500" />
      case "event":
        return <CalendarDays className="h-4 w-4 text-purple-500" />
      default:
        return null
    }
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">Recent Notifications</h2>
          {unreadCount > 0 && <Badge variant="secondary">{unreadCount} new</Badge>}
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        )}
      </div>

      {notifications.length > 0 ? (
        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 transition-colors ${!notification.read ? "border-l-4 border-l-primary" : ""}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  <AvatarFallback>
                    {notification.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{notification.user.name}</span>
                    <span className="text-muted-foreground">{notification.content}</span>
                    {getNotificationIcon(notification.type)}
                  </div>

                  {notification.type === "like" || notification.type === "comment" ? (
                    <p className="mt-1 text-sm text-muted-foreground">"{notification.postPreview}"</p>
                  ) : notification.type === "event" ? (
                    <div className="mt-1 text-sm">
                      <p className="font-medium">{notification.eventName}</p>
                      <p className="text-muted-foreground">{new Date(notification.eventDate).toLocaleDateString()}</p>
                    </div>
                  ) : null}

                  <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                </div>

                {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex h-40 items-center justify-center p-4">
          <p className="text-muted-foreground">No notifications yet</p>
        </Card>
      )}
    </div>
  )
}

