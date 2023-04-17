let location1;  // Location of shape1
let velocity1;  // Velocity of shape1
let location2;  // Shape 2
let velocity2;  // Shape 2
let gravity;   // Gravity acts at the shape's acceleration
let gravity2;

function setup() {
  createCanvas(640, 360);
  location1 = createVector(100, 100);
  velocity1 = createVector(1.5, 2.1);
  location2 = createVector(200, 50);
  velocity2 = createVector(-2.3, 1.5);
  gravity = createVector(0, 0.2);
  gravity2 = createVector(0, 0.8);
}

let a = 0;
let b = 0;
let c = 0;

function draw() {
  background(a, b, c);
  
  // Add velocity to the location1 and location2.
  location1.add(velocity1);
  location2.add(velocity2);
  
  // Add gravity to velocity1 and velocity2.
  velocity1.add(gravity);
  velocity2.add(gravity2);
  
  // Bounce off edges shape1
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
    a = 255;
    b = 155;
    c = 200;
  }
  
  // Shape1
  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
    a = 255;
    b = 172;
    c = 155;
  }

  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -0.95;
    a = 200;
    b = 52;
    c = 255;
  }

  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.96;
    location2.y = height;
    a = 50;
    b = 172;
    c = 189;
  }
  
  // Display circle at location vector
  stroke(51, 105, 106);
  strokeWeight(5);
  fill(location1.x / 2, location1.y / 2);
  ellipse(location1.x, location1.y, 8, 28);
  
  stroke(92, 255, 209, 80);
  strokeWeight(5);
  fill(location1.x / 2, location1.y / 2, location1.x / 2, location1.y / 2);
  ellipse(location1.x, location1.y, 48, 48);
  
  stroke(70, 115, 150);
  strokeWeight(2);
  fill(location2.x / 2, location2.y / 2, location2.x / 2);
  ellipse(location2.x, location2.y, 30, 30);
}
