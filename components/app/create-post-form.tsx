"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Image, MapPin, Smile, Video } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function CreatePostForm() {
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      toast({
        title: "Empty post",
        description: "Please write something to post.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate post creation
    setTimeout(() => {
      setIsLoading(false)
      setContent("")
      toast({
        title: "Post created",
        description: "Your post has been published to your community.",
      })
    }, 1000)
  }

  return (
    <Card className="mb-6">
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Share something with your community..."
              className="min-h-24 flex-1 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t px-6 py-3">
          <div className="flex gap-4">
            <Button type="button" variant="ghost" size="sm" className="flex gap-1">
              <Image className="h-4 w-4" />
              <span className="hidden sm:inline">Photo</span>
            </Button>
            <Button type="button" variant="ghost" size="sm" className="flex gap-1">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Video</span>
            </Button>
            <Button type="button" variant="ghost" size="sm" className="flex gap-1">
              <Smile className="h-4 w-4" />
              <span className="hidden sm:inline">Feeling</span>
            </Button>
            <Button type="button" variant="ghost" size="sm" className="flex gap-1">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Location</span>
            </Button>
          </div>
          <Button type="submit" disabled={isLoading || !content.trim()}>
            {isLoading ? "Posting..." : "Post"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

