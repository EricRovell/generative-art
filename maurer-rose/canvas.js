import { draw } from "./main.js";
import state from "./state.js";

// getting canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.addEventListener("resize", () => {
  const { innerWidth: width, innerHeight: height } = window;
  canvas.width = width,
  canvas.height = height;
  draw(context, state);
});

export {
  canvas,
  context,
};
