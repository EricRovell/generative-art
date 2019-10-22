import { state } from "../state.js";

import { draw } from "../main.js";

export const initGUI = [

  {
    type: "slider",
    name: "d",
    min: 0,
    max: 360,
    defaultVal: 6,
    variable: "d",
    draw,
  },

  {
    type: "slider",
    name: "n",
    min: 0,
    max: 360,
    defaultVal: 29,
    variable: "n",
    draw,
  },

];
