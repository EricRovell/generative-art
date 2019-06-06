var w = window.innerWidth;
var h = window.innerHeight;

var seedNumber = 0;
var scalingParameter = 4;

var colour = false;

function setup() {
  createCanvas(w, h);
  background(51);
  angleMode(DEGREES);
  //
  if (colour) {
    colorMode(HSB);
  }
}

function draw() {
  translate(w/2, h/2);
  // Phyllotaxis formula
  var angle = seedNumber * 137.5;
  var radius = scalingParameter * sqrt(seedNumber);

  // from polar to cartesian
  var x = radius * cos(angle);
  var y = radius * sin(angle);

  // looks
  if (colour) {
    fill(seedNumber % 256, 255, 255);
  } else {
    fill(255, 255, 0);
    stroke(0);
  }

  ellipse(x, y, 15);

  // next seed
  seedNumber++;
}
