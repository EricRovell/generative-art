const icons = [
  {
    title: "height",
    viewbox: "0 0 24 24",
    desc: "describes height value",
    path: "M17.45,17.55L12,23L6.55,17.55L7.96,16.14L11,19.17V4.83L7.96,7.86L6.55,6.45L12,1L17.45,6.45L16.04,7.86L13,4.83V19.17L16.04,16.14L17.45,17.55Z",
  },
  {
    title: "screenshot",
    viewbox: "0 0 24 24",
    desc: "used for screenshot button",
    path: "M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z",
  },
  {
    title: "plus",
    viewbox: "0 0 24 24",
    desc: "used for collapsing the menu",
    path: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  }
];

export default () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.display = "none";
  svg.setAttribute("class", "gui-icon-system");

  icons.forEach(({ title, viewbox, desc, path }) => {

    const symbol = document.createElementNS("http://www.w3.org/2000/svg", "symbol");;
    symbol.setAttribute("id", `gui-icon-${title}`);
    symbol.setAttribute("viewbox", viewbox);

    const symbolTitle = document.createElement("title");
    symbolTitle.innerText = title;

    const description = document.createElementNS("http://www.w3.org/2000/svg", "desc");;
    description.innerText = desc;

    const symbolPath = document.createElementNS("http://www.w3.org/2000/svg", "path");;
    symbolPath.setAttribute("d", path);

    symbol.append(symbolTitle, description, symbolPath);
    svg.appendChild(symbol);
  });

  return svg;  
};
