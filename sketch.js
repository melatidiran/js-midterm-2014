var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;

var pipc1


function preload() {
	img = loadImage('galaxyback.jpg')
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  smooth();
  img2 = loadImage('pip.png');
  img3 = loadImage('pip2.png');
  img4 = loadImage('pip3.png');
  img5 = loadImage('pip4.png');
  img6 = loadImage('pip5.png');
  img7 = loadImage('pip6.png');
  img8 = loadImage('pip7.png');
  img9 = loadImage('pip8.png');
  img.loadPixels();
  image(img, 0, 0);
}

// function mouseClicked() {
// 	image(img3, 400, 400);
// 	noLoop();
// }

function draw() {
	// draw pip
	image(img2, 400, 400);

	if (mouseIsPressed === true){
			randInt = 1;
	}

	if (keyIsPressed === true){
	if (key === '1') {
		stroke(51, 153, 204);
		strokeWeight(1);
		noFill();
		triangle(mouseX, mouseY, 400, 500, 600, 500);

	} else if (key === '2') {
		fill(255, 60);
		noStroke();
		triangle(mouseX, mouseY, pmouseX, pmouseY, 500, 500);
	} else if (key === '3') {
		fill(102, 52, 204, 90);
		stroke(204, 51, 153, 60);
		strokeWeight(4);
		triangle(mouseX, mouseY, pmouseX, pmouseY, 500, 500);
	} else if (key === '4') {
		fill(179, 51, 204, random(60));
		stroke(51, 204, 179, random(70));
		strokeWeight(3);
		triangle(mouseX, mouseY, 400, 500, 600, 500);
	} else if (key === '5') {
		noFill();
		stroke(102, 52, 204);
		strokeWeight(1);
		triangle(mouseX, mouseY, pmouseX, pmouseY, 500, 500);
		fill(51, 204, 102, 90);
		noStroke();
		triangle(mouseX, mouseY, 400, 500, 600, 500);
	} else if (key === '6') {
		noFill();
		strokeWeight(1);
		stroke(51, 204, 179);
		bezier(500, 500, 500, 500, mouseX+50, mouseY+50, pmouseX, pmouseY);
	} else if (key === '7') {
		fill(102, 52, 204, 80);
		noStroke();
		triangle(mouseX, mouseY, 400, 500, 600, 500);
	} else if (key === '8') {
		noFill();
		stroke(128, 255, 0, 60);
		strokeWeight(1.5);
		triangle(mouseX, mouseY, pmouseX, pmouseY, 500, 500);
	} else if (key === '9') {
		fill(204, 51, 153);
		noStroke();
		triangle(mouseX, mouseY, pmouseX, pmouseY, 500, 500);
		fill(51, 153, 204, 80);
		noStroke();
		triangle(mouseX, mouseY, pmouseX-10, pmouseY-10, 500, 500);
	} else if (key === '0') {
		//erase everything
		fill(0);
		image(img, 0, 0);
	} 
 }
}

// function mouseClicked() {
// 		image(img3, 400, 400);
// 		image(img4, 400, 400);
// 		loop();
// }

