declare const window: any;
const song = require("./sounds/olebiege_heat.mp3");
import * as THREE from "three";
import { threeState } from "./three";
import { materials, skyBox } from "./cube-world";
export let dataArray: Uint8Array;
export let analyser: AnalyserNode;
export const analyserObject = {
  avgF: 0,
};
export default function () {
  const overlay = document.createElement("div");
  // document.body.prepend(overlay);
  const poppa = document.createElement("div");
  overlay.appendChild(poppa);
  const button = document.createElement("button");
  button.addEventListener("click", init);
  button.innerHTML = "FUCK";
  button.style.margin = "auto";
  button.style.display = "block";
  overlay.appendChild(button);
  function init() {
    const listener = new THREE.AudioListener();
    threeState.camera.add(listener);

    // create an Audio source
    const sound = new THREE.Audio(listener);

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(song, function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });

    // create an AudioAnalyser, passing in the sound and desired fftSize
    const analyser = new THREE.AudioAnalyser(sound, 32);

    // get the average frequency of the sound
    let avgFMax: number = 0;
    let avgFMin: number = 9999;
    draw();
    function draw() {
      const avgF: any = analyser.getAverageFrequency();
      if (!isFinite(avgF)) return;
      if (avgF > avgFMax) avgFMax = avgF;
      if (avgF > 0 && avgF < avgFMin) avgFMin = avgF;
      if (!avgFMax) {
        analyserObject.avgF = 0;
      } else {
        const normAvg = avgF / avgFMax;
        analyserObject.avgF = normAvg;
        skyBox.scale.set(normAvg * 4, normAvg * 4, normAvg * 4);
      }

      for (let i = 0; i < materials.length; i++) {
        materials[i].uniforms.progress.value = analyserObject.avgF;
      }
      const fData = analyser.getFrequencyData();
      requestAnimationFrame(draw);
    }
  }
}
