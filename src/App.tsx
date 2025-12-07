import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route } from "react-router-dom" //From ReactRouter
import Chat from "@/pages/ChatPage"

function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
            <SidebarTrigger />
              <Routes>
                <Route path="/" element={<Chat />} />
                {/* Add more routes as needed and go to components/app-sidebar.tsx to add the routes */}
              </Routes>
         </div>
      </div>
    </SidebarProvider>
  )
}

export default App
