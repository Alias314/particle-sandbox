import Scene from "@/canvas/Scene";
import AppSidebar from "./AppSidebar";
import { Sidebar } from "lucide-react";
import { SidebarProvider } from "./ui/sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="w-screen h-screen bg-gray-950">
        <Scene />
        <AppSidebar />
      </div>
    </SidebarProvider>
  );
}
