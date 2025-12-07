import { useState } from "react";

export default function ChatBody() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I am your friendly chat assistant. Ask me anything." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Ajoute le message de l'utilisateur à la conversation
    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      // Appel à ton webhook n8n
      const response = await fetch(
        "https://lelelelele.app.n8n.cloud/webhook-test/test-chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input })
        }
      );

      const data = await response.json();

      // Ajoute la réponse du bot à la conversation
      setMessages(prev => [...prev, { from: "bot", text: data.response || "No response" }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { from: "bot", text: "Oops! Something went wrong." }]);
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 p-4">
      <div className="flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-2xl max-w-[80%] break-words ${
              msg.from === "bot" ? "self-start" : "bg-blue-600 text-white self-end"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-xl"
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}



