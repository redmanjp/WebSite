function setup() {
  let canvas = createCanvas(300, 300, WEBGL);
  background(0);
  canvas.parent("canvas");
}

function draw() {
  noFill();
  stroke(random(100, 255), random(100, 255), 255);
  strokeWeight(7 * sin(frameCount * 0.05));
  background(0);
  let b = 0.01 * sin(frameCount * 0.01);
  b = Math.abs(b);
  rotateY(frameCount * b);
  rotateX(frameCount * b);
  rotateZ(frameCount * b);
  let a = random(130, 140);
  box(a);
}
