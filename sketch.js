/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Rows and cols
  const rows = 8;
  const cols = 8;

  //Set width and height
  const w = width / cols;
  const h = height / rows;

  //Draw
  for(var r = 0; r < rows; r++) {
    for(var c = 0; c < cols; c++) {
      //Fill based on the sum's %2 value
      fill((r + c)%2==0 ? '#FFFFFF' : '#000000');
      rect(c * w,r * h,w,h);
    }
  }
}
