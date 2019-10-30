export default ({ name, variable }) => {
  const label = document.createElement("label");
  label.id = `gui-label-${variable}`;
  label.className = "gui-label";
  label.innerText = name;
  label.htmlFor = `gui-option-${variable}`;

  return label;
};