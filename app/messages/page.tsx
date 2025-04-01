import { MessagesList } from "@/components/app/messages-list"
import { MessageChat } from "@/components/app/message-chat"

export default function MessagesPage() {
  return (
    <div className="container max-w-screen-xl py-6">
      <div className="grid h-[calc(100vh-10rem)] grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <MessagesList />
        </div>
        <div className="hidden md:col-span-2 md:block">
          <MessageChat />
        </div>
      </div>
    </div>
  )
}

