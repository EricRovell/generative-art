import state from "./state.js";

import { context } from "./canvas/canvas.js";
import render from "./canvas/render.js";

import { makeGUI } from "./gui/gui.js";
import IconSystem from "./gui/IconSystem/IconSystem.js";

const iconSystem = IconSystem();
document.body.appendChild(iconSystem);

render(context, state);
makeGUI();