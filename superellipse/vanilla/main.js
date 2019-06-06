import { ellipseParameters as parameters} from "./parameters.js";
import { SuperEllipse } from "./super-ellipse.js";

window.onload = () => {
  // preparing canvas 
  const {innerWidth: width, innerHeight: height} = window;
  const context = document.getElementById('canvas').getContext('2d');
  [canvas.width, canvas.height] = [width, height];
  
  const ellipse = new SuperEllipse(parameters);

  const update = () => {
    context.clearRect(0, 0, width, height);
    ellipse.render(context);
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}
