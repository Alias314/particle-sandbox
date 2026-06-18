import Scene from "@/canvas/Scene";
import AppSidebar from "./sidebar/AppSidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useRef, useState } from "react";
import { generateParticlePool } from "@/utils/particles";
import { pool } from "@/const/particleGeneration";
import { cube, defaultSceneSettings } from "@/const/particleAttributes";
import ToolBar from "./ToolBar";
import SplashCard from "./SplashCard";

export default function Dashboard() {
  const particleAttributesRef = useRef(
    generateParticlePool(pool.amountCube, pool.amountSphere),
  );
  const [particleShape, setParticleShape] = useState(cube.shape);
  const [sceneSettings, setSceneSettings] = useState(defaultSceneSettings);
  const [showSplashCard, setShowSplashCard] = useState(true);

  return (
    <SidebarProvider className="bg-gray-950">
      <div className={`flex flex-1 w-full transition-all duration-500 ${showSplashCard && "blur-xs"}`}>
        <div className="relative flex-1 h-screen overflow-hidden">
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
      </div>

      {showSplashCard && (
        <SplashCard onClose={() => setShowSplashCard(false)} />
      )}
    </SidebarProvider>
  );
}
