import render from "./canvas/render.js";
import { context } from "./canvas/canvas.js";

const state = {
  origin: [0, 0],
  n: 6,
  d: 71,
  steps: 360,
  scale: 310,
  background: "rgb(19, 19, 21)",
  lineWidth: 1.5,
  lineColour: "rgba(120, 120, 250, 0.55)",
  imageWidth: window.innerWidth,
  imageHeight: window.innerHeight,
};

const handler = {
  set(target, property, value) {
    target[property] = value;
    render(context, state);
    return true;    
  }
};

export default new Proxy(state, handler);