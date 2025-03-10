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
var myBadFood;
var badfoodArray = [];
var GoodSong;
var BadSong;
var BackgroundSong;

//PRELOAD

function preload()
{
    //MUSIC
    soundFormats('mp3', 'wav');
    GoodSong = loadSound('Sounds/AteGoodFood.wav');
    BadSong = loadSound('Sounds/AteBadFood.mp3');
    BackgroundSong = loadSound('Sounds/Background.wav');
    
    //STRINGS
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

    //GOOD FOOD
    setInterval(updateIndex, 60);
    for (let i = 0; i < 4; i++) 
    {
        myFood = new food(random(100, 600), random(100, 600), 50, 75);
        foodArray.push(myFood);
        setInterval(() => myFood.move(), random(6000, 10000));
    }

    setInterval(() => 
        {
            if (timer > 0) 
            {
                timer--;
            } 
        }, 1000);

    //BAD FOOD
    setInterval(updateIndex, 60);
    for (let i = 0; i < 2; i++) 
    {
        myBadFood = new badfood(random(100, 600), random(100, 600), 50, 75);
        badfoodArray.push(myBadFood);
        setInterval(() => myBadFood.move(), random(6000, 10000));
    }

    mousePressed();
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

    //GOOD FOOD
    for (let i = 0; i < foodArray.length; i++)
    {
        foodArray[i].draw();
    }

    //BAD FOOD
    for (let i = 0; i < badfoodArray.length; i++)
    {
        badfoodArray[i].draw();
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

        //GOOD FOOD
        for (let k = 0; k < foodArray.length; k++) 
        {
            /*if (dino[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) 
                {
                    foodArray.splice(k, 1);   
                    score++;
                }
            */    
            if (collideRectRect(dino[i].x, dino[i].y, dino[i].imageWidth, dino[i].imageHeight,foodArray[k].x, foodArray[k].y, 25, 25)) 
            {
                foodArray.splice(k, 1);
                score++;
                GoodSong.play();
            }     
        }
        //BAD FOOD
        for (let k = 0; k < badfoodArray.length; k++) 
        {
            /*if (dino[i].hasCollided(badfoodArray[k].x, badfoodArray[k].y, 25, 25)) 
                {
                    badfoodArray.splice(k, 1);   
                    score--;
                }
            */
            if (collideRectRect(dino[i].x, dino[i].y, dino[i].imageWidth, dino[i].imageHeight,badfoodArray[k].x, badfoodArray[k].y, 25, 25)) 
            {
                badfoodArray.splice(k, 1);
                score--;
                BadSong.play();
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

        if(score == 3)
            {
                fill(0, 0, 0);
                textSize(100);
                text("You Win!", 50, 400);
                timer += 2;
                //dino[i].x = 1000
                //dinorun[i].x = 1000
            }
        fill(50, 41, 160, 123);
        setCenter(400, 400);
        polarPentagons(7, 50, 100);

        fill(40, 41, 166, 50);
        polarTriangles(90, 70, 400);
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

    function mousePressed() 
    {
        if(BackgroundSong.isPlaying())
            {
              BackgroundSong.pause();
            }
            else
            {
              BackgroundSong.play();
            }
    }