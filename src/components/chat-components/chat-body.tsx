import { useEffect, useRef } from "react";
import Thinking from "./thinking-load";
import WelcomeChat from "./welcome-chat";

export default function ChatBody({
  messages,
  isThinking,
}: {
   messages: { id: string; from: string; text: string; fullText?: string; typing?: boolean }[];
  isThinking: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll automatique vers le bas à chaque changement
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);


  // helper : afficher curseur si message en cours de typing
  // const renderMessageText = (msg: typeof messages[number]) => {
  //   if (msg.from === "bot" && msg.typing) {
  //     // dernier caractère + curseur clignotant
  //     return (
  //       <span className="whitespace-pre-wrap">
  //         {msg.text}
  //         <span className="ml-1 inline-block animate-blink">|</span>
  //       </span>
  //     );
  //   }
  //   return <span className="whitespace-pre-wrap">{msg.text}</span>;
  // };
  

  return (
    <div id="chat-body-class" className="flex flex-col gap-4 md:gap-6">

      {/* if no messages, show welcome chat */}
      {messages.length === 0 && !isThinking && (
        <WelcomeChat />
      )}

      {/* Display messages */}
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-2xl break-words ${
            msg.from === "bot"
              ? "self-start max-w-[100%] md:max-w-[80%]"
              : "bg-primary text-primary-foreground max-w-[80%] self-end"
          }`}
        >
          {/* <p>{renderMessageText(msg)}</p> */}
          <div dangerouslySetInnerHTML={{ __html: msg.text }} />
        </div>
      ))}

      {/* if still thinking, show thinking indicator */}
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
