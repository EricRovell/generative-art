const toRange = (value, a, b, c, d) => {
  // maps the value from range [a, b] -> [c, d]
  const slope = (d - c) / (b - a);
  return c + Math.round(slope * (value - a));
};

export const rgba2hexa = (r, g, b, a) => {
  // convert channels
  const rgb = [ r, g, b ].map(channel => {
    const hex = channel.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  });
  // map rgba alpha channel to hex range
  const alpha = toRange(a, 0, 1, 0, 255).toString(16);
  return [ "#", ...rgb, alpha ].join("");
};

export const rgb2hex = (r, g, b) => "#" + (
  [r, g, b].map(value => {
    let hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  })
).join("");

export const hex2rgb = hex => (
  hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
);
