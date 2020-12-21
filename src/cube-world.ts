import * as THREE from "three";
import { threeState } from "./three";
const sunTempleStripe = require("./textures/sun_temple_stripe.jpg");
import { Raycaster } from "three";
import { lerp } from "./animate";

export const materials: Array<any> = [];
export let skyBox: any;
export default function () {
  const textures = getTexturesFromAtlasFile(sunTempleStripe, 6);

  for (let i = 0; i < 6; i++) {
    materials.push(
      new THREE.ShaderMaterial({
        uniforms: {
          tex: { value: textures[i] },
          colored: { value: false },
          progress: { value: 0.0 },
        },
        vertexShader: require("./shaders/cube-vertex.glsl"),
        fragmentShader: require("./shaders/cube-fragment.glsl"),
      })
    );
  }

  function lightup() {
    let time = 0;
    let frame: number;
    function animate() {
      const progress = lerp(time, 0, 1);
      time += 0.01;
      materials.map((m) => {
        m.uniforms.progress.value = progress;
      });
      lightMat.opacity = 1 - progress;
      if (progress <= 1) {
        frame = requestAnimationFrame(animate);
      } else {
        interactGroup.remove(lightMesh);
        lightMesh.material.dispose();
        lightMesh.geometry.dispose();
        cancelAnimationFrame(frame);
      }
      return progress;
    }
    animate();
  }

  skyBox = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), materials);
  skyBox.geometry.scale(1, 1, -1);
  threeState.scene.add(skyBox);

  const interactGroup = new THREE.Group();
  const lightGeo = new THREE.SphereGeometry(0.11, 20, 20);
  const lightMat = new THREE.MeshPhongMaterial({
    color: "red",
    transparent: true,
  });
  const lightMesh = new THREE.Mesh(lightGeo, lightMat);
  lightMesh.position.z = 0.1;
  lightMesh.position.y = 0.6;
  interactGroup.add(lightMesh);
  threeState.scene.add(interactGroup);

  const pointLight = new THREE.PointLight(0xffffff, 10);
  pointLight.position.set(0, 0, 0);
  threeState.scene.add(pointLight);

  const mouse = new THREE.Vector2();
  const ray = new Raycaster();

  document
    .querySelector("canvas")
    .addEventListener("touchstart", checkClick, true);
  document
    .querySelector("canvas")
    .addEventListener("mousedown", checkClick, true);

  function checkClick(e: MouseEvent | TouchEvent) {
    mouseVector(e);
    ray.setFromCamera(mouse, threeState.camera);
    const intersections = ray.intersectObjects(interactGroup.children);
    if (intersections.length > 0) {
      lightup();
    }
  }

  function mouseVector(e: MouseEvent | TouchEvent) {
    const coords: { [key: string]: number } = { x: 0, y: 0 };
    if (e instanceof TouchEvent) {
      coords.x = e.touches[0].clientX;
      coords.y = e.touches[0].clientY;
    } else {
      coords.x = e.clientX;
      coords.y = e.clientY;
    }
    mouse.x = (coords.x / window.innerWidth) * 2 - 1;
    mouse.y = -(coords.y / window.innerHeight) * 2 + 1;
  }

  // function animate() {
  //   ray.setFromCamera(mouse, threeState.camera);
  //   const intersections = ray.intersectObject(lightMesh);
  //   if (intersections.length > 0) {
  //     ((intersections[0].object as THREE.Mesh)
  //       .material as THREE.MeshBasicMaterial).color.set(0xff0000);
  //   }
  //   requestAnimationFrame(animate);
  // }
  // animate();
}

function getTexturesFromAtlasFile(
  atlasImageUrl: string,
  tilesNum: number
): Array<THREE.Texture> {
  const textures: Array<THREE.Texture> = [];

  for (let i = 0; i < tilesNum; i++) {
    textures[i] = new THREE.Texture();
  }

  const imageObj = new Image();

  imageObj.onload = function () {
    let canvas, context;
    const tileWidth = imageObj.height;
    for (let i = 0; i < textures.length; i++) {
      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
      canvas.height = tileWidth;
      canvas.width = tileWidth;
      context.drawImage(
        imageObj,
        tileWidth * i,
        0,
        tileWidth,
        tileWidth,
        0,
        0,
        tileWidth,
        tileWidth
      );
      textures[i].image = canvas;
      textures[i].needsUpdate = true;
    }
  };
  imageObj.src = atlasImageUrl;
  return textures;
}
