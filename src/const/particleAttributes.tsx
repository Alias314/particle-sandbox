export const cube = {
  shape: "cube",
  minSize: 0.15,
  maxSize: 0.38,
  speed: 1,
  spawnPositionRange: 5,
  timeToLive: 4,
};

export const sphere = {
  size: 0.6,
};

export const boids = {
  particleAlignmentRadius: 5,
  particleAlignmentStrength: 1,
  particleSeparationRadius: 5,
  particleSeparationStrength: 1,
  sphereCohesionRadius: 10,
  sphereCohesionStrength: 1.5,
  sphereSeparationRadius: 10,
  sphereSeparationStrength: 1,
};

export const particleShapes = ["cube", "cone", "dodecahedron", "octahedron", "torus", "circle"];
