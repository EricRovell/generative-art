export const slider = (container) => {
  const parameters = {
    label: {
      htmlFor: "n-value",
      className: "label",
      innerText: "n",
    },
    slider: {
      type: "range",
      min: 0,
      max: 100,
      value: 50,
      className: "slider",
      id: "n-value",
    }
  }

  const label = document.createElement("label");
  const slider = document.createElement("input");

  Object.assign(slider, parameters.slider);
  Object.assign(label, parameters.label);

  container.append(label, slider);
  return {
    label,
    slider
  };
};