import {
  particleShapes,
  cube,
  particleRotations,
  boids,
  sphere,
  sphereMovements,
} from "@/const/particleAttributes";
import { generation } from "@/const/particleGeneration";
import Dropdown from "../Dropdown";
import SettingSlider from "../SettingSlider";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { useState } from "react";

export default function ParticleSidebarContent() {
  const [sphereSize, setSphereSize] = useState(sphere.size);
  const [sphereSpeed, setSphereSpeed] = useState(sphere.speed);
  const [sphereMovementRadius, setSphereMovementRadius] = useState(sphere.size);
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

  return (
    <SidebarMenu className="gap-4">
      <SidebarMenuItem>
        <Dropdown
          placeholder={sphere.movement}
          list={sphereMovements}
          label={"Sphere Movement"}
          tooltip={
            "Sets how the sphere moves around the scene (e.g. following the cursor, circling, or tracing a figure 8)."
          }
          onClick={(movement) => (sphere.movement = movement)}
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Size"}
          defaultValue={sphereSize}
          min={0.1}
          max={2}
          step={0.01}
          setValueLabel={setSphereSize}
          onUpdate={(newValue) => (sphere.size = newValue[0])}
          tooltip={"Sets the size of the sphere."}
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Speed"}
          defaultValue={sphereSpeed}
          min={0}
          max={20}
          step={0.1}
          setValueLabel={setSphereSpeed}
          onUpdate={(newValue) => (sphere.speed = newValue[0])}
          tooltip={
            "Sets how fast the sphere moves (only applies to circle and figure 8 movement)."
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Movement Radius"}
          defaultValue={sphereMovementRadius}
          min={0}
          max={5}
          step={0.1}
          setValueLabel={setSphereMovementRadius}
          onUpdate={(newValue) => (sphere.radius = newValue[0])}
          tooltip={
            "Sets the size of the path the sphere moves along (only applies to circle and figure 8 movement)."
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
          onUpdate={(newValue) => (boids.sphereCohesionRadius = newValue[0])}
          tooltip={
            "Sets how far particles look to group toward the sphere."
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
          onUpdate={(newValue) => (boids.sphereCohesionStrength = newValue[0])}
          tooltip={
            "Sets how strongly particles steer toward the sphere to group with it."
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
          onUpdate={(newValue) => (boids.sphereSeparationRadius = newValue[0])}
          tooltip={
            "Sets how far particles look to avoid the sphere."
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
            "Sets how strongly particles steer away from the sphere to avoid it."
          }
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
