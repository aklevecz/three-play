import * as THREE from "three";
import { EffectController } from "./gui-controller";
import { threeState } from "./three";

var geometry, material: THREE.ShaderMaterial, mesh: THREE.Mesh;
const texturePath = "./textures";
const textureFiles = ["sticker.png", "smiler2.png", "sticker.png"].map((n) =>
  require(`${texturePath}/${n}`)
);
const textures = textureFiles.map((texture) =>
  new THREE.TextureLoader().load(texture)
);
export default function () {
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
        value: new THREE.TextureLoader().load(
          require("./textures/sticker.png")
        ),
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
  initScreenGUI(shatterController);
}
let time = 0;
export function screenAnimate() {
  const meshMaterial = mesh.material as THREE.ShaderMaterial;
  meshMaterial.uniforms.time.value = time;
  const wave = (1 + Math.sin(time * 0.1)) * 0.5;
  meshMaterial.uniforms.progress.value = wave;
  time += effectController.time as number;
}

function updateGUI(newController: GUIController, controllerName: string) {
  threeState.gui.removeFolder(screenFolder);
  screenFolder = threeState.gui.addFolder(controllerName);
  newController.forEach((controllObject: ControllerObject) =>
    screenFolder
      .add(
        controllObject.object,
        controllObject.name,
        controllObject.min,
        controllObject.max,
        controllObject.step
      )
      .onChange(function (value: string | number) {
        const meshMaterial = mesh.material as THREE.ShaderMaterial;
        meshMaterial.uniforms[controllObject.name].value = value;
      })
  );
  screenFolder.open();
}

// maybe cleans up the background or not
export function cleanupScreen() {
  threeState.gui.removeFolder(screenFolder);
  threeState.gui.removeFolder(switchFolder);
}

const effectController: EffectController = {
  progress: 0,
  intensity: 0,
  changeShader: "shatter",
  radius: 0.9,
  width: 0.35,
  time: 0.09,
};

type GUIController = Array<ControllerObject>;

type ControllerObject = {
  object: {
    [key: string]: number;
  };
  name: string;
  min: number;
  max: number;
  step: number;
};

var screenFolder: any;
var switchFolder: any;
const shatterController = [
  { object: { intensity: 0 }, name: "intensity", min: 0, max: 100, step: 0.1 },
];

const blobController = [
  { object: { radius: 0.9 }, name: "radius", min: 0, max: 2, step: 0.1 },
  { object: { width: 0.35 }, name: "width", min: 0, max: 10, step: 0.1 },
];

const swipeController = [
  { object: { width: 0.5 }, name: "width", min: 0, max: 10, step: 0.1 },
  { object: { scaleX: 40 }, name: "scaleX", min: 0.1, max: 60, step: 0.1 },
  { object: { scaleY: 40 }, name: "scaleY", min: 0.1, max: 60, step: 0.1 },
];

const upController = [
  { object: { width: 0.5 }, name: "width", min: 0, max: 10, step: 0.1 },
];

const rippleController = [
  { object: { width: 0.5 }, name: "width", min: 0, max: 10, step: 0.1 },
];

const disintegrateController = [
  { object: { intensity: 1 }, name: "intensity", min: 0, max: 5, step: 0.1 },
];

const splitController = [
  { object: { intensity: 1 }, name: "intensity", min: 0, max: 5, step: 0.1 },
];

export function initScreenGUI(
  controller = shatterController,
  folderName: string = "Laser"
) {
  const { gui } = threeState;
  const meshMaterial = mesh.material as THREE.ShaderMaterial;

  switchFolder = gui.addFolder("Switch");
  switchFolder
    .add(effectController, "changeShader", {
      Shatter: "shatter",
      Blob: "blob",
      Swipe: "swipe",
      Up: "up",
      Ripple: "ripple",
      Disintegrate: "disintegrate",
      Split: "split",
    })
    .onChange(function (value: string) {
      const view = views[value];
      updateGUI(view.controller, view.name);
      newShaderMaterial(view.shader);
    });
  switchFolder.add(effectController, "time", 0.001, 5, 0.001);
  switchFolder.open();

  screenFolder = gui.addFolder(folderName);
  screenFolder.open();
  screenFolder
    .add(effectController, "progress", 0, 1, 0.01)
    .onChange(function (value: number) {
      meshMaterial.uniforms.progress.value = value;
    });

  controller.forEach((controllerObject: ControllerObject) =>
    screenFolder
      .add(
        controllerObject.object,
        controllerObject.name,
        controllerObject.min,
        controllerObject.max,
        controllerObject.step
      )
      .onChange(function (value: number) {
        meshMaterial.uniforms[controllerObject.name].value = value;
      })
  );
}

type View = {
  name: string;
  shader: string;
  controller: GUIController;
};

type Views = {
  [key: string]: View;
};

const views: Views = {
  blob: {
    name: "Blob",
    shader: "blob-fragment",
    controller: blobController,
  },
  shatter: {
    name: "Shatter",
    shader: "trans-fragment",
    controller: shatterController,
  },
  swipe: {
    name: "Swipe",
    shader: "swipe-fragment",
    controller: swipeController,
  },
  up: {
    name: "Up",
    shader: "up-fragment",
    controller: upController,
  },
  ripple: {
    name: "Ripple",
    shader: "ripple-fragment",
    controller: rippleController,
  },
  disintegrate: {
    name: "Disintegrate",
    shader: "disintegrate-fragment",
    controller: disintegrateController,
  },
  split: {
    name: "Split",
    shader: "split-fragment",
    controller: splitController,
  },
};

const allUParams = {
  time: { value: 0 },
  radius: { value: 0.9 },
  width: { value: 0.35 },
  progress: { value: 0.0 },
  transition: { value: 40 },
  intensity: { value: 10.3 },
  scaleX: { value: 40 },
  scaleY: { value: 40 },
};

function newShaderMaterial(shader = "trans-fragment") {
  const newMaterial = new THREE.ShaderMaterial({
    uniforms: {
      ...allUParams,
      texture1: { value: textures[0] },
      texture2: { value: textures[1] },
      displacement: {
        value: new THREE.TextureLoader().load(require("./textures/smiler.jpg")),
      },
      resolution: { value: new THREE.Vector4() },
    },
    vertexShader: require("./shaders/trans-vertex.glsl"),
    fragmentShader: require(`./shaders/${shader}.glsl`),
    depthWrite: false,
    depthTest: false,
  });
  newMaterial.uniforms.resolution.value.x = window.innerWidth;
  newMaterial.uniforms.resolution.value.y = window.innerHeight;
  newMaterial.uniforms.resolution.value.z = 1;
  newMaterial.uniforms.resolution.value.w = 1;
  mesh.material = newMaterial;
}
