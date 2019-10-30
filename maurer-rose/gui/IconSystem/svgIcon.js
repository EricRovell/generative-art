export default ({ href }) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "gui-icon");

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", href);

  svg.appendChild(use);
  return svg;
};
