import Scene from "./canvas/Scene";
import Dashboard from "./components/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";

export default function App() {
  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  );
}
