"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Mock events data
const initialEvents = [
  {
    id: 1,
    title: "Monthly Community Meeting",
    description: "Discussion of community updates and upcoming initiatives.",
    date: "2023-06-25",
    time: "18:00",
    location: "Community Center",
    category: "Meeting",
  },
  {
    id: 2,
    title: "Youth Cultural Workshop",
    description: "Traditional crafts and language lessons for youth members.",
    date: "2023-06-18",
    time: "10:00",
    location: "Cultural Center",
    category: "Workshop",
  },
  {
    id: 3,
    title: "Elders Gathering",
    description: "Monthly gathering for tribal elders to share stories and wisdom.",
    date: "2023-06-20",
    time: "14:00",
    location: "Elders Hall",
    category: "Social",
  },
]

export function EventsSection({ className }: { className?: string }) {
  const [events] = useState(initialEvents)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <CardTitle>Upcoming Events</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <Link href="/dashboard/events">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {events.length > 0 ? (
          <div className="space-y-5">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col space-y-3 rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <Badge variant="outline">{event.category}</Badge>
                </div>
                <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:space-x-6 sm:space-y-0">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">No upcoming events</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/dashboard/events/new">Add New Event</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

