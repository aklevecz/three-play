import * as THREE from "three";
import { CircleBufferGeometry } from "three";
import { switchGUI, threeState } from "./three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";

type ParticlesState = {
  particlesData: Array<{ velocity: THREE.Vector3; numConnections: number }>;
  positions: Float32Array;
  colors: Float32Array;
  particles: THREE.BufferGeometry;
  pointCloud: THREE.Points;
  particlePositions: Float32Array;
  linesMesh: THREE.Line;
  group: THREE.Group;
  uuids: Array<string>;
  uniforms: { [key: string]: any };
  sizes: Array<number>;
};

const maxParticleCount = 1000;
let particleCount = 200;
const r = 800;
const rHalf = r / 2;

export const particlesState: ParticlesState = {
  particlesData: [],
  positions: null,
  colors: null,
  particles: new THREE.BufferGeometry(),
  pointCloud: new THREE.Points(),
  particlePositions: null,
  linesMesh: null,
  group: new THREE.Group(),
  uuids: [],
  uniforms: {},
  sizes: [],
};
// var uniforms;
function createPointCloud() {
  initGUI();
  const segments = maxParticleCount * maxParticleCount;

  particlesState.positions = new Float32Array(segments * 3);
  particlesState.colors = new Float32Array(segments * 3);

  const stickerTexture = new THREE.TextureLoader().load(
    require("./textures/eat-shit-texture.png")
  );
  particlesState.uniforms = {
    pointTexture: {
      value: stickerTexture,
    },
    u_color: {
      value: new THREE.Vector3(1.0, 0.0, 0.0),
    },
  };
  stickerTexture.flipY = false;
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: particlesState.uniforms,
    vertexShader: require("./shaders/vertex.glsl"),
    fragmentShader: require("./shaders/fragment.glsl"),
    // blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    alphaTest: 0,
    opacity: 0,
    vertexColors: true,
  });

  const pMaterial = new THREE.PointsMaterial({
    vertexColors: true,
    color: 0xffffff,
    size: 30,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: false,
  });

  const circleShaderMaterial = new THREE.ShaderMaterial({
    fragmentShader: require("./shaders/circle-fragment.glsl"),
    vertexShader: require("./shaders/circle-vertex.glsl"),
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    // transparent: true,
    // opacity: 0.5,
    // alphaTest: 0.5,
  });

  particlesState.particlePositions = new Float32Array(maxParticleCount * 3);
  particlesState.sizes = [];
  for (let i = 0; i < maxParticleCount; i++) {
    const x = Math.random() * r - r / 2;
    const y = Math.random() * r - r / 2;
    const z = Math.random() * r - r / 2;

    particlesState.particlePositions[i * 3] = x;
    particlesState.particlePositions[i * 3 + 1] = y;
    particlesState.particlePositions[i * 3 + 2] = z;

    particlesState.colors[i * 3] = Math.random();
    particlesState.colors[i * 3 + 1] = Math.random();
    particlesState.colors[i * 3 + 2] = Math.random();

    particlesState.particlesData.push({
      velocity: new THREE.Vector3(
        -1 + Math.random() * 2,
        -1 + Math.random() * 2,
        -1 + Math.random() * 2
      ),
      numConnections: 0,
    });
    particlesState.sizes.push(Math.random() * 50);
  }
  particlesState.particles.setDrawRange(0, particleCount);
  particlesState.particles.setAttribute(
    "position",
    new THREE.BufferAttribute(particlesState.particlePositions, 3).setUsage(
      THREE.DynamicDrawUsage
    )
  );
  particlesState.particles.setAttribute(
    "color",
    new THREE.BufferAttribute(particlesState.colors, 3).setUsage(
      THREE.DynamicDrawUsage
    )
  );
  particlesState.particles.setAttribute(
    "size",
    new THREE.Float32BufferAttribute(particlesState.sizes, 1).setUsage(
      THREE.DynamicDrawUsage
    )
  );
  particlesState.pointCloud = new THREE.Points(
    particlesState.particles,
    circleShaderMaterial
  );

  particlesState.group.add(particlesState.pointCloud);
  particlesState.uuids.push(particlesState.pointCloud.uuid);
}

// LINES
function createLines() {
  const geometry: THREE.BufferGeometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlesState.positions, 3).setUsage(
      THREE.DynamicDrawUsage
    )
  );
  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(particlesState.colors, 3).setUsage(
      THREE.DynamicDrawUsage
    )
  );

  geometry.computeBoundingSphere();
  geometry.setDrawRange(0, 0);

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    linewidth: 4,
  });

  particlesState.linesMesh = new THREE.LineSegments(geometry, material);
  particlesState.group.add(particlesState.linesMesh);
  particlesState.uuids.push(particlesState.linesMesh.uuid);
  threeState.group.add(particlesState.group);
}

export function particleAnimate() {
  let vertexpos = 0;
  let colorpos = 0;
  let sizepos = 0;
  let numConnected = 0;
  const time = Date.now() * 0.01;
  const amp = 20;
  const wave = 0.5 * (amp + Math.sin(time * 0.1) * amp);

  const pointCloudGeometry = particlesState.pointCloud
    .geometry as THREE.BufferGeometry;
  // disconnect at every draw
  for (let i = 0; i < particleCount; i++)
    particlesState.particlesData[i].numConnections = 0;

  for (let i = 0; i < particleCount; i++) {
    // get the particle
    const particleData = particlesState.particlesData[i];

    particlesState.particlePositions[i * 3] += particleData.velocity.x;
    particlesState.particlePositions[i * 3 + 1] += particleData.velocity.y;
    particlesState.particlePositions[i * 3 + 2] += particleData.velocity.z;

    if (
      particlesState.particlePositions[i * 3 + 1] < -rHalf ||
      particlesState.particlePositions[i * 3 + 1] > rHalf
    )
      particleData.velocity.y = -particleData.velocity.y;

    if (
      particlesState.particlePositions[i * 3] < -rHalf ||
      particlesState.particlePositions[i * 3] > rHalf
    )
      particleData.velocity.x = -particleData.velocity.x;

    if (
      particlesState.particlePositions[i * 3 + 2] < -rHalf ||
      particlesState.particlePositions[i * 3 + 2] > rHalf
    )
      particleData.velocity.z = -particleData.velocity.z;

    if (
      effectController.limitConnections &&
      particleData.numConnections >= effectController.maxConnections
    )
      continue;

    // Check camera closeness
    const { x: camX, y: camY, z: camZ } = threeState.camera.position;
    const particleX = particlesState.particlePositions[i * 3];
    const particleY = particlesState.particlePositions[i * 3 + 1];
    const particleZ = particlesState.particlePositions[i * 3 + 2];

    const cdx = particleX - camX;
    const cdy = particleY - camY;
    const cdz = particleZ - camZ;
    const camDist = Math.sqrt(cdx * cdx + cdy * cdy + cdz * cdz);
    if (camDist < 100) {
      const sizes = pointCloudGeometry.attributes.size.array as Array<number>;
      // sizes[i] = 500;
    }
    const sizes = pointCloudGeometry.attributes.size.array as Array<number>;
    sizes[i] = wave + i * 0.1;
    // Check collision
    for (let j = i + 1; j < particleCount; j++) {
      const particleDataB = particlesState.particlesData[j];
      if (
        effectController.limitConnections &&
        particleDataB.numConnections >= effectController.maxConnections
      )
        continue;

      const dx =
        particlesState.particlePositions[i * 3] -
        particlesState.particlePositions[j * 3];
      const dy =
        particlesState.particlePositions[i * 3 + 1] -
        particlesState.particlePositions[j * 3 + 1];
      const dz =
        particlesState.particlePositions[i * 3 + 2] -
        particlesState.particlePositions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < effectController.minDistance) {
        particleData.numConnections++;
        particleDataB.numConnections++;

        const alpha = 1.0 - dist / effectController.minDistance;
        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[i * 3];
        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[i * 3 + 1];
        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[i * 3 + 2];

        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[j * 3];
        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[j * 3 + 1];
        particlesState.positions[vertexpos++] =
          particlesState.particlePositions[j * 3 + 2];

        particlesState.colors[colorpos++] = alpha;
        particlesState.colors[colorpos++] = alpha;
        particlesState.colors[colorpos++] = alpha;

        particlesState.colors[colorpos++] = alpha;
        particlesState.colors[colorpos++] = alpha;
        particlesState.colors[colorpos++] = alpha;

        numConnected++;
      }
    }
  }
  const linesMeshGeometry = particlesState.linesMesh
    .geometry as THREE.BufferGeometry;
  linesMeshGeometry.setDrawRange(0, numConnected * 2);
  linesMeshGeometry.attributes.position.needsUpdate = true;
  linesMeshGeometry.attributes.color.needsUpdate = true;

  // const pointCloudGeometry = particlesState.pointCloud
  //   .geometry as THREE.BufferGeometry;
  pointCloudGeometry.attributes.position.needsUpdate = true;
  pointCloudGeometry.attributes.size.needsUpdate = true;
  // pointCloudGeometry.attributes.color.needsUpdate = true;
}

const effectController: any = {
  showDots: true,
  showLines: true,
  minDistance: 150,
  limitConnections: false,
  maxConnections: 20,
  particleCount: 500,
  resolution: false,
};
export function initGUI() {
  const { gui } = threeState;
  // gui.addFolder("Particle");

  gui.add(effectController, "showDots").onChange(function (value: boolean) {
    particlesState.pointCloud.visible = value;
  });

  gui.add(effectController, "showLines").onChange(function (value: boolean) {
    particlesState.linesMesh.visible = value;
  });

  gui.add(effectController, "minDistance", 10, 300);
  gui.add(effectController, "maxConnections", 0, 30, 1);
  gui.add(effectController, "limitConnections");
  gui
    .add(effectController, "particleCount", 0, maxParticleCount, 1)
    .onChange(function (value: string) {
      particleCount = parseInt(value);
      particlesState.particles.setDrawRange(0, particleCount);
    });
}

export function cleanUpParticles() {
  // CACHED IF I LEAVE THEM????
  //   for (const uuid of particlesState.uuids) {
  //     const object = particlesState.group.getObjectByProperty(
  //       "uuid",
  //       uuid
  //     ) as any;
  //     object.geometry.dispose();
  //     object.material.dispose();
  //   }
  threeState.gui.destroy();
  threeState.gui = new GUI();
  switchGUI();
  particlesState.group.remove(...particlesState.group.children);
}

export default function () {
  createPointCloud();
  createLines();
}
