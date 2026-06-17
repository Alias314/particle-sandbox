import Scene from "@/canvas/Scene";
import AppSidebar from "./sidebar/AppSidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useRef, useState } from "react";
import { generateParticlePool } from "@/utils/particles";
import { pool } from "@/const/particleGeneration";
import { cube, defaultSceneSettings } from "@/const/particleAttributes";
import ToolBar from "./ToolBar";

export default function Dashboard() {
  const particleAttributesRef = useRef(
    generateParticlePool(pool.amountCube, pool.amountSphere),
  );
  const [particleShape, setParticleShape] = useState(cube.shape);
  const [sceneSettings, setSceneSettings] = useState(defaultSceneSettings);

  return (
    <SidebarProvider>
      <div className="relative flex-1 h-screen bg-gray-950 overflow-hidden">
        <Scene
          particleAttributes={particleAttributesRef.current}
          sceneSettings={sceneSettings}
          particleShape={particleShape}
        />
      </div>

      <AppSidebar
        particleAttributes={particleAttributesRef.current}
        particleShape={particleShape}
        setParticleShape={setParticleShape}
        setSceneSettings={setSceneSettings}
      />
    </SidebarProvider>
  );
}
