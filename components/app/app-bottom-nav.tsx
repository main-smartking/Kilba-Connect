"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Bell, Home, MessageSquare, Plus, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AppBottomNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/feed",
      icon: Home,
      label: "Feed",
    },
    {
      href: "/messages",
      icon: MessageSquare,
      label: "Messages",
    },
    {
      href: "/create",
      icon: Plus,
      label: "Create",
      className: "bg-primary text-primary-foreground",
    },
    {
      href: "/notifications",
      icon: Bell,
      label: "Notifications",
      badge: 3,
    },
    {
      href: "/profile",
      icon: User,
      label: "Profile",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
      <nav className="flex h-16 items-center justify-around">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex h-full w-full flex-col items-center justify-center",
              pathname === route.href ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div className={cn("relative flex h-10 w-10 items-center justify-center rounded-full", route.className)}>
              <route.icon className="h-5 w-5" />
              {route.badge && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">{route.badge}</Badge>
              )}
            </div>
            <span className="text-xs">{route.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

