import { Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function SceneSettings({ sceneSettings }) {
  return (
    <>
      {sceneSettings.displayStars && (
        <Stars
          radius={100}
          depth={150}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      )}

      {sceneSettings.displayGrid && (
        <gridHelper args={[100, 60]} position={[0, -1.5, 20]} />
      )}

      {sceneSettings.enableAmbientLight && <ambientLight intensity={sceneSettings.ambientLightIntensity} />}

      <EffectComposer>
        {sceneSettings.displayBloom && (
          <Bloom luminanceThreshold={0.5} mipmapBlur={true} />
        )}
      </EffectComposer>
    </>
  );
}
