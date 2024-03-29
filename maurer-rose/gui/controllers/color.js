import Container from "./container.js";
import Label from "./label.js";
import Value from "./value.js";

import { rgba2hexa, hexa2rgba, rgb2hex, hex2rgb } from "../utility/convertColor.js";

const testHEX = value => {
  const regex = /[#](([0-9A-F]{8})|([0-9A-F]{6})|([0-9A-F]{4})|([0-9A-F]{3}))/i;
  return regex.test(value);
};

const testRGBA = value => {
  const regex = /((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?/;
  return regex.test(value);
};

export default ({ name, initial, variable }, state) => {
  const rgb = initial
      .split(",")
      .map(Number);
  const hex = rgb2hex(...rgb.slice(0, 3));

  const container = Container();

  const label = Label({ name });
  const colorInput = Value({ initial, type: "text" });
  const colorLabel = Value({ initial: hex, type: "color" });
  
  colorLabel.addEventListener("input", event => {
    const picked = event.target.value.toUpperCase();
    // change form to HEX-value only if user USED HEX-color before change
    if (testHEX(colorInput.value)) {
      colorInput.value = picked;
      state[variable] = picked;
    }
    if (testRGBA(colorInput.value)) {
      const rgb = hexa2rgba(picked);
      colorInput.value = rgb;
      state[variable] = `rgba(${rgb.join(",")})`;
      console.log(state[variable]);
    }
  });

  /* colorInput.addEventListener("input", event => {
    const color = event.target.value;
    if (testRGBA(color)) {
      const rgb = color.split(",").map(Number);
      const hex = rgb2hex(...rgb);
      colorLabel.value = hex;
      state[variable] = `rgba(${rgb.join(",")})`;
      console.log(state[variable]);
    }
    if (testHEX(color)) {
      if (color.length >= 7) {
        colorLabel.value = color.slice(0, 7);
      }
      state[variable] = `rgba(${rgb.join(",")})`;
    }    
  }); */


  container.classList.add("gui-color");
  container.append(label, colorLabel, colorInput);
  return container;
};
