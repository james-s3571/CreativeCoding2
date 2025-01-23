function setup() {
    createCanvas(400, 400);
    background(220); // Light gray background
    
    // Bun (Top)
    fill(245, 204, 132); // Light brown color
    noStroke();
    ellipse(200, 150, 200, 100); // Top bun
    
    // Lettuce
    fill(123, 239, 178); // Green color
    ellipse(200, 200, 220, 30); // Curved lettuce layer
    
    // Tomato
    fill(255, 99, 71); // Tomato red
    rect(120, 215, 160, 20, 10); // Rounded tomato slice
    
    // Patty
    fill(101, 67, 33); // Dark brown
    rect(120, 240, 160, 30, 10); // Rounded beef patty
    
    // Cheese
    fill(255, 223, 0); // Yellow cheese
    rect(120, 275, 160, 20, 5); // Cheese layer
    
    // Bun (Bottom)
    fill(245, 204, 132); // Light brown color
    rect(120, 300, 160, 50, 10); // Bottom bun
  }