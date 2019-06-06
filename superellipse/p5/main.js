let w = window.innerWidth;
let h = window.innerHeight;


let a = 350;
let b = 350;
let n;

let oscillate = 0;

function setup() {
  createCanvas(w, h);
  stroke(255);
  noFill();
  strokeWeight(4);  
}

function draw() {
  background(51);
  n = map(sin(oscillate), -1, 1, 0.1, 5);
  translate(w/2, h/2);
  beginShape();
    noFill();
    stroke(255);
    strokeWeight(4);
    
    for (let angle = 0; angle < 2 * Math.PI; angle += 0.1) {
      let x = ( Math.abs(Math.cos(angle)) ** (2 / n) ) * a * Math.sign(Math.cos(angle));
      let y = ( Math.abs(Math.sin(angle)) ** (2 / n) ) * b * Math.sign(Math.sin(angle));
      vertex(x, y);
    }
  endShape(CLOSE);

  oscillate += 0.01;
}
