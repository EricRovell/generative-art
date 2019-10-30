import Label from "./label.js";
import Value from "./value.js";
import Container from "./container.js";

export default ({ name, min, max, initial, variable, tip }, state) => {
  const container = Container();
  const label = Label({ name, variable });
  const value = Value({ initial, type: "number" });

  label.setAttribute("title", tip);

  // slider
  const slider = document.createElement("input");
  slider.setAttribute("type", "range");
  slider.setAttribute("min", min);
  slider.setAttribute("max", max);
  slider.setAttribute("value", initial);
  slider.setAttribute("class", "gui-slider-range");
  slider.setAttribute("id", `gui-option-${variable}`);

  slider.addEventListener("input", event => {
    const mutatedValue = parseInt(event.target.value, 10);
    state[variable] = mutatedValue;
    value.value = mutatedValue;
  });

  value.addEventListener("input", event => {
    const mutatedValue = parseInt(event.target.value, 10);
    state[variable] = mutatedValue;
    slider.value = mutatedValue;    
  });

  container.append(label, slider, value);
  container.classList.add("gui-slider-range");
  return container;
};
