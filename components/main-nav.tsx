"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex md:flex-1">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="text-xl font-bold">Tribal Connect</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Home
        </Link>
        <Link
          href="/features"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/features") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Features
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
          )}
        >
          About
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <Button asChild variant="outline" size="sm">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/register">Join Now</Link>
        </Button>
      </div>
    </div>
  )
}

