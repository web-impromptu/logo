import * as THREE from "three";

const canvas = document.getElementById("logo-canvas");

export const renderer = new THREE.WebGLRenderer({
  canvas,
});

THREE.ColorManagement.enabled = false;
renderer.setClearColor(0xffffee);

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(50, undefined, .01, 10);
camera.position.z = 5;

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