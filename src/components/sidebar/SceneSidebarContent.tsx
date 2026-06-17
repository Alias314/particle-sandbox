import {
  particleShapes,
  cube,
  particleRotations,
  boids,
  sphere,
  defaultSceneSettings,
} from "@/const/particleAttributes";
import { generation } from "@/const/particleGeneration";
import Dropdown from "../Dropdown";
import SettingSlider from "../SettingSlider";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { useState } from "react";
import { Toggle } from "../ui/toggle";
import SceneSettings from "@/canvas/SceneSettings";

export default function ParticleSidebarContent({ setSceneSettings }) {
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(
    defaultSceneSettings.ambientLightIntensity,
  );
  const [pointLightIntensity, setPointLightIntensity] = useState(
    defaultSceneSettings.pointLightIntensity,
  );

  return (
    <SidebarMenu className="gap-4">
      <SidebarMenuItem>
        <Dropdown
          placeholder={defaultSceneSettings.displayStars}
          list={[true, false]}
          label={"Display Stars"}
          tooltip={"Lorem ipsum"}
          onClick={(value) =>
            setSceneSettings((prev) => ({ ...prev, displayStars: value }))
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={defaultSceneSettings.displayGrid}
          list={[true, false]}
          label={"Display Grid"}
          tooltip={"Lorem ipsum"}
          onClick={(value) =>
            setSceneSettings((prev) => ({ ...prev, displayGrid: value }))
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={defaultSceneSettings.displayBloom}
          list={[true, false]}
          label={"Enable Bloom"}
          tooltip={"Lorem ipsum"}
          onClick={(value) =>
            setSceneSettings((prev) => ({ ...prev, displayBloom: value }))
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={defaultSceneSettings.enablePointLight}
          list={[true, false]}
          label={"Enable Point Light"}
          tooltip={"Lorem ipsum"}
          onClick={(value) =>
            setSceneSettings((prev) => ({ ...prev, enablePointLight: value }))
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Dropdown
          placeholder={defaultSceneSettings.enableAmbientLight}
          list={[true, false]}
          label={"Enable Ambient Light"}
          tooltip={"Lorem ipsum"}
          onClick={(value) =>
            setSceneSettings((prev) => ({ ...prev, enableAmbientLight: value }))
          }
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Point Light intensity"}
          defaultValue={pointLightIntensity}
          min={0}
          max={20}
          step={0.1}
          setValueLabel={setPointLightIntensity}
          onUpdate={(value) =>
            setSceneSettings((prev) => ({
              ...prev,
              pointLightIntensity: value,
            }))
          }
          tooltip={"Lorem ipsum"}
        />
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SettingSlider
          label={"Ambient Light intensity"}
          defaultValue={ambientLightIntensity}
          min={0}
          max={20}
          step={0.1}
          setValueLabel={setAmbientLightIntensity}
          onUpdate={(value) =>
            setSceneSettings((prev) => ({
              ...prev,
              ambientLightIntensity: value,
            }))
          }
          tooltip={"Lorem ipsum"}
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
