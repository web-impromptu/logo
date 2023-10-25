import * as THREE from "three";

const canvas = document.getElementById("logo-canvas");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, undefined, .01, 10);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.rotateX(Math.PI/4);
cube.rotateY(Math.PI/4);
scene.add( cube );

const render = () => {
  renderer.render(scene, camera);
};

const resize = () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);

  const aspect = width / height;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  render();
};
window.onresize = resize;
resize();