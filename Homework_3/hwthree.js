// Burger One Variables
let Burger1;
var b1x = 100;
var b1y = 100;

// Burger Two Variables
let Burger2;
var b2x = 500;
var b2y = 500;


function preload()
{
    AIBurger = loadImage('Images/AIBurger.jpg');
    Burger1 = loadImage('Images/BurgerOne.jpg');
    Burger2 = loadImage('Images/BurgerTwo.jpg');
    FuturaFont = loadFont("Fonts/16020_FUTURAM.ttf");
    MistralFont = loadFont("Fonts/Mistral.ttf");
}


function setup()
{
    createCanvas(1200, 800);

    setInterval(Burger2Move, 250);
} 


function draw()
{
    background(173, 133, 108);
    strokeWeight(3);
    fill(231, 218, 209);

    // AIBURGER
    image(AIBurger, 800, 400, 250, 250);

    // BURGERONE
    BurgerOneMove();

    // BURGERTWO
    image(Burger2, b2x, b2y, 200, 200);

    
    // TEXT
    fill(171, 47, 80);
    textFont(FuturaFont);
    textSize(65);
    text("Hamburger Four", 25, 70);
    textSize(75);
    textFont(MistralFont);
    text("James Schoenfelder", 25, 760);

    // CREATEDBURGER
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
    
    // FUNCTIONS

    function BurgerOneMove()
    {    
    b1x += random(-5, 5);
    b1y += random(-5, 5);

    fill(0, 0, 255);
    image(Burger1, b1x, b1y, 200, 200);

    if (b1x >= 1200 || b1x <= 0)
    {
        b1x = 200;
    }

    if (b1y >= 800 || b1y <= 0)
        {
            b1y = 200;
        }
    }

function Burger2Move()
{
    b2x += 10;
    if (b2x >= 900)
    {
        b2x = 500;
    }
}


