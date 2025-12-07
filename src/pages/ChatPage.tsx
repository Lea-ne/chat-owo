import Chat from "@/components/chat"

export default function ChatPage() {
  return (
    <div className="flex flex-1 flex-col h-screen">
        <div className="w-full max-w-3xl mx-auto px-4 py-4 h-full min-h-0">
          <Chat />
        </div>
    </div>
  )
}