
function setup() {
	createCanvas(windowWidth,900);
	//stroke(20);
	background(200);

}

function draw() {
	background(200);
  fill(23,45,67);
  beginShape();
  vertex(100 , 250);
  vertex(310 , 250);
  vertex(310 , 500);
  vertex(100 , 500);
  endShape(CLOSE);
  fill(23,45,67);
  ellipse(200 ,200,100,100,0,0);
  fill(252, 252, 252);
  ellipse(175 ,185,10,10,0,0);
  fill(252, 252, 252);
  ellipse(225 ,185,10,10,0,0);
  fill(252,252,252);
  beginShape();
  vertex(180 ,220);
  vertex(225 ,220);
  vertex(225 ,225);
  vertex(180 ,225);  
  endShape(CLOSE);
  fill(0,128,0);
  beginShape();
  vertex(90 , 250);
  vertex(31 , 250);
  vertex(31 , 450);
  vertex(90 , 450);
  endShape(CLOSE);
  fill(0,128,0);
  beginShape();
  vertex(381 , 250);
  vertex(320 , 250);
  vertex(320 , 450);
  vertex(381 , 450);
  endShape(CLOSE);
  fill(0,128,0);
  beginShape();
  vertex(110 , 510);
  vertex(170 , 510);
  vertex(170 , 740);
  vertex(110 , 740);
  endShape(CLOSE);
  fill(0,128,0);
  beginShape();
  vertex(240 , 510);
  vertex(300 , 510);
  vertex(300 , 740);
  vertex(240 , 740);
  endShape(CLOSE);
 
}