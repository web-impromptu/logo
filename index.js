import { render, scene } from "./scene";
import ball from "./ball";

scene.add(ball);
render();

let time = performance.now();
const animate = () => {
  const currentTime = performance.now();
  const deltaTime = (currentTime - time) / 1000;
  time = currentTime;

  ball.update(deltaTime);
  render();
  requestAnimationFrame(animate);
};
animate();