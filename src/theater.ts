import * as THREE from "three";
import { lerp } from "./animate";
import { threeState } from "./three";
import "./styles/css/theater.css";
const videoFile = require("./textures/godtree-2000.mp4");
const imgFile = require("./textures/room.jpg");
const streamFile = "http://192.168.0.164:5000/video2";
export default function () {
  console.log("loading theater");
  const boxElement = loadingBox();

  const theaterGeo = new THREE.SphereBufferGeometry(500, 60, 40);
  theaterGeo.scale(-1, 1, 1);

  const video = document.createElement("video");
  video.id = "vid";
  video.crossOrigin = "anonymous";
  video.volume = 0;
  video.preload = "true";
  //   video.autoplay = true;
  video.loop = true;
  video.src = videoFile;
  video.playsInline = true;
  video.setAttribute("type", "video/mp4");
  video.onprogress = (e) => console.log(video.readyState);
  video.setAttribute("webkit-playsinline", "webkit-playsinline");
  const texture = new THREE.VideoTexture(video);
  const theaterMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.3,
  });

  const theaterMesh = new THREE.Mesh(theaterGeo, theaterMaterial);

  threeState.scene.add(theaterMesh);

  boxElement.onclick = () => {
    let time = 0;
    let frame = 0;
    function animate() {
      if (time < 1) {
        const scaleLerp = lerp(time, 1, 0.01);
        const opacityLerp = lerp(time, 0, 1);
        theaterMesh.scale.set(scaleLerp, scaleLerp, scaleLerp);
        theaterMesh.material.opacity = opacityLerp;
        boxElement.style.opacity = `${0.5 - opacityLerp}`;
        time += 0.01;
        frame = requestAnimationFrame(animate);
      } else {
        boxElement.remove();
        cancelAnimationFrame(frame);
      }
    }
    animate();
    video.play();
  };
}

function loadingBox() {
  const width = 100;
  const height = 100;
  const box = document.createElement("div");
  box.style.position = "absolute";
  box.style.display = "flex";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.left = "50%";
  box.style.top = "20%";
  box.style.marginLeft = `-${width / 2}px`;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.borderRadius = "50%";
  box.style.background = "red";
  box.style.cursor = "pointer";
  box.id = "loading-box";
  document.body.appendChild(box);
  return box;
}
