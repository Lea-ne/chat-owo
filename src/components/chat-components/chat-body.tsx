export default function ChatBody({ messages }: { messages: any[] }) {


  return (
      <div className="flex flex-col gap-4 md:gap-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-2xl break-words ${msg.from === "bot" ? "self-start max-w-[100%] md:max-w-[80%]" : "bg-primary text-primary-foreground max-w-[80%] self-end"
            }`}
          >
            <p className="">{msg.text}</p>
          </div>
        ))}
      </div>
  );
}



