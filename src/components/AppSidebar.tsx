import { cube } from "@/const/particleAttributes";
import { Label } from "./ui/label";
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
import { Slider } from "./ui/slider";
import { useState } from "react";

export default function AppSidebar() {
  const [cubeSpeed, setCubeSpeed] = useState(cube.speed);

  return (
    <Sidebar
      className="bg-slate-950 border-gray-900 shadow-2xl shadow-gray-950"
      side="right"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1 className="text-2xl text-gray-100">Sandbox Settings</h1>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="gap-4">
                  <div className="mb-2 flex justify-between">
                    <Label className="text-xl text-gray-100">Speed</Label>
                    <Label className="text-xl text-gray-100">{cubeSpeed}</Label>
                  </div>

                  <Slider 
                    defaultValue={[cubeSpeed]}
                    max={20}
                    step={0.2}
                    onValueChange={(value) => {
                      setCubeSpeed(value);
                      cube.speed = value;
                    }}
                  />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
