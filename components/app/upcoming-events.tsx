"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

// Mock events data
const initialEvents = [
  {
    id: 1,
    title: "Monthly Community Meeting",
    date: "2023-06-25",
    time: "18:00",
    location: "Community Center",
    category: "Meeting",
    attending: false,
  },
  {
    id: 2,
    title: "Youth Cultural Workshop",
    date: "2023-06-18",
    time: "10:00",
    location: "Cultural Center",
    category: "Workshop",
    attending: true,
  },
  {
    id: 3,
    title: "Elders Gathering",
    date: "2023-06-20",
    time: "14:00",
    location: "Elders Hall",
    category: "Social",
    attending: false,
  },
]

export function UpcomingEvents() {
  const [events, setEvents] = useState(initialEvents)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const handleAttend = (eventId: number) => {
    setEvents(
      events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            attending: !event.attending,
          }
        }
        return event
      }),
    )

    const event = events.find((event) => event.id === eventId)
    if (event) {
      toast({
        title: event.attending ? "RSVP Canceled" : "RSVP Confirmed",
        description: event.attending
          ? `You are no longer attending ${event.title}`
          : `You are now attending ${event.title}`,
      })
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {events.map((event) => (
          <div key={event.id} className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <span className="font-medium">{event.title}</span>
                  {event.attending && (
                    <Badge variant="secondary" className="ml-2">
                      Attending
                    </Badge>
                  )}
                </div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>
                    {formatDate(event.date)} • {event.time}
                  </span>
                </div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Badge variant="outline">{event.category}</Badge>
            </div>
            <Button
              variant={event.attending ? "outline" : "secondary"}
              size="sm"
              className="w-full"
              onClick={() => handleAttend(event.id)}
            >
              {event.attending ? "Cancel RSVP" : "Attend"}
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t px-6 py-3">
        <Button asChild variant="ghost" size="sm" className="w-full">
          <Link href="/events">View All Events</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

