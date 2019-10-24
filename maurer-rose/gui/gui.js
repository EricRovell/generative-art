import initGUI from "./init.js";

import { slider } from "./slider.js";
import { ColorInput } from "./ColorInput.js";

const hideGUI = () => {
  const hideButton = document.createElement("button");
  hideButton.id = "gui-hide";
  hideButton.type = "button";
  hideButton.dataset.hidden = true;

  return hideButton;
}

export const makeGUI = () => {
  // here all forms will be stored
  const guiWrapper = document.createElement("div");
  guiWrapper.id = "gui-wrapper";

  // parse the settings object and add desired forms
  for (let form of initGUI) {
    switch (form.type) {  
      case "slider": {
        guiWrapper.appendChild(slider(form));
        break;
      }
      case "color-text": {
        guiWrapper.appendChild(ColorInput(form));
        break;
      }  
    }
  }

  // hide GUI
  const hideGUIButton = hideGUI();
  hideGUIButton.addEventListener("click", () => {
    const state = (hideGUIButton.dataset.hidden == "true");
    hideGUIButton.dataset.hidden = !state;    

    const forms = guiWrapper.querySelectorAll("#gui-wrapper > div");
    if (state) {      
      forms.forEach(form => {
        form.style.display = "none";
      });
    } else {
      forms.forEach(form => {
        form.style.display = "grid";
      });
    }
  });
  
  guiWrapper.appendChild(hideGUIButton);
  document.body.appendChild(guiWrapper);
};

