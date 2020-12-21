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
import cubeWorld from "./cube-world";
import audioAnalyser, { analyser, dataArray } from "./audio-analyser";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { ControlTypes } from "./constants";
import controls from "./controls";
import maze from "./maze";
import theater from "./theater";

type ThreeState = {
  container: HTMLElement | null;
  stats: Stats;
  gui: typeof GUI;
  group: THREE.Group;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  orbitControls: OrbitControls;
  pointerControls: PointerLockControls;
  controls: any;
  renderer: THREE.WebGLRenderer;
  animations: Array<Function>;
  controlObject: any;
};

export const threeState: ThreeState = {
  orbitControls: null,
  pointerControls: null,
  container: null,
  stats: Stats(),
  gui: new GUI(),
  scene: new THREE.Scene(),
  camera: null,
  controls: null,
  group: new THREE.Group(),
  renderer: new THREE.WebGLRenderer({ antialias: true }),
  animations: [],
  controlObject: null,
};

function setupScene(
  r: number = 800,
  controlType: ControlTypes = ControlTypes.ORBIT
) {
  threeState.container = document.getElementById("root");

  const aspect = window.innerWidth / window.innerHeight;

  threeState.camera = new THREE.PerspectiveCamera(105, aspect, 0.1, 4000);
  threeState.camera.position.z = 0.01;
  threeState.controlObject = controls(controlType);
  threeState.scene.add(threeState.group);
  threeState.renderer.setPixelRatio(window.devicePixelRatio);
  threeState.renderer.setSize(window.innerWidth, window.innerHeight);
  // threeState.renderer.outputEncoding = THREE.sRGBEncoding;
  threeState.container.appendChild(threeState.renderer.domElement);

  if (process.env.NODE_ENV === "development") {
    threeState.container.appendChild(threeState.stats.dom);
  } else {
    // dumb
    document.querySelector(".dg").remove();
  }

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    threeState.camera.aspect = window.innerWidth / window.innerHeight;
    threeState.camera.updateProjectionMatrix();
    threeState.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
// Make a transition handler?
export default function three() {
  setupScene(800, ControlTypes.ORBIT);
  switchGUI();
  // screen();
  // cubeWorld();
  theater();
  maze();
  audioAnalyser();
  // threeState.animations.push(screenAnimate);
  animate();
  function animate() {
    threeState.animations.map((animation) => animation());
    requestAnimationFrame(animate);
    threeState.stats.update();
    render();
  }

  function render() {
    const time = Date.now() * 0.001;
    if (threeState.controls === ControlTypes.ORBIT) {
      threeState.orbitControls.update();
    }
    // if (threeState.controls === ControlTypes.POINTER) {
    threeState.controlObject.update();
    // }
    threeState.renderer.render(threeState.scene, threeState.camera);
  }
}

const effectController: EffectController = {
  switch: false,
  controls: true,
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

  // naively say true is orbit
  gui.add(effectController, "controls").onChange(function (value: boolean) {
    threeState.controlObject.cleanUp();
    if (value) {
      threeState.controlObject.setupOrbit();
    } else {
      threeState.controlObject.setupPointer();
    }
  });
  gui.close();
}
