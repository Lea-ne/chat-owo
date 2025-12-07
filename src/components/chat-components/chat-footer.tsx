import { ArrowUp } from "lucide-react"

export default function ChatFooter({ message, setMessage, onSend }: any) {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSend(message);
  };


  return (
    <div>
      <form 
      onSubmit={handleSubmit}
      className="w-full overflow-hidden rounded-xl border border-border bg-background p-3 shadow-xs transition-all duration-200 focus-within:border-border hover:border-muted-foreground/50">
        <div className="flex flex-row items-start gap-1 sm:gap-2">
          <textarea
            placeholder="Type a message..."
            className="flex min-h-[80px] border ring-offset-background focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full rounded-none border-none shadow-none outline-hidden field-sizing-fixed dark:bg-transparent grow resize-none border-none! bg-transparent p-2 text-sm outline-none ring-0 [-ms-overflow-style:none] [scrollbar-width:none] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-scrollbar]:hidden"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();  // empêche de faire un saut de ligne
                onSend(message);
              }
            }}
          />
        </div>
        <div className="flex items-center justify-end !border-top-0 border-t-0! p-0 shadow-none dark:border-0 dark:border-transparent!">
          <button className={`inline-flex items-center justify-center text-sm font-medium [&_svg]:size-4 size-8 rounded-full transition-colors duration-200 ${message ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`} type="submit" data-testid="send-button" disabled={!message}>
            <ArrowUp />
          </button>
        </div>
      </form>
    </div>
  )
}

