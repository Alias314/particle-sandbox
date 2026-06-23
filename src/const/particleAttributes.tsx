export const cube = {
  shape: "dodecahedron",
  rotation: "follow direction",
  minRadius: 0.02,
  maxRadius: 0.02,
  minHeight: 0.25,
  maxHeight: 0.25,
  minSize: 0.02,
  maxSize: 0.14,
  speed: 2,
  spawnPositionRange: 5,
};

export const sphere = {
  size: 0.65,
  speed: 1,
  radius: 1,
  movement: "follow cursor",
};

export const boids = {
  particleAlignmentRadius: 5,
  particleAlignmentStrength: 1,
  particleCohesionRadius: 1.5,
  particleCohesionStrength: 0,
  particleSeparationRadius: 5,
  particleSeparationStrength: 1,
  sphereCohesionRadius: 10,
  sphereCohesionStrength: 1.5,
  sphereSeparationRadius: 10,
  sphereSeparationStrength: 1,
};

export const defaultSceneSettings = {
  displayStars: false,
  displayGrid: false,
  displayBloom: true,
  enablePointLight: true,
  pointLightIntensity: 6,
  enableAmbientLight: false,
  ambientLightIntensity: 2
}

export const particleShapes = [
  "cube",
  "cone",
  "dodecahedron",
  "octahedron",
  "torus",
  "circle",
  "point"
];

export const particleRotations = [
  "follow direction",
  "follow sphere",
  "rotate naturally",
  "none",
];

export const sphereMovements = [
  "follow cursor",
  "circle",
  "figure 8",
  "figure 8 (horizontal)",
  "none",
];
