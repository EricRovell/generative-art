import { draw } from "./main.js";
import { context } from "./canvas.js";

const state = {
  origin: [0, 0],
  n: 6,
  d: 71,
  scale: 310,
  background: "rgb(19, 19, 21)",
  lineWidth: 1.5,
  lineColour: "rgba(120, 120, 250, 0.55)",
  screenshot: {
    width: 6000,
    height: 4000,
    scale: 1900,
  },
};

const handler = {
  set(target, property, value) {
    target[property] = value;
    draw(context, state);
    return true;    
  }
};

export default new Proxy(state, handler);