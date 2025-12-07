import ChatHeader from "./chat-components/chat-header"
import ChatBody from "./chat-components/chat-body"
import ChatFooter from "./chat-components/chat-footer"

export default function Chat() {
  return (
    <div className="w-full max-w-3xl mx-auto h-screen px-4 py-4">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  )
}
