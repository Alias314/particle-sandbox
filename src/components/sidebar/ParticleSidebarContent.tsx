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
  const [cubeRadius, setCubeRadius] = useState([
    cube.minRadius,
    cube.maxRadius,
  ]);
  const [cubeHeight, setCubeHeight] = useState([
    cube.minHeight,
    cube.maxHeight,
  ]);
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
          tooltip={"Sets the geometric shape used for every particle."}
          onClick={(shape) => setParticleShape(shape)}
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={cube.rotation}
          list={particleRotations}
          label={"Particle Rotation"}
          tooltip={
            "Sets how particles orient themselves as they move (e.g. facing their movement direction, facing the sphere, spinning freely, or staying fixed)."
          }
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
            <>
              Sets how many particles will spawn.{" "}
              <span className="text-red-500 font-semibold">
                <br />
                <br />
                Requires generating particles again to apply.
              </span>
            </>
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
          tooltip={"Sets how fast particles move."}
        />
      </SidebarMenuItem>

      {particleShape === "cone" ? (
        <SidebarMenuItem key="cone size slider" className="flex flex-col gap-4">
          <SettingSlider
            label={"Base Radius"}
            defaultValue={cubeRadius}
            min={0.01}
            max={1}
            step={0.01}
            setValueLabel={setCubeRadius}
            onUpdate={(newValue) => {
              cube.minRadius = newValue[0];
              cube.maxRadius = newValue[1];
            }}
            tooltip={
              <>
                Sets the min/max base radius of each cone particle. Each
                particle gets a random radius within this range.{" "}
                <span className="text-red-500 font-semibold">
                  <br />
                  <br />
                  Requires generating particles again to apply.
                </span>
              </>
            }
          />

          <SettingSlider
            label={"Height"}
            defaultValue={cubeHeight}
            min={0.01}
            max={1}
            step={0.01}
            setValueLabel={setCubeHeight}
            onUpdate={(newValue) => {
              cube.minHeight = newValue[0];
              cube.maxHeight = newValue[1];
            }}
            tooltip={
              <>
                Sets the min/max height of each cone particle. Each particle
                gets a random height within this range.{" "}
                <span className="text-red-500 font-semibold">
                  <br />
                  <br />
                  Requires generating particles again to apply.
                </span>
              </>
            }
          />
        </SidebarMenuItem>
      ) : (
        <SidebarMenuItem key="other shapes size slider">
          <SettingSlider
            label={"Size"}
            defaultValue={cubeSize}
            min={0.01}
            max={1}
            step={0.01}
            setValueLabel={setCubeSize}
            onUpdate={(newValue) => {
              cube.minSize = newValue[0];
              cube.maxSize = newValue[1];
            }}
            tooltip={
              <>
                Sets the min/max size of each particle. Each particle gets a
                random size within this range.{" "}
                <span className="text-red-500 font-semibold">
                  <br />
                  <br />
                  Requires generating particles again to apply.
                </span>
              </>
            }
          />
        </SidebarMenuItem>
      )}

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
            <>
              Sets how far from the origin particles can spawn. A range of 10
              means a particle can spawn anywhere within 10 units of the origin.{" "}
              <span className="text-red-500 font-semibold">
                <br />
                <br />
                Requires generating particles again to apply.
              </span>
            </>
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
            "Sets how far a particle looks to match the direction of nearby particles."
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
            "Sets how strongly a particle steers to match the direction of nearby particles."
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
            "Sets how far a particle looks to group together with nearby particles."
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
            "Sets how strongly a particle steers toward nearby particles to group with them."
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
            "Sets how far a particle looks to avoid crowding nearby particles."
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
            "Sets how strongly a particle steers away from nearby particles to avoid crowding."
          }
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
