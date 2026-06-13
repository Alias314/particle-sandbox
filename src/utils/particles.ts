import { Euler, Vector3 } from "three";
import { cube } from "../const/particleAttributes";
import {
  getRandomDirection,
  getRandomPosition,
  getRandomRotation,
  getRandomNumFromRange,
} from "./math";
import { generation } from "@/const/particleGeneration";

export const generateParticlePool = (amountCube, amountSphere) => {
  const particles = { cube: [], sphere: [] };

  for (let i = 0; i < amountCube; i++) {
    particles.cube.push({
      id: i,
      size: 0,
      speed: cube.speed,
      position: new Vector3(10000, 0, 0),
      rotation: getRandomRotation(360),
      direction: getRandomDirection(360).normalize(),
      isVisible: false
    });
  }

  for (let i = 0; i < amountSphere; i++) {
    particles.sphere.push({
      id: i,
      position: new Vector3(0, 0, 0),
      rotation: new Euler(0, 0, 0),
      direction: getRandomDirection(360).normalize(),
    });
  }

  return particles;
};

export const generateParticles = (particleAttributes) => {
  for (let i = 0; i < particleAttributes.cube.length; i++) {
    if (i < generation.amountCube) {
      particleAttributes.cube[i].size = getRandomNumFromRange(cube.minSize, cube.maxSize);
      particleAttributes.cube[i].position = getRandomPosition(cube.spawnPositionRange);
      particleAttributes.cube[i].isVisible = true;
    } else {
      particleAttributes.cube[i].position = new Vector3(10000, 0, 0);
      particleAttributes.cube[i].isVisible = false;
    }
  }
};
