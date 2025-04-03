var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var StopSign;
var StopSignImage;
var Sign = 0;
var myFood;
var foodArray = [];
var score = 0;
var health = 10;
var myBadFood;
var badfoodArray =[];

function preload()
{
    //MUSIC
    soundFormats('mp3', 'wav');
    GoodSong = loadSound('Sounds/AteGoodFood.wav');
    BadSong = loadSound('Sounds/AteBadFood.mp3');
    BackgroundSong = loadSound('Sounds/Background.wav');

    idlePaths = loadStrings("Text/idle.txt");
    walkPaths = loadStrings("Text/run.txt");
    attackPaths = loadStrings("Text/attack.txt");
}

function setup()
{
    createCanvas(800,800);
    myAnimation = new Dinosaur( 0, 0, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);
    //GOODFOOD
    for (let i = 0; i < 4; i++) 
        {
            myFood = new food(random(100, 600), random(100, 600), 50, 75);
            foodArray.push(myFood);
        }
    //BADFOOD
    for (let i = 0; i < 2; i++) 
        {
            myBadFood = new badfood(random(100, 600), random(100, 600), 50, 75);
            badfoodArray.push(myBadFood);
        }    
}

// display all the frames using the draw function as a loop
function draw() 
{

    background(120);
    fill(0, 0, 0);
    textSize(32);
    text("Score: " + score, 10, 30);
    text("Health: " + health, 10, 60);

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

    //STOP SIGN
    if (Sign < 3)
    {
    MakeStopSigns();
    Sign += 1;
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
                        if(myAnimation.isColliding(foodArray[k].Food))
                    {
                        foodArray[k].Food.remove();
                        score+=5;
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
                    if(myAnimation.isColliding(badfoodArray[k].FoodBad))
                    {
                        badfoodArray[k].FoodBad.remove();
                        health-=5;
                        BadSong.play();
                    }     
                }

    //MOVEMENT
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(StopSign))
            {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }            
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');    
    }
    else if (kb.pressing('w'))
    {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('s')) 
    {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }
    else if(kb.pressing('e'))
    {
        myAnimation.drawAnimation('attack')
        console.log("Attack animation triggered");
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage.position.x, catImage.position.y) < 200)
        {
            catImage.remove();
            catImage = null;
        }
            
    }
    else
    {
        myAnimation.drawAnimation('idle');
    }
    
    if(score >= 10)
        {
            fill(0, 0, 0);
            textSize(100);
            text("You Win!", 50, 400);
            health+=1;
        }

    if(health <= 0)
        {
            fill(0, 0, 0);
            textSize(100);
            text("You Lose!", 50, 400);
            score-=1;
        }        
}
//FUNCTIONS
function MakeStopSigns()
    {
        StopSign = createSprite(random(100, 700), random(100, 700), 100, 100, 'static');
        StopSign.img = "Images/StopSign.jpg";
        StopSign.scale = .09;
        StopSign.diameter = 200;
    }

