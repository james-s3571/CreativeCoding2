function setup()
{
    createCanvas(600, 600);
} 

//burger
function draw()
{
    background(173, 133, 108);
    strokeWeight(3);
    fill(231, 218, 209);


    //plate
    strokeWeight(7);
    stroke(223, 217, 213);
    line(50, 500, 550, 500);

    //bun
    strokeWeight(50);
    stroke(215, 164, 58);
    line(75, 470, 525, 470);

    strokeWeight(50);
    stroke(215, 164, 58);
    line(75, 355, 525, 355);

    fill(215, 164, 58);
    ellipse(300, 345, 450, 150);


    //burger
    strokeWeight(50);
    stroke(142, 107, 72);
    line(75, 420, 525, 420);

    //lettuce
    strokeWeight(5);
    stroke(104, 190, 106);
    line(60, 395, 540, 395);

    //onion
    strokeWeight(10);
    stroke(218, 228, 219);
    line(60, 390, 540, 390);

    //ketchup
    strokeWeight(10);
    stroke(229, 92, 63);
    line(60, 385, 540, 385);


}

