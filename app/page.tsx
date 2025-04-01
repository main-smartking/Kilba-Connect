import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with App Preview */}
      <section className="relative bg-gradient-to-b from-primary to-primary/80 pb-20 pt-16 text-white md:pb-32 md:pt-24">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Connect With Your Tribal Community
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Share stories, discover events, connect with members, and celebrate your heritage together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Join Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-8 w-full max-w-[320px] md:mt-0">
            <div className="overflow-hidden rounded-[40px] border-[8px] border-black bg-black shadow-xl">
              <div className="relative">
                {/* Phone Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-6 w-1/2 -translate-x-1/2 rounded-b-3xl bg-black"></div>
                {/* App Screenshot */}
                <div className="relative aspect-[9/19] overflow-hidden bg-background pt-6">
                  <div className="h-full w-full bg-background">
                    <div className="flex h-12 items-center border-b px-4">
                      <div className="text-lg font-bold">Tribal Connect</div>
                    </div>
                    <div className="p-4">
                      <div className="mb-4 h-12 rounded-full bg-muted"></div>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-card p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                            <div>
                              <div className="h-4 w-24 rounded bg-muted"></div>
                              <div className="mt-1 h-3 w-16 rounded bg-muted"></div>
                            </div>
                          </div>
                          <div className="mt-3 h-24 rounded bg-muted"></div>
                          <div className="mt-3 flex justify-between">
                            <div className="h-6 w-16 rounded bg-muted"></div>
                            <div className="h-6 w-16 rounded bg-muted"></div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-card p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                            <div>
                              <div className="h-4 w-32 rounded bg-muted"></div>
                              <div className="mt-1 h-3 w-20 rounded bg-muted"></div>
                            </div>
                          </div>
                          <div className="mt-3 h-40 rounded bg-muted"></div>
                          <div className="mt-3 flex justify-between">
                            <div className="h-6 w-16 rounded bg-muted"></div>
                            <div className="h-6 w-16 rounded bg-muted"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Connect, Share, and Celebrate Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Our app brings your tribal community together in one place with powerful social features.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Social Feed"
            description="Share updates, photos, and stories with your community. Like, comment, and connect with other members."
            icon="🔄"
          />
          <FeatureCard
            title="Location-Based Groups"
            description="Join groups specific to your location to stay connected with local members and events."
            icon="📍"
          />
          <FeatureCard
            title="Event Discovery"
            description="Find and join community events, ceremonies, and gatherings. Create your own events and invite others."
            icon="🗓️"
          />
          <FeatureCard
            title="Private Messaging"
            description="Connect directly with community members through private conversations and group chats."
            icon="💬"
          />
          <FeatureCard
            title="Opportunity Board"
            description="Discover job openings, scholarships, and other opportunities specifically for your community."
            icon="💼"
          />
          <FeatureCard
            title="Cultural Resources"
            description="Access and share cultural resources, language materials, and traditional knowledge."
            icon="📚"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Connect With Your Community?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join thousands of community members already connecting, sharing, and celebrating together.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/register" className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

