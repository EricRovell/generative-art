import Vector from "./Vector.js";
import { context } from "./canvas.js";

export default class Particle {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector();
    this.acceleration = new Vector(0.0005, 0);
    this.size = 50;
  }

  move() {
    this.velocity.addTo(this.acceleration);
    this.position.addTo(this.velocity);
    console.log(this.position.toArray);
  }

  render() {
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, true);
    context.closePath();
    context.stroke();
  }
}