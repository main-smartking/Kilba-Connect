"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paperclip, Send, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock messages data
const initialMessages = [
  {
    id: 1,
    sender: "them",
    text: "Hi there! Are you coming to the community meeting tomorrow?",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Hello! Yes, I'm planning to attend. What time does it start again?",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "It starts at 6 PM at the Community Center. We'll be discussing the upcoming cultural festival and volunteer opportunities.",
    time: "10:38 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "Great, I'll be there! I'm interested in helping with the festival planning.",
    time: "10:40 AM",
  },
  {
    id: 5,
    sender: "them",
    text: "That's wonderful! We definitely need more volunteers for the planning committee. I'll add your name to the list.",
    time: "10:42 AM",
  },
]

export function MessageChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-center gap-3 border-b p-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">Sarah Johnson</h3>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex", message.sender === "me" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2",
                  message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                <p>{message.text}</p>
                <p
                  className={cn(
                    "mt-1 text-right text-xs",
                    message.sender === "me" ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

