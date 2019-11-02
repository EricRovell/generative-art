import initGUI from "./init.js";

import state from "../state.js";

import SliderRange from "./controllers/slider-range.js";
import ColorPicker from "./controllers/color.js";
import Multibox from "./controllers/multibox.js";
import ScreenshotCanvas from "./controllers/screenshot.js";

import svgIcon from "./IconSystem/svgIcon.js";

export const makeGUI = () => {
  // main GUI container
  const container = document.createElement("div");
  container.setAttribute("id", "gui-wrapper");

  // section
  const guiSection = document.createElement("div");
  const guiSectionTitle = document.createElement("div");
  const guiSectionBody = document.createElement("div"); 
  guiSection.setAttribute("class", "gui-section");
  guiSectionTitle.setAttribute("class", "gui-section-title");
  guiSectionBody.setAttribute("class", "gui-section-body");
  guiSection.append(guiSectionTitle, guiSectionBody);
  container.appendChild(guiSection);  
  
  // section title + collapse button
  const title = document.createElement("h3");
  const collapse = svgIcon({ href: "#gui-icon-plus" });
  title.innerText = "Maurer Rose";
  guiSectionTitle.append(title, collapse);
  
  // title -> collapse forms
  guiSectionTitle.addEventListener("click", event => {
    const element = guiSectionTitle.nextElementSibling;
    element.classList.toggle("gui-section-body--hidden");
  });

  // parse the settings object and add desired forms
  for (let form of initGUI) {
    switch (form.type) {  
      case "slider": {
        guiSectionBody.appendChild(SliderRange(form, state));
        break;
      };
      case "color-picker": {
        guiSectionBody.appendChild(ColorPicker(form, state));
        break;
      };
      case "multibox": {
        guiSectionBody.appendChild(Multibox(form, state));
        break;
      };
      case "screenshot-canvas": {
        guiSectionBody.appendChild(ScreenshotCanvas(form, state));
        break;
      }   
    }
  }

  container.setAttribute("data-theme", "dark");
  document.body.appendChild(container);
};

