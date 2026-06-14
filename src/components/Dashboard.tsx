import Scene from "@/canvas/Scene";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useRef, useState } from "react";
import { generateParticlePool } from "@/utils/particles";
import { pool } from "@/const/particleGeneration";
import { cube } from "@/const/particleAttributes";

export default function Dashboard() {
  const particleAttributesRef = useRef(
    generateParticlePool(pool.amountCube, pool.amountSphere),
  );
  const [particleShape, setParticleShape] = useState(cube.shape);

  return (
    <SidebarProvider>
      <div className="w-screen h-screen bg-gray-950">
        <Scene particleAttributes={particleAttributesRef.current} particleShape={particleShape} />
        <AppSidebar
          particleAttributes={particleAttributesRef.current}
          particleShape={particleShape}
          setParticleShape={setParticleShape}
        />
      </div>
    </SidebarProvider>
  );
}
