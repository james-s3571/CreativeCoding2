let bgColor; 
let shapes = [];
let squareX, squareY;

function setup() {
  createCanvas(600, 400);
  bgColor = color(220);
  
  // Generate random positions for moving circles
  for (let i = 0; i < 5; i++) {
    shapes.push({ x: random(width), y: random(height) });
  }
  
  // Start square in the middle
  squareX = width / 2;
  squareY = height / 2;
}

function draw() {
  background(bgColor);
  
  // Display title in upper-left corner
  textSize(20);
  fill(0);
  text("Dynamic Art", 10, 30);
  
  // Display name in lower-right corner
  textSize(16);
  text("By: Your Name", width - 120, height - 10);
  
  // Move circles randomly
  for (let i = 0; i < shapes.length; i++) {
    fill(random(255), random(255), random(255));
    circle(shapes[i].x, shapes[i].y, 30);
    
    // Update position randomly
    shapes[i].x = random(width);
    shapes[i].y = random(height);
  }

  // Draw a square that moves with arrow keys
  fill(0, 255, 0);
  square(squareX, squareY, 50);
  
  // Control movement with arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    squareX -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    squareX += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    squareY -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    squareY += 3;
  }
}

// Change background color when clicking
function mousePressed() {
  bgColor = color(random(255), random(255), random(255));
}
  