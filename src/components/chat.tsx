import { ScrollArea } from "@/components/ui/scroll-area"
import ChatHeader from "./chat-components/chat-header"
import ChatBody from "./chat-components/chat-body"
import ChatFooter from "./chat-components/chat-footer"

export default function Chat() {
  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Header */}
      <div className="px-4 py-3 flex-shrink-0">
        <ChatHeader />
      </div>

      {/* Body scrollable */}
      <ScrollArea className="flex-1 min-h-0 px-4">
        <ChatBody />
      </ScrollArea>

      {/* Footer */}
      <div className="px-4 py-3 flex-shrink-0">
        <ChatFooter />
      </div>
    </div>
  )
}
