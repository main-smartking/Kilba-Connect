"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="flex flex-1 items-center justify-between md:hidden">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold">Tribal Connect</span>
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Home
              </Link>
              <Link
                href="/features"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/features") ? "text-foreground" : "text-foreground/60",
                )}
              >
                Features
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
                )}
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full" variant="outline">
                  <Link href="/login" onClick={handleLinkClick}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/register" onClick={handleLinkClick}>
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

