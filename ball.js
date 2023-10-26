import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from "./shaders/fragment.glsl?raw";

const normalMaterial = new THREE.MeshNormalMaterial({
  flatShading: true,
});

const lightColor = new THREE.Uniform(new THREE.Color(0xffffee));
const shadowColor = new THREE.Uniform(new THREE.Color(0x20111f));

const ballMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  defines: { FLAT_SHADED: true },
  uniforms: {
    lightColor,
    shadowColor,
  },
});

const geometry = new THREE.IcosahedronGeometry(1, 2);
const ball = new THREE.Mesh(geometry, ballMaterial);

export default ball;