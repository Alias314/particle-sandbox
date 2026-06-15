import {
  particleShapes,
  cube,
  particleRotations,
  boids,
} from "@/const/particleAttributes";
import { generation } from "@/const/particleGeneration";
import Dropdown from "../Dropdown";
import SettingSlider from "../SettingSlider";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { useState } from "react";

export default function ParticleSidebarContent({
  particleAttributes,
  particleShape,
  setParticleShape,
}) {
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
  const [particleCohesionRadius, setParticleCohesionRadius] = useState(
    boids.particleCohesionRadius,
  );
  const [particleCohesionStrength, setParticleCohesionStrength] = useState(
    boids.particleCohesionStrength,
  );
  const [particleSeparationRadius, setParticleSeparationRadius] = useState(
    boids.particleSeparationRadius,
  );
  const [particleSeparationStrength, setParticleSeparationStrength] = useState(
    boids.particleSeparationStrength,
  );

  return (
    <SidebarMenu className="gap-4">
      <SidebarMenuItem>
        <Dropdown
          placeholder={particleShape}
          list={particleShapes}
          label={"Particle Shape"}
          tooltip={"lorem ipsum"}
          onClick={(shape) => setParticleShape(shape)}
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={cube.rotation}
          list={particleRotations}
          label={"Particle Rotation"}
          tooltip={"lorem ipsum"}
          onClick={(rotation) => (cube.rotation = rotation)}
        />
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
          onUpdate={(newValue) => (cube.spawnPositionRange = newValue[0])}
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
          onUpdate={(newValue) => (boids.particleAlignmentRadius = newValue[0])}
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
          label={"Particle Cohesion Radius"}
          defaultValue={particleCohesionRadius}
          min={0}
          max={20}
          step={0.1}
          setValueLabel={setParticleCohesionRadius}
          onUpdate={(newValue) => (boids.particleCohesionRadius = newValue[0])}
          tooltip={
            "The range of which a particle is positioned on generation from the origin. A range of 10 means that a particle will spawn anywhere within 10 units from the origin."
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Particle Cohesion Strength"}
          defaultValue={particleCohesionStrength}
          min={0}
          max={10}
          step={0.1}
          setValueLabel={setParticleCohesionStrength}
          onUpdate={(newValue) =>
            (boids.particleCohesionStrength = newValue[0])
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
    </SidebarMenu>
  );
}
