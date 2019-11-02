import render from "./render.js";
import state from "../state.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const { innerWidth: width, innerHeight: height } = window;
canvas.width = width,
canvas.height = height;

window.addEventListener("resize", () => {
  const { innerWidth: width, innerHeight: height } = window;
  canvas.width = width,
  canvas.height = height;
  render(context, state);
});

document.body.appendChild(canvas);

export {
  canvas,
  context,
};
