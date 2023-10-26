import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from "./shaders/fragment.glsl?raw";

THREE.ColorManagement.enabled = false;

export const lightColor = new THREE.Color(0xffffee);
export const shadowColor = new THREE.Color(0x20111f);

const lightDirectionUniform = new THREE.Uniform(new THREE.Vector3(.1, -.25, -1));
const lightColorUniform = new THREE.Uniform(lightColor);
const shadowColorUniform = new THREE.Uniform(shadowColor);
const brightnessUniform = new THREE.Uniform(-.13);
const contrastUniform = new THREE.Uniform(1.5);

const outlineColor = new THREE.Color(shadowColor);
outlineColor.convertSRGBToLinear();

export const ballMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  defines: { FLAT_SHADED: true },
  uniforms: {
    lightDirection: lightDirectionUniform,
    lightColor: lightColorUniform,
    shadowColor: shadowColorUniform,
    brightness: brightnessUniform,
    contrast: contrastUniform,
  },
});

export const outlineMaterial = new THREE.MeshBasicMaterial({
  color: outlineColor,
});

export const normalMaterial = new THREE.MeshNormalMaterial({
  flatShading: true,
});