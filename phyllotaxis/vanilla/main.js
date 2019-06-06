import { seed } from './seed.js';

window.onload = () => {
  // canvas
  const context = document.getElementById('canvas').getContext('2d');
  const {innerWidth: width, innerHeight: height} = window;
  [canvas.width, canvas.height] = [width, height];
  context.translate(width / 2, height / 2);

  context.fillStyle = 'rgba(255, 152, 0, 0.5)';

  for (let seedNumber = 0; seedNumber < seed.quantity; seedNumber++)
  {
    let angle = seed.divergenceAngle * seedNumber;
    let radius = seed.scaling * Math.sqrt(seedNumber);
    let [x, y] = [ radius * Math.cos(angle), radius * Math.sin(angle) ];
    context.beginPath();
    context.arc(x, y, seed.size, 0, 2 * Math.PI, true);
    context.fill();
    // context.stroke();
  }
};