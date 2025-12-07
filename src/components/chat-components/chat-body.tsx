export default function ChatBody() {
  return (
    <div>
      <div className="mx-auto flex flex-col gap-4 md:gap-6">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl max-w-[80%]">
          <p className="text-sm">Hi — I am your friendly chat assistant. Ask me anything.</p>
        </div>

        <div className="self-end bg-blue-600 text-white p-3 rounded-2xl break-words ml-auto max-w-[calc(100%-2.5rem)] sm:max-w-[min(fit-content,80%)]">
          <p className="text-sm">Show me a cute dog picture.</p>
        </div>
      </div>
      <div className="h-24" />
    </div>
  )
}
