import { useEffect, useRef } from "react";
import Thinking from "./thinking-load";

export default function ChatBody({
  messages,
  isThinking,
}: {
   messages: { from: string; text: string }[];
  isThinking: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll automatique vers le bas à chaque changement
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-2xl break-words ${
            msg.from === "bot"
              ? "self-start max-w-[100%] md:max-w-[80%]"
              : "bg-primary text-primary-foreground max-w-[80%] self-end"
          }`}
        >
          <p>{msg.text}</p>
        </div>
      ))}

      {isThinking && (
        <div className="p-3 rounded-2xl self-start max-w-[80%]">
          <Thinking />
        </div>
      )}

      {/* ancre invisible qui sert de point de scroll */}
      <div ref={bottomRef} />
    </div>
  );
}
