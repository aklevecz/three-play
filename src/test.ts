import * as THREE from "three";
import { threeState } from "./three";
var mesh: any, geometry: any, material: any, shaderMaterial: any;
export default function () {
  const sphereTexture = new THREE.TextureLoader().load(
    require("./textures/eat-shit-texture.png")
  );
  // sphereTexture.repeat.set(6, 4);
  sphereTexture.wrapS = THREE.RepeatWrapping;
  sphereTexture.wrapT = THREE.RepeatWrapping;
  geometry = new THREE.SphereBufferGeometry(150, 150, 150);
  material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    // opacity: 0.3,
    // alphaTest: 0.5,
    // map: sphereTexture,
  });
  shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        value: 0.0,
      },
      sphereTexture: {
        value: sphereTexture,
      },
    },
    vertexShader: require("./shaders/perlin-vertex.glsl"),
    fragmentShader: require("./shaders/perlin-fragment.glsl"),
  });
  mesh = new THREE.Mesh(geometry, shaderMaterial);
  threeState.scene.add(mesh);
  //   threeState.scene.remove(mesh);
}

export function testAnimate() {
  const time = Date.now() * 0.001;
  shaderMaterial.uniforms.time.value += 0.002;

  // mesh.rotation.y += (1 + Math.sin(time * 0.000001)) * 0.5;
}

export function cleanupTest() {
  threeState.scene.remove(mesh);
}
