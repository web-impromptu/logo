import * as THREE from "three";
import { ballMaterial, outlineMaterial } from "./materials";

class Ball extends THREE.Object3D {
  constructor(radius, border, material, outlineMaterial) {
    super();

    this.#mesh = Ball.#createMesh(radius, border, material, outlineMaterial);
    this.add(this.#mesh);

    this.#mesh.rotateX(-17 * Math.PI / 180);
  }

  #mesh;

  update(deltaTime) {
    this.#mesh.rotateY(-11 * Math.PI / 180 * deltaTime);
    this.#mesh.rotateZ(-6 * Math.PI / 180 * deltaTime);
  }

  static #createMesh(radius, border, material, outlineMaterial) {
    const geometry = new THREE.IcosahedronGeometry(radius - border, 2);
    const mesh = new THREE.Mesh(geometry, material);

    const outlineGeometry = new THREE.IcosahedronGeometry(-radius, 16);
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    mesh.add(outline);

    return mesh;
  }
}

const ball = new Ball(.3, .05, ballMaterial, outlineMaterial);

export default ball;