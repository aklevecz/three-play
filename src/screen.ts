import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { switchGUI, threeState } from "./three";

var geometry, material: THREE.ShaderMaterial, mesh;
const texturePath = "./textures";
const textureFiles = [1, 2, 3].map((n) => require(`${texturePath}/dj${n}.png`));
export default function () {
  const textures = textureFiles.map((texture) =>
    new THREE.TextureLoader().load(texture)
  );
  geometry = new THREE.PlaneGeometry(2, 2);
  material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      progress: { value: 0.0 },
      transition: { value: 40 },
      intensity: { value: 10.3 },
      texture1: { value: textures[0] },
      texture2: { value: textures[1] },
      displacement: {
        value: new THREE.TextureLoader().load(require("./textures/smiler.jpg")),
      },
      resolution: { value: new THREE.Vector4() },
    },
    vertexShader: require("./shaders/trans-vertex.glsl"),
    fragmentShader: require("./shaders/trans-fragment.glsl"),
    depthWrite: false,
    depthTest: false,
  });
  material.uniforms.resolution.value.x = window.innerWidth;
  material.uniforms.resolution.value.y = window.innerHeight;
  material.uniforms.resolution.value.z = 1;
  material.uniforms.resolution.value.w = 1;
  mesh = new THREE.Mesh(geometry, material);
  threeState.scene.add(mesh);
  initScreenGUI();
}
let time = 0;
export function screenAnimate() {
  material.uniforms.time.value = time;
  const wave = (1 + Math.sin(time * 0.1)) * 0.5;
  //   console.log(wave);
  material.uniforms.progress.value = wave;
  time += 0.05;

  // Object.keys(this.uniforms).forEach((item)=> {
  //   this.material.uniforms[item].value = this.settings[item];
  // });
}

export function cleanupScreen() {
  threeState.gui.destroy();
  threeState.gui = new GUI();
  switchGUI();
}

const effectController: any = {
  progress: 0,
  intensity: 0,
};

export function initScreenGUI() {
  const { gui } = threeState;

  gui
    .add(effectController, "progress", 0, 1, 0.01)
    .onChange(function (value: number) {
      material.uniforms.progress.value = value;
    });

  gui
    .add(effectController, "intensity", 0, 100, 0.1)
    .onChange(function (value: number) {
      material.uniforms.intensity.value = value;
    });
}
