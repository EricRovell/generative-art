export const state = {
  origin: [0, 0],
  n: 6,
  d: 71,
  scale: 310,
  background: "rgb(19, 19, 21)",
  lineWidth: 1.5,
  lineColour: "rgba(120, 120, 250, 0.55)",
  screenshot: {
    width: 6000,
    height: 4000,
    scale: 1900,
  },
};


const onChange = (state, render) => {
  const handler = {
    set(target, property, receiver) {
      render();
      const value = Reflect.get(target, property, receiver);
      if (typeof value === "object") return new Proxy(value, handler);
      return value;
    }
  };

  return new Proxy(state, handler);
};
