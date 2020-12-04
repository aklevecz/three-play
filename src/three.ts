import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import particleCloud, {
  cleanUpParticles,
  initGUI,
  particleAnimate,
} from "./particle-cloud";
import test, { cleanupTest, testAnimate } from "./test";
import screen, { cleanupScreen, initScreenGUI, screenAnimate } from "./screen";
// @ts-ignore
type ThreeState = {
  container: HTMLElement | null;
  stats: any;
  gui: any;
  group: THREE.Group;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
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
function setupScene(useHelper = false, r = 800, testingRes = false) {
  threeState.container = document.getElementById("root");

  const aspect = window.innerWidth / window.innerHeight;

  threeState.camera = new THREE.PerspectiveCamera(45, aspect, 1, 4000);
  // threeState.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  threeState.camera.position.z = 750;
  threeState.controls = new OrbitControls(
    threeState.camera,
    threeState.container
  );
  // threeState.controls.autoRotate = true;
  threeState.controls.autoRotateSpeed = 2;
  // threeState.controls.minDistance = 1000;
  threeState.controls.maxDistance = 3000;
  threeState.scene.add(threeState.group);
  if (!testingRes) {
    threeState.renderer.setPixelRatio(window.devicePixelRatio);
  } else {
    threeState.renderer.setPixelRatio(0.7);
  }
  threeState.renderer.setSize(window.innerWidth, window.innerHeight);
  // threeState.renderer.setSize(350, 700);
  threeState.renderer.outputEncoding = THREE.sRGBEncoding;
  threeState.container.appendChild(threeState.renderer.domElement);
  // threeState.container.appendChild(threeState.stats.dom);

  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    // threeState.camera.aspect = window.innerWidth / window.innerHeight;
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
    // threeState.group.rotation.y = time * 0.1;
    threeState.controls.update();
    threeState.renderer.render(threeState.scene, threeState.camera);
  }
}

const effectController: any = {
  switch: false,
};

export function switchGUI() {
  const { gui } = threeState;

  gui.add(effectController, "switch").onChange(function (value: boolean) {
    if (value) {
      cleanupScreen();

      particleCloud();
      test();
      threeState.animations = [testAnimate, particleAnimate];
    } else {
      cleanUpParticles();
      cleanupTest();

      threeState.animations = [screenAnimate];
      initScreenGUI();
    }
  });
}
