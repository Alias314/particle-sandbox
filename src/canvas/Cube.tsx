import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxGeometry, MeshStandardMaterial, Vector3 } from "three";
import { boids, cube } from "../const/particleAttributes";
import {
  getAlignmentDirection,
  getCubeSphereCohesionDirection,
  getCubeSPhereSeparationDirection,
  getSeparationDirection,
} from "../utils/boids";

export default function Cube({ id, particleAttributes }) {
  const meshRef = useRef();
  const newDirection = new Vector3();
  
  useFrame((_, delta) => {
    meshRef.current.visible = particleAttributes.cube[id].isVisible;
    if (!meshRef.current || !particleAttributes.cube[id].isVisible) return;
    
    const size = particleAttributes.cube[id].size;
    meshRef.current.scale.set(size, size, size);
    
    const alignmentDirection = getAlignmentDirection(
      boids.particleAlignmentRadius,
      id,
      particleAttributes.cube,
    );
    const separationDirection = getSeparationDirection(
      boids.particleSeparationRadius,
      id,
      particleAttributes.cube,
    );
    const cubeSphereCohesionDirection = getCubeSphereCohesionDirection(
      boids.sphereCohesionRadius,
      id,
      particleAttributes.cube,
      particleAttributes.sphere,
    );
    const cubeSphereSeparationDirection = getCubeSPhereSeparationDirection(
      boids.sphereSeparationRadius,
      id,
      particleAttributes.cube,
      particleAttributes.sphere,
    );
    
    newDirection.copy(particleAttributes.cube[id].direction);
    newDirection.sub(alignmentDirection);
    newDirection.add(separationDirection).normalize();
    newDirection.addScaledVector(cubeSphereCohesionDirection, boids.sphereCohesionStrength);
    newDirection.addScaledVector(cubeSphereSeparationDirection, boids.sphereSeparationStrength);

    const speed = cube.speed;
    
    particleAttributes.cube[id].position.addScaledVector(newDirection, speed * delta);
    meshRef.current.position.copy(particleAttributes.cube[id].position);
    particleAttributes.cube[id].direction.copy(newDirection);

    const targetPosition = meshRef.current.position.clone().add(newDirection);
    meshRef.current.lookAt(targetPosition);
  });

  return (
    <mesh
      ref={meshRef}
      position={particleAttributes.cube[id].position}
      rotation={particleAttributes.cube[id].rotation}
      visible={particleAttributes.cube[id].isVisible}
    >
      <boxGeometry
        args={[
          particleAttributes.cube[id].size,
          particleAttributes.cube[id].size,
          particleAttributes.cube[id].size,
        ]}
      />
      <meshStandardMaterial />
    </mesh>
  );
}
