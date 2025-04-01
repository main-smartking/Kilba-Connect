"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, MapPin, Settings, Users } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function ProfileHeader() {
  const [isEditing, setIsEditing] = useState(false)

  const handleEditProfile = () => {
    setIsEditing(true)
    toast({
      title: "Edit Profile",
      description: "Profile editing feature coming soon!",
    })
    setIsEditing(false)
  }

  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background pb-20 pt-16">
      <div className="container max-w-screen-md">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full"
              onClick={handleEditProfile}
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <div className="mt-1 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>North Zone</span>
              <Badge variant="outline">Member</Badge>
            </div>
            <p className="mt-4 max-w-md text-center">
              Passionate about preserving our tribal heritage and connecting community members. I love traditional
              crafts and storytelling.
            </p>

            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">124</span>
                <span className="text-xs text-muted-foreground">Following</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">348</span>
                <span className="text-xs text-muted-foreground">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">52</span>
                <span className="text-xs text-muted-foreground">Posts</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button className="gap-2">
                <Users className="h-4 w-4" />
                Follow
              </Button>
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

