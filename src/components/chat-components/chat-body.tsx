export default function ChatBody({ messages }: { messages: any[] }) {


  return (
    <div className="flex flex-col gap-4 md:gap-6 p-4">
      <div className="flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-2xl max-w-[80%] break-words ${
              msg.from === "bot" ? "self-start" : "bg-primary text-primary-foreground self-end"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



