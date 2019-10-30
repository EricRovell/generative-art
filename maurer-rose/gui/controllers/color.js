import Container from "./container.js";
import Label from "./label.js";
import Value from "./value.js";

const rgb2hex = (r, g, b) => "#" + (
  [r, g, b].map(value => {
    let hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  })
).join("");

const evalRGB = string => {
  const regex = /((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?/
  if (regex.test(string)) {
    const rgb = string
      .split(",")
      .map(Number);
    return rgb;
  }
}

export default ({ name, initial, variable }, state) => {
  const container = Container();

  const label = Label({ name });
  const colorField = Value({ initial, type: "text" });

  const rgb = initial
      .split(",")
      .map(Number);
  const hex = rgb2hex(...rgb.slice(0, 3));
  const colorLabel = Value({ initial: hex, type: "color" });

  colorField.addEventListener("input", event => {
    const colorInput = event.target.value;
    const rgb = evalRGB(colorInput);
    if (rgb) {
      state[variable] = `rgba(${rgb})`;      
      const hex = rgb2hex(...rgb.slice(0, 3));
      colorLabel.value = hex;
    }      
  });


  container.classList.add("gui-color");
  container.append(label, colorLabel, colorField);
  return container;
};
