const toRange = (value, a, b, c, d) => {
  // maps the value from range [a, b] -> [c, d]
  const slope = (d - c) / (b - a);
  return c + Math.round(slope * (value - a));
};

export const rgba2hexa = (r, g, b, a = 0) => {
  // convert channels
  const rgb = [ r, g, b ].map(channel => {
    const hex = channel.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  });
  // if a is still 0, it is rgb, return the result
  if (a === 0) return [ ...rgb ]; 
  // map rgba alpha channel to hex range
  const alpha = toRange(a, 0, 1, 0, 255).toString(16);
  return [ "#", ...rgb, alpha ].join("");
};

export const hexa2rgba = hexa => {
  const regex = /^(#{0,1})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?$/i;

  const channels = [ ...hexa.match(regex).slice(2).filter(val => val !== undefined) ];
  const rgb = [ ...channels ].map(channel => parseInt(channel, 16));

  if (channels.length !== 3) {
    const alpha = Number((rgb[3] / 255).toFixed(2));
    return [ ...rgb.slice(0, 3), alpha];
  }

  return rgb;
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
