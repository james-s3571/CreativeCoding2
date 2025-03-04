//Dinosaur Animation
var dino = [];
var dinorun = [];
var i = 0;
var myFood;
var myDinosaur;
var x = 100;
var y = 100;
var foodArray = [];
var flip = false;
var idleStrings = [];
var runStrings = [];
var score = 0;
var timer = 25;

//PRELOAD

function preload()
{
    idleStrings = loadStrings("Text/idle.txt");
    runStrings = loadStrings("Text/run.txt");

    /*for(var i = 0; i < 10; i++)
    {
        myDinosaur = new dinosaur("Images/Idle_(" + i + ").png");
        dino.push(myDinosaur)
    }
    */
}

//SETUP

function setup()
{
    createCanvas(800, 800);

    for (let i = 0; i < idleStrings.length; i++) 
    {
        myDinosaur = new dinosaur(idleStrings[i], x, y);
        dino.push(myDinosaur);
        myDinosaur = new dinosaur(runStrings[i], x, y);
        dinorun.push(myDinosaur);
    }

    setInterval(updateIndex, 60);
    for (let i = 0; i < 5; i++) 
    {
        myFood = new food(random(100, 600), random(100, 600), 50, 75);
        foodArray.push(myFood);
        setInterval(() => myFood.move(), random(1000, 5000));
    }

    setInterval(() => 
        {
            if (timer > 0) 
            {
                timer--;
            } 
        }, 1000);
} 

// DRAW

function draw()
{
    background(175);

    fill(0, 0, 0);
    textSize(32);
    text("Score: " + score, 10, 30);

    textSize(32);
    text("Time Left: " + timer, 10, 60);

    for (let i = 0; i < foodArray.length; i++)
    {
        foodArray[i].draw();
    }

    if (keyIsPressed)
    {
        dinorun[i].draw();
        if (key == "a")
        {
            x--;
            flip = true;
        }
        if (key == "d")
        {
            x++;
            flip = false;
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
            dino[i].flip = flip;
            dino[i].x = x;
            dino[i].y = y;
            dinorun[i].flip = flip;
            dinorun[i].x = x;
            dinorun[i].y = y;
        }

        for (let k = 0; k < foodArray.length; k++) 
        {
            if (dino[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) 
                {
                    foodArray.splice(k, 1);   
                    score++;
                }    
        }
    }    
        else
        {
            dino[i].draw();
        }
        
        if(timer == 0)
        {
            fill(0, 0, 0);
            textSize(100);
            text("Time's Up!", 50, 400);
            score -= 2;
            //dino[i].x = 1000
            //dinorun[i].x = 1000
        }

        if(score == 5)
            {
                fill(0, 0, 0);
                textSize(100);
                text("You Win!", 50, 400);
                timer += 2;
                //dino[i].x = 1000
                //dinorun[i].x = 1000
            } 
}
    
// FUNCTIONS

    function updateIndex()
    {
        /*i++;
        if(i > 9)
        {
            i = 0;
        }
        */

        i++;
        if (i > idleStrings.length-1) 
        {
            i = 0;
        }
    }