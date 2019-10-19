import Particle from "./Particle.js";
import { canvas, context } from "./canvas.js";

const p = new Particle(200, 200);

const resizeCanvas = () => {
  const { innerWidth: width, innerHeight: height } = window;
  [ canvas.width, canvas.height ] = [ width, height ];
  render(); 
};

window.addEventListener("resize", resizeCanvas, false);

resizeCanvas(canvas);

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  p.render();
  p.move();  

  //requestAnimationFrame(render);
}