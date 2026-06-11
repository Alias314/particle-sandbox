import Scene from "@/canvas/Scene";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useRef } from "react";
import { generateParticlePool } from "@/utils/particles";
import { pool } from "@/const/particleGeneration";

export default function Dashboard() {
  const particleAttributesRef = useRef(
    generateParticlePool(pool.amountCube, pool.amountSphere),
  );

  return (
    <SidebarProvider>
      <div className="w-screen h-screen bg-gray-950">
        <Scene particleAttributes={particleAttributesRef.current} />
        <AppSidebar particleAttributes={particleAttributesRef.current} />
      </div>
    </SidebarProvider>
  );
}
