import { Vector3 } from "three"

export const getAlignmentDirection = (radius, sourceParticleId, particleAttributes) => {
  const direction = new Vector3();
  let amountNearbyParticles = 0;

  for (const targetParticleId in particleAttributes) {
    if (sourceParticleId === targetParticleId) continue;
    const sourceParticle = particleAttributes[sourceParticleId];
    const targetParticle = particleAttributes[targetParticleId];
    const distance = sourceParticle.position.distanceTo(targetParticle.position);

    if (distance <= radius) {
      direction.add(particleAttributes[targetParticleId].direction);
      amountNearbyParticles++;
    }
  }

  if (amountNearbyParticles > 0) direction.divideScalar(amountNearbyParticles);
  return direction;
}

export const getCohesionDirection = (radius, sourceParticleId, particleAttributes) => {
  const direction = new Vector3();
  let amountNearbyParticles = 0;

  for (const targetParticleId in particleAttributes) {
    if (sourceParticleId === targetParticleId) continue;
    const sourceParticle = particleAttributes[sourceParticleId];
    const targetParticle = particleAttributes[targetParticleId];
    const distance = sourceParticle.position.distanceTo(targetParticle.position);

    if (distance <= radius) {
      direction.add(particleAttributes[targetParticleId].position);
      amountNearbyParticles++;
    }
  }

  if (amountNearbyParticles > 0) direction.divideScalar(amountNearbyParticles);
  return direction;
}

export const getSeparationDirection = (radius, sourceParticleId, particleAttributes) => {
  const direction = new Vector3();
  const difference = new Vector3();
  let amountNearbyParticles = 0;

  for (const targetParticleId in particleAttributes) {
    if (sourceParticleId === targetParticleId) continue;
    const sourceParticle = particleAttributes[sourceParticleId];
    const targetParticle = particleAttributes[targetParticleId];
    let distance = sourceParticle.position.distanceTo(targetParticle.position);

    if (distance <= radius) {
      difference.subVectors(sourceParticle.position, targetParticle.position).normalize();
      distance = Math.max(distance, 0.01);
      difference.divideScalar(distance);
      direction.add(difference);
      amountNearbyParticles++;
    }
  }

  if (amountNearbyParticles > 0) direction.divideScalar(amountNearbyParticles);
  return direction;
}

export const getCubeSphereCohesionDirection = (radius, sourceParticleId, cubeParticleAttributes, sphereParticleAttributes) => {
  const direction = new Vector3();
  let amountNearbyParticles = 0;
  
  const sourceParticle = cubeParticleAttributes[sourceParticleId];  
  for (const targetParticleId in sphereParticleAttributes) {
    const targetParticle = sphereParticleAttributes[targetParticleId];
    const distance = sourceParticle.position.distanceTo(targetParticle.position);

    if (distance <= radius) {
      direction.add(targetParticle.position);
      amountNearbyParticles++;
    }
  }

  if (amountNearbyParticles > 0) {
    direction.divideScalar(amountNearbyParticles);
    direction.sub(sourceParticle.position).normalize(); 
  }

  return direction;
}

export const getCubeSPhereSeparationDirection = (radius, sourceParticleId, cubeParticleAttributes, sphereParticleAttributes) => {
  const direction = new Vector3();
  const diff = new Vector3();
  let amountNearbyParticles = 0;

  const sourceParticle = cubeParticleAttributes[sourceParticleId];
  for (const targetParticleId in sphereParticleAttributes) {
    const targetParticle = sphereParticleAttributes[targetParticleId];
    let distance = sourceParticle.position.distanceTo(targetParticle.position);

    if (distance <= radius) {
      diff.subVectors(sourceParticle.position, targetParticle.position);
      diff.normalize();
      distance = Math.max(distance, 0.01);
      direction.add(diff);
      amountNearbyParticles++;
    }
  }

  if (amountNearbyParticles > 0) direction.divideScalar(amountNearbyParticles);
  return direction;
}