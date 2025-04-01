"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

// Mock posts data
const initialPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "North Zone",
      role: "Member",
    },
    content:
      "Just finished setting up for our community gathering this weekend! Everyone is welcome to join us for traditional food, music, and storytelling. It's going to be a great opportunity to connect with each other and celebrate our heritage.",
    image: "/placeholder.svg?height=400&width=600",
    postedAt: "2 hours ago",
    likes: 24,
    comments: 5,
    liked: false,
  },
  {
    id: 2,
    author: {
      name: "Michael Running Bear",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "East Zone",
      role: "Elder",
    },
    content:
      "Today I had the honor of teaching our language to the youth group. It fills my heart with joy to see the next generation embracing our traditions and language. We must keep our culture alive through them.",
    postedAt: "5 hours ago",
    likes: 42,
    comments: 8,
    liked: true,
  },
  {
    id: 3,
    author: {
      name: "Lisa Thunder",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "North Zone",
      role: "Admin",
    },
    content:
      "Important announcement: The tribal council meeting has been rescheduled to next Tuesday at 6 PM. We'll be discussing the upcoming cultural center renovation project. Your input is valuable, so please try to attend!",
    postedAt: "1 day ago",
    likes: 18,
    comments: 12,
    liked: false,
  },
]

export function PostFeed() {
  const [posts, setPosts] = useState(initialPosts)

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const liked = !post.liked
          return {
            ...post,
            liked,
            likes: liked ? post.likes + 1 : post.likes - 1,
          }
        }
        return post
      }),
    )
  }

  const handleComment = (postId: number) => {
    toast({
      title: "Comments",
      description: "Comments feature coming soon!",
    })
  }

  const handleShare = (postId: number) => {
    toast({
      title: "Share",
      description: "Share feature coming soon!",
    })
  }

  const handleReport = (postId: number) => {
    toast({
      title: "Report submitted",
      description: "Thank you for helping keep our community safe.",
    })
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-start space-y-0 pb-3">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">{post.author.name}</span>
                  {post.author.role === "Admin" && (
                    <Badge variant="secondary" className="ml-2">
                      Admin
                    </Badge>
                  )}
                  {post.author.role === "Elder" && (
                    <Badge variant="outline" className="ml-2">
                      Elder
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{post.postedAt}</span>
                  <span className="mx-1">•</span>
                  <span>{post.author.location}</span>
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleReport(post.id)}>Report post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="pb-3">
            <p className="mb-3">{post.content}</p>
            {post.image && (
              <div className="overflow-hidden rounded-md">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post attachment"
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t px-6 py-3">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Heart className="h-4 w-4 fill-primary text-primary" />
                <span className="text-xs">{post.likes}</span>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className={post.liked ? "text-primary" : ""}
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className={`mr-1 h-4 w-4 ${post.liked ? "fill-primary text-primary" : ""}`} />
                  Like
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleComment(post.id)}>
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Comment
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleShare(post.id)}>
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

