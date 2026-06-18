import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BoxGeometry, MeshStandardMaterial, Vector3 } from "three";
import { boids, cube } from "../const/particleAttributes";
import {
  getAlignmentDirection,
  getCohesionDirection,
  getCubeSphereCohesionDirection,
  getCubeSPhereSeparationDirection,
  getSeparationDirection,
} from "../utils/boids";

export default function Cube({ id, particleAttributes, particleShape }) {
  const meshRef = useRef();
  const newDirection = new Vector3();

  useFrame((_, delta) => {
    meshRef.current.visible = particleAttributes.cube[id].isVisible;
    if (!meshRef.current || !particleAttributes.cube[id].isVisible) return;

    if (particleShape === "cone") {
      const radius = particleAttributes.cube[id].radius;
      const height = particleAttributes.cube[id].height;
      meshRef.current.scale.set(radius, radius, height);
    } else {
      const size = particleAttributes.cube[id].size;
      meshRef.current.scale.set(size, size, size);
    }

    const alignmentDirection = getAlignmentDirection(
      boids.particleAlignmentRadius,
      id,
      particleAttributes.cube,
    );
    const cohesionDirection = getCohesionDirection(
      boids.particleCohesionRadius,
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
    newDirection
      .sub(alignmentDirection)
      .multiplyScalar(boids.particleAlignmentStrength);
    newDirection.addScaledVector(
      cohesionDirection,
      boids.particleCohesionStrength,
    );
    newDirection
      .addScaledVector(separationDirection, boids.particleSeparationStrength)
      .normalize();
    newDirection.addScaledVector(
      cubeSphereCohesionDirection,
      boids.sphereCohesionStrength,
    );
    newDirection.addScaledVector(
      cubeSphereSeparationDirection,
      boids.sphereSeparationStrength,
    );

    const speed = cube.speed;

    particleAttributes.cube[id].position.addScaledVector(
      newDirection,
      speed * delta,
    );
    meshRef.current.position.copy(particleAttributes.cube[id].position);
    particleAttributes.cube[id].direction.copy(newDirection);

    if (cube.rotation === "follow direction") {
      const targetPosition = meshRef.current.position.clone().add(newDirection);
      meshRef.current.lookAt(targetPosition);
    } else if (cube.rotation === "follow sphere") {
      const targetPosition = particleAttributes.sphere[0].position;
      meshRef.current.lookAt(targetPosition);
    } else if (cube.rotation === "rotate naturally") {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.z += delta;
    }

    if (particleShape === "point") {
      meshRef.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={particleAttributes.cube[id].position}
      rotation={particleAttributes.cube[id].rotation}
      visible={particleAttributes.cube[id].isVisible}
    >
      {particleShape === "cube" && (
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "cone" && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "dodecahedron" && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <dodecahedronGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "octahedron" && (
        <mesh>
          <octahedronGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "torus" && (
        <mesh>
          <torusGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "circle" && (
        <mesh>
          <circleGeometry />
          <meshStandardMaterial />
        </mesh>
      )}

      {particleShape === "point" && (
        <mesh>
          <circleGeometry />
          <meshStandardMaterial />
        </mesh>
      )}
    </mesh>
  );
}
