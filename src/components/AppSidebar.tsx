import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar className="bg-slate-950 border-gray-900 shadow-2xl shadow-gray-950" side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1 className="text-xl text-gray-100">
              Sandbox Settings
            </h1>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <p className="text-xl text-gray-100">test</p>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <p>test</p>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
