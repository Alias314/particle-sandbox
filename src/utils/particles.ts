import { Euler, Vector3 } from "three";
import { cube } from "../const/particleAttributes";
import { getRandomDirection, getRandomPosition, getRandomRotation, getRandomSize } from "./math";

export const generateParticles = (amountCube, amountSphere) => {
  const particles = {cube: [], sphere: []};

  for (let i = 0; i < amountCube; i++) {
    particles.cube.push({
      id: i,
      size: getRandomSize(cube.minSize, cube.maxSize),
      speed: cube.speed,
      position: getRandomPosition(cube.initialPositionRange),
      rotation: getRandomRotation(360),
      direction: getRandomDirection(360).normalize()
    });
  }

  for (let i = 0; i < amountSphere; i++) {
    particles.sphere.push({
      id: i,
      position: new Vector3(0, 0, 0),
      rotation: new Euler(0, 0, 0),
      direction: getRandomDirection(360).normalize()
    });
  }

  return particles;
};
