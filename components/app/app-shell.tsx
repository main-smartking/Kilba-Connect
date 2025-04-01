"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { AppHeader } from "@/components/app/app-header"
import { AppBottomNav } from "@/components/app/app-bottom-nav"

export function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Only show the app shell if we're in the app routes
  if (
    !pathname.startsWith("/feed") &&
    !pathname.startsWith("/profile") &&
    !pathname.startsWith("/messages") &&
    !pathname.startsWith("/notifications") &&
    !pathname.startsWith("/events") &&
    !pathname.startsWith("/opportunities")
  ) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <AppBottomNav />
    </div>
  )
}

