"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock community members data
const initialMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Member",
    location: "North Zone",
    email: "sarah.j@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Running Bear",
    role: "Elder",
    location: "East Zone",
    email: "michael.rb@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Lisa Thunder",
    role: "Admin",
    location: "North Zone",
    email: "lisa.t@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Two Rivers",
    role: "Member",
    location: "West Zone",
    email: "david.tr@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Emma Cloud",
    role: "Youth Representative",
    location: "South Zone",
    email: "emma.c@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function CommunityMembers({ className }: { className?: string }) {
  const [members] = useState(initialMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = locationFilter === "all" || member.location === locationFilter

    return matchesSearch && matchesLocation
  })

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle>Community Members</CardTitle>
        </div>
        <CardDescription className="ml-auto">{filteredMembers.length} members in your location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search members..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="North Zone">North Zone</SelectItem>
              <SelectItem value="South Zone">South Zone</SelectItem>
              <SelectItem value="East Zone">East Zone</SelectItem>
              <SelectItem value="West Zone">West Zone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{member.name}</h3>
                      {member.role === "Admin" && (
                        <Badge variant="secondary" className="ml-2">
                          Admin
                        </Badge>
                      )}
                      {member.role === "Elder" && (
                        <Badge variant="outline" className="ml-2">
                          Elder
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <Badge variant="outline">{member.location}</Badge>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">No members found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

