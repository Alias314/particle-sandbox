import sphereVertexShader from "../shaders/sphere/sphereVertexShader.glsl";
import sphereFragmentShader from "../shaders/sphere/sphereFragmentShader.glsl";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Raycaster } from "three";
import { sphere } from "../const/particleAttributes";
import { Sparkles } from "@react-three/drei";

export default function Sphere({
  id,
  particleAttributes,
  backgroundRef,
  sceneSettings,
}) {
  const meshRef = useRef();
  const { pointer, camera } = useThree();
  const raycaster = new Raycaster();
  let intersects = [];
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current || !backgroundRef.current) return;

    meshRef.current.scale.set(sphere.size, sphere.size, sphere.size);

    if (sphere.movement === "follow cursor") {
      raycaster.setFromCamera(pointer, camera);
      intersects = raycaster.intersectObject(backgroundRef.current, true);
      const intersectPos = intersects[0].point;
      meshRef.current.position.copy(intersectPos);
      particleAttributes.sphere[id].position.copy(meshRef.current.position);
    } else if (sphere.movement === "circle") {
      time.current += delta;
      meshRef.current.position.x =
        Math.cos(time.current * sphere.speed) * sphere.radius;
      meshRef.current.position.y =
        Math.sin(time.current * sphere.speed) * sphere.radius;
      particleAttributes.sphere[id].position.copy(meshRef.current.position);
    } else if (sphere.movement === "figure 8") {
      time.current += delta;
      meshRef.current.position.x =
        Math.sin(time.current * sphere.speed) *
        Math.cos(time.current * sphere.speed) *
        sphere.radius;
      meshRef.current.position.y =
        Math.sin(time.current * sphere.speed) * sphere.radius;
      particleAttributes.sphere[id].position.copy(meshRef.current.position);
    } else if (sphere.movement === "figure 8 (horizontal)") {
      time.current += delta;
      meshRef.current.position.x =
        Math.cos(time.current * sphere.speed) * sphere.radius;
      meshRef.current.position.y =
        Math.sin(time.current * sphere.speed) *
        Math.cos(time.current * sphere.speed) *
        sphere.radius;
      particleAttributes.sphere[id].position.copy(meshRef.current.position);
    } else if (sphere.movement === "none") {
      meshRef.current.position.x = 0;
      meshRef.current.position.y = 0;
      particleAttributes.sphere[id].position.copy(meshRef.current.position);
    }
  });

  return (
    <mesh key={sphereVertexShader + sphereFragmentShader} ref={meshRef}>
      {sceneSettings.enablePointLight && (
        <pointLight intensity={sceneSettings.pointLightIntensity} distance={10} decay={0.6} />
      )}

      <octahedronGeometry args={[1, 10]} />
      <shaderMaterial
        vertexShader={sphereVertexShader}
        fragmentShader={sphereFragmentShader}
        transparent={true}
      />

      <Sparkles count={100} scale={1.2} opacity={1} />
    </mesh>
  );
}
