"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock posts data
const userPosts = [
  {
    id: 1,
    content:
      "Just finished teaching a traditional beadwork class to our youth group. So proud of their creativity and dedication to learning our cultural practices!",
    image: "/placeholder.svg?height=400&width=600",
    postedAt: "3 days ago",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    content:
      "Beautiful sunrise this morning from our sacred mountain. These moments remind me of the stories my grandfather used to tell about our connection to the land.",
    image: "/placeholder.svg?height=400&width=600",
    postedAt: "1 week ago",
    likes: 67,
    comments: 12,
  },
]

// Mock events data
const userEvents = [
  {
    id: 1,
    title: "Traditional Cooking Workshop",
    date: "2023-07-10",
    time: "14:00",
    location: "Community Kitchen",
    category: "Workshop",
    attending: true,
  },
  {
    id: 2,
    title: "Tribal Council Meeting",
    date: "2023-07-18",
    time: "18:00",
    location: "Council Hall",
    category: "Meeting",
    attending: true,
  },
]

// Mock connections data
const userConnections = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "North Zone",
    role: "Member",
  },
  {
    id: 2,
    name: "Michael Running Bear",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "East Zone",
    role: "Elder",
  },
  {
    id: 3,
    name: "Lisa Thunder",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "North Zone",
    role: "Admin",
  },
  {
    id: 4,
    name: "David Two Rivers",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "West Zone",
    role: "Member",
  },
]

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts")

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <Tabs defaultValue="posts" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="connections">Connections</TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="mt-6">
        {userPosts.length > 0 ? (
          <div className="space-y-6">
            {userPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <p className="mb-4">{post.content}</p>
                  {post.image && (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post attachment"
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.postedAt}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Heart className="h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageCircle className="h-4 w-4" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex h-40 items-center justify-center p-6">
              <p className="text-muted-foreground">No posts yet</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="events" className="mt-6">
        {userEvents.length > 0 ? (
          <div className="space-y-4">
            {userEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex border-l-4 border-l-primary">
                    <div className="flex flex-col items-center justify-center bg-muted p-4 text-center">
                      <span className="text-2xl font-bold">{formatDate(event.date).split(" ")[1]}</span>
                      <span className="text-xs uppercase">{formatDate(event.date).split(" ")[0]}</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge>{event.category}</Badge>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        <span>{event.time}</span>
                        <span className="mx-2">•</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex h-40 items-center justify-center p-6">
              <p className="text-muted-foreground">No events yet</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="connections" className="mt-6">
        {userConnections.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {userConnections.map((connection) => (
              <Card key={connection.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Avatar>
                    <AvatarImage src={connection.avatar} alt={connection.name} />
                    <AvatarFallback>
                      {connection.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-medium">{connection.name}</span>
                      {connection.role === "Admin" && (
                        <Badge variant="secondary" className="ml-2">
                          Admin
                        </Badge>
                      )}
                      {connection.role === "Elder" && (
                        <Badge variant="outline" className="ml-2">
                          Elder
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{connection.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex h-40 items-center justify-center p-6">
              <p className="text-muted-foreground">No connections yet</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  )
}

