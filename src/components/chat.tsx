// ui
import { ScrollArea } from "@/components/ui/scroll-area"
// chat components
import ChatHeader from "./chat-components/chat-header"
import ChatBody from "./chat-components/chat-body"
import ChatFooter from "./chat-components/chat-footer"
// react
import { useState } from "react";


export default function Chat() {


  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I am your friendly chat assistant. Ask me anything." }
  ]);

  const [input, setInput] = useState("");

  const handleSend = async (text: string) => {
  if (!text.trim()) return;

  setMessages(prev => [...prev, { from: "user", text }]);
  setInput(""); // reset du champ

  try {
    const response = await fetch(
      "https://lelelelele.app.n8n.cloud/webhook-test/test-chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      }
    );

    const data = await response.json();

    setMessages(prev => [
      ...prev,
      { from: "bot", text: data.response || "No response" }
    ]);
  } catch {
    setMessages(prev => [...prev, { from: "bot", text: "Oops! Something went wrong." }]);
  }
};




  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Header */}
      <div className="px-4 py-3 flex-shrink-0">
        <ChatHeader />
      </div>

      {/* Body scrollable */}
      <ScrollArea className="flex-1 min-h-0 px-4">
        <ChatBody messages={messages} />
      </ScrollArea>

      {/* Footer */}
      <div className="px-4 py-3 flex-shrink-0">
        <ChatFooter message={input} setMessage={setInput} onSend={handleSend} />
      </div>
    </div>
  )
}
