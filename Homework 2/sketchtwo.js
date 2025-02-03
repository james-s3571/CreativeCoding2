//smallcircle
var cx = 100;
var cy = 100;
var cxspeed = 2;
var cyspeed = 2;

//circletwo
var sx = 200;
var sy = 200;

//square
var sqx = 400;
var sqy = 400;
squaresize = 100;
grow = 2;
 
function setup()
{
    createCanvas(600, 600);
} 

function draw()
{
    fill(231, 218, 209);
    background(191, 163, 114);
    strokeWeight(3);

    fill(171, 47, 80);
    textSize(40);
    text("Chaos and Order", 25, 50);
    text("James Schoenfelder", 25, 575);

    circlemovement();
    circletwomovement();
    squaremovement();
}


function circletwomovement()
{
    sx += random(-5, 5);
    sy += random(-5, 5);
    
    fill(0, 0, 255);
    circle(sx, sy, 30);

    if (sx >= 600 || sx <= 0)
    {
        sx = 200;
    }

    if (sy >= 600 || sy <= 0)
        {
            sy = 200;
        }
}


function squaremovement()
{
    fill(171, 73, 190);
    square(sqx, sqy, squaresize);
    squaresize += grow
    if (squaresize >= 150 || squaresize <= 50)
    {
        grow *= -1;
    }
}



function circlemovement() 
{

if (mouseIsPressed)
    {
        fill(45, 165, 174);
    }
else
    {
        fill(189, 229, 17 );
    }

strokeWeight(2);
circle(cx, cy, 50);
cx += cxspeed; 
cy += cyspeed;

if (cx >= 575 || cx <= 25)
{
    cxspeed *= -1;
}

if (cy >= 575 || cy <= 25)
{
    cyspeed *= -1;
}


}
