import { initGUI } from "./init.js";

import { slider } from "./slider.js";

import { draw } from "../main.js";

export const makeGUI = () => {
  const guiWrapper = document.createElement("div");
  guiWrapper.id = "gui-wrapper";

  for (let form of initGUI) {
    switch (form.type) {
  
      case "slider": {
        guiWrapper.appendChild(slider(form));
        break;
      }
  
    }
  }

  document.body.appendChild(guiWrapper);
};

