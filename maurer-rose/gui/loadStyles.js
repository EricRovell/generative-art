export default () => {
  // path to the main stylesheet
  const stylesheet = "./gui/styles/main.css";
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", stylesheet);
  // append css file to head
  document.querySelector("head").appendChild(link); 
};
