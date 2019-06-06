export class SuperEllipse {
  constructor(args) {
    this.n = args.n || 5;
    this.radius = {...args.radius} || {x: 100, y: 100},
    this.angle = args.angle;
    this.speed = args.speed;
    this.limit = args.limit;
    this.stroke = {
      colour: args.strokeColour,
      weight: args.strokeWeight
    };
    this.backgroundColour = args.backgroundColour;
  }

  render(context) {
    // const point = (x, y) => context.fillRect(x, y, 1, 1);
    context.fillStyle = this.backgroundColour;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    for (let angle = 0; angle <= 2 * Math.PI; angle += 0.05) 
    {
      let x = (Math.abs(Math.cos(angle)) ** (2 / this.n) ) * this.radius.x * Math.sign(Math.cos(angle));
      let y = (Math.abs(Math.sin(angle)) ** (2 / this.n) ) * this.radius.y * Math.sign(Math.sin(angle));
      // point(x + canvas.width / 2, y + canvas.height / 2);
      context.lineTo(x + canvas.width / 2, y + canvas.height / 2);
    }
    context.lineWidth = this.stroke.weight;
    context.strokeStyle = this.stroke.colour;
    context.closePath();
    context.stroke();
    
    this.n = SuperEllipse.scale(Math.sin(this.angle), -1, 1, ...this.limit);
    this.angle += this.speed;
  }  

  static scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
}