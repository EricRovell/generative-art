import Container from "./container.js";
import Label from "./label.js";
import Value from "./value.js";

export default ({ name, boxes }, state) => {
  const container = Container();
  const label = Label({ name });

  const checkboxes = [];
  for (let box of boxes) {
    checkboxes.push(Value({
      type: "checkbox",
      initial: box.initial,
      tip: box.tip,
    }));
  }

  container.classList.add("gui-multibox");
  container.append(label, ...checkboxes);
  return container;
};
