"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

// Mock suggested users data
const initialSuggestedUsers = [
  {
    id: 1,
    name: "David Two Rivers",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "West Zone",
    role: "Member",
    followed: false,
  },
  {
    id: 2,
    name: "Emma Cloud",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "South Zone",
    role: "Youth Representative",
    followed: false,
  },
  {
    id: 3,
    name: "John Eagle",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "North Zone",
    role: "Elder",
    followed: false,
  },
]

export function SuggestedUsers() {
  const [suggestedUsers, setSuggestedUsers] = useState(initialSuggestedUsers)

  const handleFollow = (userId: number) => {
    setSuggestedUsers(
      suggestedUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            followed: !user.followed,
          }
        }
        return user
      }),
    )

    const user = suggestedUsers.find((user) => user.id === userId)
    if (user) {
      toast({
        title: user.followed ? "Unfollowed" : "Following",
        description: user.followed ? `You are no longer following ${user.name}` : `You are now following ${user.name}`,
      })
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">People You May Know</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{user.name}</span>
                  {user.role === "Elder" && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      Elder
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{user.location}</div>
              </div>
            </div>
            <Button variant={user.followed ? "outline" : "secondary"} size="sm" onClick={() => handleFollow(user.id)}>
              {user.followed ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

