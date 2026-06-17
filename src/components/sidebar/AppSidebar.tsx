import {
  boids,
  cube,
  particleRotations,
  particleShapes,
} from "@/const/particleAttributes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "../ui/sidebar";
import { useState } from "react";
import SettingSlider from "../SettingSlider";
import { Button } from "../ui/button";
import { generateParticles } from "@/utils/particles";
import { generation } from "@/const/particleGeneration";
import { Separator } from "../ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Label } from "../ui/label";
import { titleCase } from "@/utils/string";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Dropdown from "../Dropdown";
import { ButtonGroup } from "../ui/button-group";
import ParticleSidebarContent from "./ParticleSidebarContent";
import SphereSidebarContent from "./SphereSidebarContent";
import SceneSidebarContent from "./SceneSidebarContent";

export default function AppSidebar({
  particleAttributes,
  particleShape,
  setParticleShape,
  setSceneSettings,
}) {
  const [activeTab, setActiveTab] = useState("particles");

  return (
    <Sidebar
      className="bg-slate-950 border-gray-900 shadow-2xl shadow-gray-950"
      side="right"
    >
      <SidebarContent>
        <SidebarGroup className="p-0">
          <div className="w-full mb-4 grid grid-cols-3">
            <Button
              className={`py-5 text-xl rounded-none ${activeTab === "particles" ? "bg-slate-950" : "bg-white text-gray-950 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("particles")}
            >
              Particles
            </Button>
            <Button
              className={`py-5 text-xl rounded-none ${activeTab === "sphere" ? "bg-slate-950" : "bg-white text-gray-950 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("sphere")}
            >
              Sphere
            </Button>
            <Button
              className={`py-5 text-xl rounded-none ${activeTab === "scene" ? "bg-slate-950" : "bg-white text-gray-950 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("scene")}
            >
              Scene
            </Button>
          </div>

          <SidebarGroupContent className="p-3">
            {activeTab === "particles" && (
              <ParticleSidebarContent
                particleAttributes={particleAttributes}
                particleShape={particleShape}
                setParticleShape={setParticleShape}
              />
            )}
            {activeTab === "sphere" && <SphereSidebarContent />}
            {activeTab === "scene" && (
              <SceneSidebarContent setSceneSettings={setSceneSettings} />
            )}

            <Separator className="my-6 mb-5" />

            <SidebarMenuItem>
              <Button
                className="bg-gray-100 text-xl text-gray-950 rounded-md"
                variant="secondary"
                onClick={() => generateParticles(particleAttributes)}
              >
                Generate Particles
              </Button>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
