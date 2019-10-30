import Container from "./container.js";
import Label from "./label.js";
import Value from "./value.js";

import svgIcon from "../IconSystem/svgIcon.js";

export default ({ name, initial }, state) => {
  const container = Container();
  const label = Label({ name, variable: null });

  const width = Value({
    initial: initial.width,
    type: "number"
  });
  const height = Value({
    initial: initial.height,
    type: "number"
  });

  const action = svgIcon({ href: "#gui-icon-screenshot" });
  
  width.addEventListener("input", event => {
    const input = parseInt(event.target.value, 10);
    if (input) {
      width.value = input;
      state.imageWidth = input;
    }    
  });

  height.addEventListener("input", event => {
    const input = parseInt(event.target.value, 10);
    if (input) {
      height.value = input;
      state.imageHeight = input;
    }    
  });

  action.addEventListener("click", () => {
    screenshot(state);
  });

  container.append(label, width, height, action);
  container.classList.add("gui-screenshot-canvas");
  return container;
};

// make a shot on virtual canvas and remove it after
function screenshot(state) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const { 
    origin,
    n,
    d,
    scale,
    background,
    lineWidth,
    lineColour,
    steps,
    imageWidth,
    imageHeight
  } = state;
  
  // reset transform
  context.setTransform(1, 0, 0, 1, 0, 0);

  [ canvas.width, canvas.height ] = [ imageWidth, imageHeight ];
  context.translate(imageWidth / 2, imageHeight / 2);
  context.scale(1, -1);

  const similarScale = (imageHeight * scale) / window.innerHeight;

  // reset canvas
  context.fillStyle = background;
  context.clearRect(-imageWidth/2, -imageHeight/2, imageWidth, imageHeight);
  context.fillRect(-imageWidth/2, -imageHeight/2, imageWidth, imageHeight);

  context.lineWidth = lineWidth;
  context.strokeStyle = lineColour;

  context.beginPath();
  context.moveTo(...origin);

  for (let k = 0; k <= steps; k++) {
    const radians = Math.PI / 180 * (k * d);
    const radius = similarScale * Math.sin(n * radians);  
    context.lineTo(
      radius * Math.cos(radians),
      radius * Math.sin(radians)
    );
  }
  
  context.stroke();

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
  const imgData = canvas.toDataURL({
    format: "png",
    multiplier: 4
  });
  const blob = dataURLtoBlob(imgData);
  const objurl = URL.createObjectURL(blob);

  link.download = "MaurerRose.png";
  link.href = objurl;
  link.click();

  
};
