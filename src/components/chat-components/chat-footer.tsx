export default function ChatFooter() {
  return (
    <div>
      <form className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  )
}
