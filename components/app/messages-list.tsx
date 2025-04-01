"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock conversations data
const initialConversations = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "Are you coming to the community meeting tomorrow?",
      time: "10:42 AM",
      unread: true,
    },
  },
  {
    id: 2,
    user: {
      name: "Michael Running Bear",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    lastMessage: {
      text: "Thank you for sharing those cultural resources!",
      time: "Yesterday",
      unread: false,
    },
  },
  {
    id: 3,
    user: {
      name: "Lisa Thunder",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "I've added you to the event planning committee.",
      time: "Yesterday",
      unread: false,
    },
  },
  {
    id: 4,
    user: {
      name: "David Two Rivers",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    lastMessage: {
      text: "Let me know when you're free to discuss the youth program.",
      time: "Monday",
      unread: false,
    },
  },
]

export function MessagesList() {
  const [conversations, setConversations] = useState(initialConversations)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeConversation, setActiveConversation] = useState(1)

  const filteredConversations = conversations.filter((conversation) =>
    conversation.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleConversationClick = (id: number) => {
    setActiveConversation(id)

    // Mark as read when clicked
    setConversations(
      conversations.map((conversation) => {
        if (conversation.id === id && conversation.lastMessage.unread) {
          return {
            ...conversation,
            lastMessage: {
              ...conversation.lastMessage,
              unread: false,
            },
          }
        }
        return conversation
      }),
    )
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search conversations..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="h-[calc(100vh-16rem)] overflow-y-auto">
          {filteredConversations.length > 0 ? (
            <div>
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50",
                    activeConversation === conversation.id && "bg-muted",
                  )}
                  onClick={() => handleConversationClick(conversation.id)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                      <AvatarFallback>
                        {conversation.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.user.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{conversation.user.name}</span>
                      <span className="text-xs text-muted-foreground">{conversation.lastMessage.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage.text}</p>
                      {conversation.lastMessage.unread && (
                        <Badge variant="secondary" className="ml-2">
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-40 items-center justify-center">
              <p className="text-sm text-muted-foreground">No conversations found</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

