import render from "./render.js";
import state from "../state.js";

// getting canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.addEventListener("resize", () => {
  const { innerWidth: width, innerHeight: height } = window;
  canvas.width = width,
  canvas.height = height;
  render(context, state);
});

export {
  canvas,
  context,
};
