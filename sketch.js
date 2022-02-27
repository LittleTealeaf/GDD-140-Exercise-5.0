/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  const rows = 8;
  const cols = 8;

  const w = width / cols;
  const h = height / rows;

  for(var r = 0; r < rows; r++) {
    for(var c = 0; c < cols; c++) {
      if((r + c)%2==0) {
        fill('#FFFFFF');
      } else {
        fill('#000000');
      }
      rect(c * w,r * h,w,h);
    }
  }
}
