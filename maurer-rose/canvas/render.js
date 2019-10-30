export default function render(context, state) {
  const { origin, n, d, scale, background, lineWidth, lineColour, steps } = state;

  // setting fullscreen
  const { innerWidth: width, innerHeight: height } = window;
  [ canvas.width, canvas.height ] = [ width, height ];

  // making usual coordinate system 
  context.translate(width / 2, height / 2);
  context.scale(1, -1);

  // reset canvas
  context.fillStyle = background;
  context.clearRect(-width/2, -height/2, width, height);
  context.fillRect(-width/2, -height/2, width, height);

  context.lineWidth = lineWidth;
  context.strokeStyle = lineColour;

  context.beginPath();
  context.moveTo(...origin);

  for (let k = 0; k <= steps; k++) {
    const radians = Math.PI / 180 * (k * d);
    const radius = scale * Math.sin(n * radians);  
    context.lineTo(
      radius * Math.cos(radians),
      radius * Math.sin(radians)
    );
  }
  
  context.stroke();
};
