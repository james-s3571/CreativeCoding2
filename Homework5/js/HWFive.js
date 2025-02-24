//Dinosaur Animation
var dino = [];
var i = 0;
var myDinosaur
var x = 100;
var y = 100;
var foodArray = [];

//PRELOAD

function preload()
{
    for(var i = 0; i < 10; i++)
    {
        myDinosaur = new dinosaur("Images/Idle_(" + i + ").png");
        dino.push(myDinosaur)
    }
}

//SETUP

function setup()
{
    createCanvas(800, 800);
    setInterval(updateIndex, 60);
    for (let i = 0; i < 5; i++) 
    {
        myFood = new food(random(100, 600), random(100, 600), 50, 75);
        foodArray.push(myFood);
    }
} 

// DRAW

function draw()
{
    background(175);
    dino[i].draw();
    for (let i = 0; i < foodArray.length; i++)
    {
        foodArray[i].draw();
    }

    if (keyIsPressed)
    {
        if (key == "a")
        {
            x--;
        }
        if (key == "d")
            {
                x++;
            }
        if (key == "s")
            {
                y++;
            }
        if (key == "w")
            {
                y--;
            }
        for (let i = 0; i < 10; i++)
        {
            dino[i].x =x;
            dino[i].y = y;

        }

        for (let k = 0; k < foodArray.length; k++) 
        {
            if (dino[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) 
                {
                    foodArray.splice(k, 1);    
                }    
        }
        

    }
}
    
// FUNCTIONS

    function updateIndex()
    {
        i++;
        if(i > 9)
        {
            i = 0;
        }
    }