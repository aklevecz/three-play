import * as THREE from "three";
import { Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { lerp } from "./animate";
import { ControlTypes } from "./constants";
import three, { threeState } from "./three";

export default function (type: ControlTypes) {
  let moveForward: boolean = false,
    moveLeft: boolean = false,
    moveBackward: boolean = false,
    moveRight: boolean = false;
  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3();

  const pointerLock = () => threeState.pointerControls.lock();
  const setupPointer = () => {
    threeState.controls = ControlTypes.POINTER;
    animateCameraMove({ y: 200, z: -200 });
    threeState.pointerControls = new PointerLockControls(
      threeState.camera,
      document.body
    );
    document.body.addEventListener("click", pointerLock, false);
    threeState.scene.add(threeState.pointerControls.getObject());
  };
  const setupOrbit = () => {
    threeState.controls = ControlTypes.ORBIT;
    threeState.orbitControls = new OrbitControls(
      threeState.camera,
      threeState.container
    );
    // threeState.orbitControls.autoRotate = true;
    threeState.orbitControls.autoRotateSpeed = 2;
    // threeState.orbitControls.enableZoom = false;
    // threeState.controls.minDistance = 1000;
    threeState.orbitControls.maxDistance = 3000;
  };
  switch (type) {
    case ControlTypes.POINTER:
      setupPointer();
      break;
    case ControlTypes.ORBIT:
      setupOrbit();
      break;
  }

  function onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "w":
        moveForward = true;
        break;
      case "a":
        moveLeft = true;
        break;
      case "s":
        moveBackward = true;
        break;
      case "d":
        moveRight = true;
        break;
      case " ":
        if (canJump) velocity.y += 350;
        canJump = false;
        break;
    }
  }
  function onKeyUp(e: KeyboardEvent) {
    switch (e.key) {
      case "w":
        moveForward = false;
        break;
      case "a":
        moveLeft = false;
        break;
      case "s":
        moveBackward = false;
        break;
      case "d":
        moveRight = false;
        break;
    }
  }

  document.addEventListener("keydown", onKeyDown, false);
  document.addEventListener("keyup", onKeyUp, false);

  const bbox = new THREE.Box3();
  // const boxGeo = new THREE.BoxBufferGeometry(100, 100, 5);
  const boxGeo = new THREE.BoxBufferGeometry(0, 0, 0);
  const boxMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const box = new Mesh(boxGeo, boxMat);
  box.geometry.computeBoundingBox();
  box.material.side = THREE.DoubleSide;
  box.position.z = 20;
  box.position.y = 5;
  threeState.scene.add(box);
  const objects = [box];
  let canJump = true;
  let prevTime: number;
  const update = function () {
    if (threeState.controls === ControlTypes.ORBIT) {
    }
    if (threeState.controls === ControlTypes.POINTER) {
      const time = performance.now();
      if (threeState.pointerControls.isLocked) {
        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        const delta = (time - prevTime) / 1000;
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        // find intersections
        const controlObject = threeState.pointerControls.getObject();
        const oldPosition = new THREE.Vector3();
        oldPosition.copy(controlObject.position);

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        if (moveForward || moveBackward)
          velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        threeState.pointerControls.moveRight(-velocity.x * delta);
        threeState.pointerControls.moveForward(-velocity.z * delta);

        const sphere = new THREE.Sphere(controlObject.position, 2);
        bbox.copy(box.geometry.boundingBox).applyMatrix4(box.matrixWorld);
        const intersections = objects.filter((o) => sphere.intersectsBox(bbox));

        if (intersections.length > 0) controlObject.position.copy(oldPosition);
        threeState.pointerControls.getObject().position.y += velocity.y * delta; // new behavior
        if (threeState.pointerControls.getObject().position.y < 10) {
          velocity.y = 0;
          threeState.pointerControls.getObject().position.y = 10;

          canJump = true;
        }
      }
      prevTime = time;
    }
  };

  function animateCameraMove(to: { [key: string]: number }) {
    let time = 0;
    const cameraStart = threeState.camera.position;
    threeState.camera.lookAt(new THREE.Vector3(0, -20, 20));
    let frame: number;
    function animate() {
      const progress = time;
      const nextY = lerp(progress, cameraStart.y, to.y);
      const nextZ = lerp(progress, cameraStart.z, to.z);
      threeState.camera.position.set(0, nextY, nextZ);
      console.log(progress);
      if (progress >= 1) {
        return cancelAnimationFrame(frame);
      }
      time += 0.1;
      frame = requestAnimationFrame(animate);
    }
    animate();
  }

  const cleanUp = () => {
    if (threeState.controls === ControlTypes.POINTER) {
      document.body.removeEventListener("click", pointerLock, false);
      threeState.scene.remove(threeState.pointerControls.getObject());
    }
  };
  return { cleanUp, update, setupOrbit, setupPointer };
}
