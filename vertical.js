var ballX = 0;
var ballSpeed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(100,ballX, 50, 50);

ballX = ballX +1
  
}
