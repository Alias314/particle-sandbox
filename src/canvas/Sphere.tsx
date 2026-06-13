import sphereVertexShader from "../shaders/sphere/sphereVertexShader.glsl";
import sphereFragmentShader from "../shaders/sphere/sphereFragmentShader.glsl";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Raycaster } from "three";
import { sphere } from "../const/particleAttributes";
import { Sparkles } from "@react-three/drei";

export default function Sphere({ id, particleAttributes, backgroundRef }) {
  const meshRef = useRef();
  const { pointer, camera } = useThree();
  const raycaster = new Raycaster();
  let intersects = [];

  useFrame(() => {
    if (!meshRef.current || !backgroundRef.current) return;

    raycaster.setFromCamera(pointer, camera);
    intersects = raycaster.intersectObject(backgroundRef.current, true);
    const intersectPos = intersects[0].point;
    meshRef.current.position.copy(intersectPos);
    particleAttributes.sphere[id].position.copy(meshRef.current.position);
  });

  return (
    <mesh key={sphereVertexShader + sphereFragmentShader} ref={meshRef}>
      <pointLight intensity={6} distance={10} decay={0.6} />

      <octahedronGeometry args={[sphere.size, 6]} />
      <shaderMaterial
        vertexShader={sphereVertexShader}
        fragmentShader={sphereFragmentShader}
        transparent={true}
      />

      <Sparkles count={100} scale={1.2} opacity={1} />
    </mesh>
  );
}
