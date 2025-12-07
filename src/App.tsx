import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route } from "react-router-dom" //From ReactRouter
import Chat from "@/pages/ChatPage"

function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
        <Routes>
          <Route path="/" element={<Chat />} />
          {/* Add more routes as needed and go to components/app-sidebar.tsx to add the routes */}
        </Routes>
    </SidebarProvider>
  )
}

export default App
