export default ({ initial, type, tip }) => {
  const input = document.createElement("input");
  input.type = type;
  input.innerText = initial;
  input.value = initial;

  if (tip) input.setAttribute("title", tip);

  return input;
};
