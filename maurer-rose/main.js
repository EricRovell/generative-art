import state from "./state.js";
import { canvas, context } from "./canvas.js";

export function draw(context, state) {
  const { origin, n, d, scale, background, lineWidth, lineColour } = state;

  // setting fullscreen
  const { innerWidth: width, innerHeight: height } = window;
  [ canvas.width, canvas.height ] = [ width, height ];

  // making usual coordinate system 
  context.translate(width / 2, height / 2);
  context.scale(1, -1);

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

draw(context, state);

const screenshot = (draw, state) => {
  const tempCanvas = document.createElement("canvas");
  const tempContext = tempCanvas.getContext("2d");  

  const { width, height } = state.screenshot;
  [ tempCanvas.width, tempCanvas.height ] = [ width, height ];
  tempContext.translate(width / 2, height / 2);
  tempContext.scale(1, -1);

  draw(tempContext, { ...state, scale: state.screenshot.scale });

  const dataURLtoBlob = dataurl => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  };
  
  const link = document.createElement("a");
  const imgData = tempCanvas.toDataURL({
    format: "png",
    multiplier: 4
  });
  const blob = dataURLtoBlob(imgData);
  const objurl = URL.createObjectURL(blob);

  link.download = "MaurerRose.png";
  link.href = objurl;
  link.click();
};

const button = document.createElement("button");
document.body.appendChild(button);
button.addEventListener("click", event => {
  screenshot(draw, state);
});


/* // resize -> redraw
window.addEventListener("resize", event => {
  const { innerWidth: width, innerHeight: height } = window;
  context.canvas.width = width;
  context.canvas.height = height;
  draw(context, state, width, height);
}); */

import { makeGUI } from "./gui/gui.js";

makeGUI();