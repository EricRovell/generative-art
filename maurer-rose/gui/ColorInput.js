import state from "../state.js";

export const ColorInput = ({ model, name, defaultVal, variable }) => {
  const container = document.createElement("div");
  const label = document.createElement("label");
  const color = document.createElement("input");

  const value = document.createElement("input");
  value.setAttribute("type", "text");
  value.setAttribute("value", defaultVal);

  Object.assign(color, {
    type: "text",
    value: defaultVal,
    className: "gui-slider",
    id: `gui-var-${variable}`,
  });

  Object.assign(label, {
    htmlFor: `gui-var-${variable}`,
    className: "gui-label",
    innerText: name,
  });

  color.addEventListener("input", event => {
    const colorInput = event.target.value;
    //const regex = /^(\d{1,3}?\s*[,]\s*){3}([0-1][.]?\d{1,2})$/;
    const regex = /((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?/
    if (regex.test(colorInput)) {
      const rgb = colorInput
        .split(",")
        .map(Number);

      state[variable] = `rgba(${rgb})`;
      value.value = `rgba(${rgb})`;      
    }
  });


  container.className = "gui-color-text";
  container.append(label, color);
  return container;
};
