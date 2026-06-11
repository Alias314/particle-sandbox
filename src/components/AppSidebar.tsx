import { cube } from "@/const/particleAttributes";
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
import { useState } from "react";
import SettingSlider from "./SettingSlider";
import { Button } from "./ui/button";
import { generateParticles } from "@/utils/particles";
import { generation } from "@/const/particleGeneration";

export default function AppSidebar({ particleAttributes }) {
  const [amountParticles, setAmountParticles] = useState(generation.amountCube);
  const [cubeSpeed, setCubeSpeed] = useState(cube.speed);
  const [cubeSize, setCubeSize] = useState([cube.minSize, cube.maxSize]);

  return (
    <Sidebar
      className="bg-slate-950 border-gray-900 shadow-2xl shadow-gray-950"
      side="right"
    >
      <SidebarContent>
        <SidebarGroup className="p-3 pt-4">
          <SidebarGroupLabel className="mb-8">
            <h1 className="text-2xl text-gray-100">Sandbox Settings</h1>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              <SidebarMenuItem>
                <SettingSlider
                  label={"Amount"}
                  defaultValue={amountParticles}
                  min={0}
                  max={1000}
                  step={1}
                  setValueLabel={setAmountParticles}
                  onUpdate={(newValue) => {
                    generation.amountCube = newValue[0];
                    console.log(generation.amountCube);
                  }}
                  tooltip={"Modifies the amount of particles. Generate particles for changes to apply."}
                />
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SettingSlider
                  label={"Speed"}
                  defaultValue={cubeSpeed}
                  min={0}
                  max={20}
                  step={0.1}
                  setValueLabel={setCubeSpeed}
                  onUpdate={(newValue) => {
                    cube.speed = newValue[0];
                  }}
                  tooltip={"Multiplier for particle speed"}
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Size"}
                  defaultValue={cubeSize}
                  min={0.05}
                  max={1}
                  step={0.01}
                  setValueLabel={setCubeSize}
                  onUpdate={(newValue) => {
                    cube.minSize = newValue[0];
                    cube.maxSize = newValue[1];
                    console.log(cube.minSize, cube.maxSize);
                  }}
                  tooltip={
                    "Modifies the minimum and maximum size of a particle. Particles will have sizes in the range of the minimum and maximum sizes. Generate particles for changes to apply."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem className="mt-4">
                <Button
                  className="bg-gray-100 text-xl text-gray-950 rounded-md"
                  variant="secondary"
                  onClick={() => generateParticles(particleAttributes)}
                >
                  Generate Particles
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
