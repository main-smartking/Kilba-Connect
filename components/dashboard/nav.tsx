"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarDays, Briefcase, Users, Bell, Home, LogOut, Menu, Settings } from "lucide-react"
import { useState } from "react"

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function DashboardNav({ className, items, ...props }: NavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const defaultItems = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/notifications",
      title: "Notifications",
      icon: <Bell className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/events",
      title: "Events",
      icon: <CalendarDays className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/opportunities",
      title: "Opportunities",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/community",
      title: "Community",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  const navItems = items || defaultItems

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon" className="absolute left-4 top-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <MobileNav items={navItems} pathname={pathname} setOpen={setOpen} />
        </SheetContent>
      </Sheet>
      <nav className={cn("hidden border-r bg-background md:block", className)} {...props}>
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Tribal Portal</span>
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("justify-start", pathname === item.href && "bg-secondary")}
                asChild
              >
                <Link href={item.href}>
                  {item.icon}
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/logout">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </ScrollArea>
      </nav>
    </>
  )
}

function MobileNav({ items, pathname, setOpen }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex h-12 items-center border-b">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold">Tribal Portal</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="flex flex-col gap-2 py-4">
          {items.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start", pathname === item.href && "bg-secondary")}
              asChild
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto border-t pt-4">
        <Button variant="outline" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
          <Link href="/logout">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}

