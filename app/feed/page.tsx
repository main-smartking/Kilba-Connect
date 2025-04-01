import { PostFeed } from "@/components/app/post-feed"
import { CreatePostForm } from "@/components/app/create-post-form"
import { SuggestedUsers } from "@/components/app/suggested-users"
import { UpcomingEvents } from "@/components/app/upcoming-events"

export default function FeedPage() {
  return (
    <div className="container max-w-screen-xl py-6">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          <CreatePostForm />
          <PostFeed />
        </div>
        <div className="space-y-6">
          <SuggestedUsers />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  )
}

