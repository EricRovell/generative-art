export default ({ initial, type }) => {
  const input = document.createElement("input");
  input.type = type;
  input.innerText = initial;
  input.value = initial;

  return input;
};
