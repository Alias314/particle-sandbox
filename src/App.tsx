import Dashboard from "./components/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import { TooltipProvider } from "./components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Dashboard />
      </SidebarProvider>
    </TooltipProvider>
  );
}
