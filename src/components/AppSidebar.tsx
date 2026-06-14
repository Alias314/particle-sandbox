import { boids, cube, particleShapes } from "@/const/particleAttributes";
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
} from "./ui/sidebar";
import { useState } from "react";
import SettingSlider from "./SettingSlider";
import { Button } from "./ui/button";
import { generateParticles } from "@/utils/particles";
import { generation } from "@/const/particleGeneration";
import { Separator } from "./ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Label } from "./ui/label";
import { titleCase } from "@/utils/string";

export default function AppSidebar({ particleAttributes, particleShape, setParticleShape }) {
  const [amountParticles, setAmountParticles] = useState(generation.amountCube);
  const [cubeSpeed, setCubeSpeed] = useState(cube.speed);
  const [cubeSize, setCubeSize] = useState([cube.minSize, cube.maxSize]);
  const [cubeSpawnPositionRange, setCubeSpawnPositionRange] = useState(
    cube.spawnPositionRange,
  );
  const [particleAlignmentRadius, setParticleAlignmentRadius] = useState(
    boids.particleAlignmentRadius,
  );
  const [particleAlignmentStrength, setParticleAlignmentStrength] = useState(
    boids.particleAlignmentStrength,
  );
  const [particleSeparationRadius, setParticleSeparationRadius] = useState(
    boids.particleSeparationRadius,
  );
  const [particleSeparationStrength, setParticleSeparationStrength] = useState(
    boids.particleSeparationStrength,
  );
  const [sphereCohesionRadius, setSphereCohesionRadius] = useState(
    boids.sphereCohesionRadius,
  );
  const [sphereCohesionStrength, setSphereCohesionStrength] = useState(
    boids.sphereCohesionStrength,
  );
  const [sphereSeparationRadius, setSphereSeparationRadius] = useState(
    boids.sphereSeparationRadius,
  );
  const [sphereSeparationStrength, setSphereSeparationStrength] = useState(
    boids.sphereSeparationStrength,
  );
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  return (
    <Sidebar
      className="bg-slate-950 border-gray-900 shadow-2xl shadow-gray-950"
      side="right"
    >
      <SidebarContent>
        <SidebarGroup className="p-3 pt-4">
          <SidebarGroupLabel>
            <h1 className="text-2xl text-gray-100">Sandbox Settings</h1>
          </SidebarGroupLabel>

          <Separator className="mx-2 mt-1 mb-8" />

          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              <SidebarMenuItem>
                <Label className="text-xl text-gray-100">Particle Shape</Label>
                <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
                  <CollapsibleTrigger
                    className="hover:bg-slate-900 active:bg-slate-900 focus:bg-slate-900 data-[state=open]:bg-slate-900 data-[state=open]:hover:bg-slate-900"
                    asChild
                  >
                    <SidebarMenuButton>
                      <Label className="text-xl text-gray-100">
                        {titleCase(particleShape)}
                      </Label>
                      <ChevronDown className="text-gray-100 text-4xl ml-auto" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-900">
                    {particleShapes.map((shape) => (
                      <Button
                        className="w-full pl-2 justify-start bg-slate-900 text-xl text-gray-100 rounded-none"
                        onClick={() => {
                          setParticleShape(shape);
                          setIsCollapsibleOpen(false);
                        }}
                      >
                        {titleCase(shape)}
                      </Button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Amount"}
                  defaultValue={amountParticles}
                  min={0}
                  max={1000}
                  step={1}
                  setValueLabel={setAmountParticles}
                  onUpdate={(newValue) => (generation.amountCube = newValue[0])}
                  tooltip={
                    "Modifies the amount of particles. Generate particles for changes to apply."
                  }
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
                  onUpdate={(newValue) => (cube.speed = newValue[0])}
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
                  }}
                  tooltip={
                    "Modifies the minimum and maximum size of a particle. Particles will have sizes in the range of the minimum and maximum sizes. Generate particles for changes to apply."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Spawn Range"}
                  defaultValue={cubeSpawnPositionRange}
                  min={1}
                  max={25}
                  step={1}
                  setValueLabel={setCubeSpawnPositionRange}
                  onUpdate={(newValue) =>
                    (cube.spawnPositionRange = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Particle Alignment Radius"}
                  defaultValue={particleAlignmentRadius}
                  min={0}
                  max={20}
                  step={1}
                  setValueLabel={setParticleAlignmentRadius}
                  onUpdate={(newValue) =>
                    (boids.particleAlignmentRadius = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Particle Alignment Strength"}
                  defaultValue={particleAlignmentStrength}
                  min={0}
                  max={10}
                  step={0.1}
                  setValueLabel={setParticleAlignmentStrength}
                  onUpdate={(newValue) =>
                    (boids.particleAlignmentStrength = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Particle Separation Radius"}
                  defaultValue={particleSeparationRadius}
                  min={0}
                  max={20}
                  step={0.1}
                  setValueLabel={setParticleSeparationRadius}
                  onUpdate={(newValue) =>
                    (boids.particleSeparationRadius = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Particle Separation Strength"}
                  defaultValue={particleSeparationStrength}
                  min={0}
                  max={10}
                  step={0.1}
                  setValueLabel={setParticleSeparationStrength}
                  onUpdate={(newValue) =>
                    (boids.particleSeparationStrength = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Sphere Cohesion Radius"}
                  defaultValue={sphereCohesionRadius}
                  min={0}
                  max={20}
                  step={0.1}
                  setValueLabel={setSphereCohesionRadius}
                  onUpdate={(newValue) =>
                    (boids.sphereCohesionRadius = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Sphere Cohesion Strength"}
                  defaultValue={sphereCohesionStrength}
                  min={0}
                  max={10}
                  step={0.1}
                  setValueLabel={setSphereCohesionStrength}
                  onUpdate={(newValue) =>
                    (boids.sphereCohesionStrength = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Sphere Separation Radius"}
                  defaultValue={sphereSeparationRadius}
                  min={0}
                  max={10}
                  step={0.1}
                  setValueLabel={setSphereSeparationRadius}
                  onUpdate={(newValue) =>
                    (boids.sphereSeparationRadius = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SettingSlider
                  label={"Sphere Separation Strength"}
                  defaultValue={sphereSeparationStrength}
                  min={0}
                  max={10}
                  step={0.1}
                  setValueLabel={setSphereSeparationStrength}
                  onUpdate={(newValue) =>
                    (boids.sphereSeparationStrength = newValue[0])
                  }
                  tooltip={
                    "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
                  }
                />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <Separator className="mx-2 my-6 mb-5" />

          <SidebarMenuItem>
            <Button
              className="bg-gray-100 text-xl text-gray-950 rounded-md"
              variant="secondary"
              onClick={() => generateParticles(particleAttributes)}
            >
              Generate Particles
            </Button>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
