"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Mock opportunities data
const initialOpportunities = [
  {
    id: 1,
    title: "Community Health Worker",
    type: "Job",
    organization: "Tribal Health Center",
    deadline: "2023-07-15",
  },
  {
    id: 2,
    title: "Higher Education Scholarship",
    type: "Scholarship",
    organization: "Tribal Education Fund",
    deadline: "2023-08-01",
  },
  {
    id: 3,
    title: "Youth Leadership Program",
    type: "Program",
    organization: "Community Development",
    deadline: "2023-06-30",
  },
]

export function OpportunitiesPanel({ className }: { className?: string }) {
  const [opportunities] = useState(initialOpportunities)

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <CardTitle>Opportunities</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <Link href="/dashboard/opportunities">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {opportunities.length > 0 ? (
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="flex items-start justify-between rounded-lg border p-3">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <h3 className="font-medium">{opportunity.title}</h3>
                    <Badge variant="outline" className="ml-2">
                      {opportunity.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{opportunity.organization}</p>
                  <p className="text-xs">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/dashboard/opportunities/${opportunity.id}`}>
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">No opportunities available</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/dashboard/opportunities/new">Add New Opportunity</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

