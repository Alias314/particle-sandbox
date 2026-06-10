import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxGeometry, MeshStandardMaterial, Vector3 } from "three";
import { cube } from "../const/particleAttributes";
import { getAlignmentDirection, getCubeSphereCohesionDirection, getCubeSPhereSeparationDirection, getSeparationDirection } from "../utils/boids";

export default function Cube({ id, particleAttributes }) {
  const meshRef = useRef();
  const newDirection = new Vector3();
  const speed = cube.speed;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    // meshRef.current.rotation.x += delta * speed;
    // meshRef.current.rotation.y += delta * speed;
    // particleAttributes.cube[id].rotation.copy(meshRef.current.rotation);

    const alignmentDirection = getAlignmentDirection(10, id, particleAttributes.cube);
    const separationDirection = getSeparationDirection(0.1, id, particleAttributes.cube);
    const cubeSphereCohesionDirection = getCubeSphereCohesionDirection(1000, id, particleAttributes.cube, particleAttributes.sphere);
    const cubeSphereSeparationDirection = getCubeSPhereSeparationDirection(10, id, particleAttributes.cube, particleAttributes.sphere);

    newDirection.copy(particleAttributes.cube[id].direction);
    newDirection.sub(alignmentDirection);
    newDirection.add(separationDirection).normalize();
    newDirection.add(cubeSphereCohesionDirection).multiplyScalar(1.5);
    newDirection.add(cubeSphereSeparationDirection);

    meshRef.current.position.addScaledVector(newDirection, speed * delta);
    particleAttributes.cube[id].position.copy(meshRef.current.position);
    particleAttributes.cube[id].direction.copy(newDirection);
  });

  return (
    <mesh 
      ref={meshRef} 
      position={particleAttributes.cube[id].position} 
      rotation={particleAttributes.cube[id].rotation}
    >
      <boxGeometry args={[cube.size, cube.size, cube.size]} />
      <meshStandardMaterial />
    </mesh>
  );
}
