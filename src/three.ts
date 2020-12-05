import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import particleCloud, {
  cleanUpParticles,
  particleAnimate,
} from "./particle-cloud";
import orb, { cleanupOrb, orbAnimate } from "./orb";
import screen, { cleanupScreen, initScreenGUI, screenAnimate } from "./screen";
import { EffectController } from "./gui-controller";
type ThreeState = {
  container: HTMLElement | null;
  stats: Stats;
  gui: typeof GUI;
  group: THREE.Group;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls | null;
  renderer: THREE.WebGLRenderer;
  animations: Array<Function>;
};

export const threeState: ThreeState = {
  container: null,
  stats: Stats(),
  gui: new GUI(),
  scene: new THREE.Scene(),
  camera: null,
  controls: null,
  group: new THREE.Group(),
  renderer: new THREE.WebGLRenderer({ antialias: true }),
  animations: [],
};
function setupScene(useHelper = false, r = 800) {
  threeState.container = document.getElementById("root");

  const aspect = window.innerWidth / window.innerHeight;

  threeState.camera = new THREE.PerspectiveCamera(45, aspect, 1, 4000);
  threeState.camera.position.z = 750;
  threeState.controls = new OrbitControls(
    threeState.camera,
    threeState.container
  );
  threeState.controls.autoRotate = true;
  threeState.controls.autoRotateSpeed = 2;
  // threeState.controls.minDistance = 1000;
  threeState.controls.maxDistance = 3000;
  threeState.scene.add(threeState.group);
  threeState.renderer.setPixelRatio(window.devicePixelRatio);
  threeState.renderer.setSize(window.innerWidth, window.innerHeight);
  threeState.renderer.outputEncoding = THREE.sRGBEncoding;
  threeState.container.appendChild(threeState.renderer.domElement);
  threeState.container.appendChild(threeState.stats.dom);

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    threeState.camera.aspect = window.innerWidth / window.innerHeight;
    threeState.camera.updateProjectionMatrix();
    threeState.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  if (useHelper) {
    const helperGeometry = new THREE.BoxBufferGeometry(r, r, r);
    const helperMaterial = new THREE.MeshBasicMaterial();
    helperMaterial.blending = THREE.AdditiveBlending;
    helperMaterial.color.setHex(0xff0000);
    helperMaterial.transparent = true;
    const helper = new THREE.BoxHelper(
      new THREE.Mesh(helperGeometry, helperMaterial)
    );
    threeState.group.add(helper);
  }
}
// Make a transition handler?
export default function three() {
  setupScene(false, 800);
  switchGUI();
  screen();
  threeState.animations.push(screenAnimate);
  animate();
  function animate() {
    threeState.animations.map((animation) => animation());
    requestAnimationFrame(animate);
    threeState.stats.update();
    render();
  }

  function render() {
    const time = Date.now() * 0.001;
    threeState.controls.update();
    threeState.renderer.render(threeState.scene, threeState.camera);
  }
}

const effectController: EffectController = {
  switch: false,
};

export function switchGUI() {
  const { gui } = threeState;

  // Transition reducer once this needs more complexity?
  gui.add(effectController, "switch").onChange(function (value: boolean) {
    if (value) {
      cleanupScreen();
      particleCloud();
      orb();
      threeState.animations = [orbAnimate, particleAnimate];
    } else {
      cleanUpParticles();
      cleanupOrb();
      threeState.animations = [screenAnimate];
      initScreenGUI();
    }
  });
}
