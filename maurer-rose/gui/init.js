export default [

  {
    type: "slider",
    name: "d",
    tip: "incremental angle",
    min: 0,
    max: 360,
    initial: 6,
    variable: "d",
  },

  {
    type: "slider",
    name: "n",
    tip: "step factor",
    min: 0,
    max: 360,
    initial: 29,
    variable: "n",
  },

  {
    type: "slider",
    name: "steps",
    tip: "number of walk-steps",
    min: 0,
    max: 360,
    initial: 360,
    variable: "steps",
  },

  {
    type: "slider",
    name: "scale",
    tip: "scale factor for Maurer Rose",
    min: 50,
    max: 900,
    initial: 320,
    variable: "scale",
  },

  /* {
    type: "color-picker",
    model: "rgba",
    tip: "Stroke color in RGBA model",
    name: "stroke",
    initial: "120, 120, 250, 0.55",
    variable: "lineColour",
  }, */

  {
    type: "multibox",
    name: "some name",
    boxes: [
      {
        tip: "box1",
        initial: true,
        variable: "box1",
      },
      {
        tip: "box2",
        initial: false,
        variable: "box2",
      },
    ],
  },

  {
    type: "screenshot-canvas",
    name: "screenshot",
    tip: "Set the dimentions and download a screenshot",
    initial: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    variable: "screenshot",
  }
  
];
