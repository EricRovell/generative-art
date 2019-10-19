import { slider } from "./gui/slider.js";

const gui = document.createElement("div");
document.body.appendChild(gui);
const { slider: n} = slider(gui);
const { slider: d } = slider(gui);


const state = {
  origin: [0, 0],
  n: 2,
  d: 29,
  scale: 375,
  background: "rgb(19, 19, 21)",
  lineWidth: 1,
  lineColour: "rgba(120, 120, 250, 0.5)",
};

// getting canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// setting fullscreen
const { innerWidth: width, innerHeight: height } = window;
[ canvas.width, canvas.height ] = [ width, height ];

// making usual coordinate system 
context.translate(width / 2, height / 2);
context.scale(1, -1);

const draw = state => {
  const { origin, n, d, scale, background, lineWidth, lineColour } = state;

  // reset canvas
  context.fillStyle = background;
  context.clearRect(-width/2, -height/2, width, height);
  context.fillRect(-width/2, -height/2, width, height);

  context.lineWidth = lineWidth;
  context.strokeStyle = lineColour;

  context.beginPath();
  context.moveTo(...origin);

  for (let k = 0; k < 361; k++) {

    const radians = Math.PI / 180 * (k * d);
    const radius = scale * Math.sin(n * radians);  
  
    context.lineTo(
      radius * Math.cos(radians),
      radius * Math.sin(radians)
    );
  }
  
  context.stroke();
};

draw(state);


n.addEventListener("input", event => {
  state.n = parseInt(event.target.value, 10);
  draw(state);
});

d.addEventListener("input", event => {
  state.d = parseInt(event.target.value, 10);
  draw(state);
});