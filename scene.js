import * as THREE from "three";
import { lightColor } from "./materials";

const canvas = document.getElementById("logo-canvas");

export const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setClearColor(lightColor);

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(40, undefined, .01, 10);
camera.position.z = 1;

export const render = () => {
  renderer.render(scene, camera);
};

const pixelSize = 4;

const resize = () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(window.devicePixelRatio / pixelSize);

  const aspect = width / height;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  render();
};
window.onresize = resize;
resize();