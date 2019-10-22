import { state } from "../state.js";
import { context } from "../canvas.js";

export const slider = ({ name, min, max, defaultVal, variable, draw }) => {
  const container = document.createElement("div");
  const label = document.createElement("label");
  const slider = document.createElement("input");

  const value = document.createElement("input");
  value.setAttribute("type", "text");
  value.setAttribute("value", defaultVal);

  Object.assign(slider, {
    type: "range",
    min,
    max,
    value: defaultVal,
    className: "gui-slider",
    id: `gui-var-${variable}`,
  });

  Object.assign(label, {
    htmlFor: `gui-var-${variable}`,
    className: "gui-label",
    innerText: name,
  });

  slider.addEventListener("input", event => {
    const mutatedValue = parseInt(event.target.value, 10);
    state[variable] = mutatedValue;
    value.value = mutatedValue;
    draw(context, state);
  });

  value.addEventListener("input", event => {
    const mutatedValue = parseInt(event.target.value, 10);
    slider.value = mutatedValue;
    state[variable] = mutatedValue;
    draw(context, state);
  });

  container.className = "gui-slider";
  container.append(label, slider, value);
  return container;
};
