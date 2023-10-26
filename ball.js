import * as THREE from "three";
import { ballMaterial, outlineMaterial } from "./materials";

const geometry = new THREE.IcosahedronGeometry(1, 2);
const ball = new THREE.Mesh(geometry, ballMaterial);

const outlineGeometry = new THREE.IcosahedronGeometry(-1.2, 16);
const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
ball.add(outline);

export default ball;