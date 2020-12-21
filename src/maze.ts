import * as THREE from "three";
import { threeState } from "./three";

export default function () {
  let floorGeometry: any = new THREE.PlaneBufferGeometry(2000, 2000, 100, 100);
  floorGeometry.rotateX(-Math.PI / 2);
  floorGeometry = floorGeometry.toNonIndexed();
  const floorMaterial = new THREE.MeshBasicMaterial({ color: "grey" });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.y = -10;
  threeState.scene.add(floor);
}
