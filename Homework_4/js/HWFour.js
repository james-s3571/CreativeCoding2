//Dinosaur Animation
var dino = [];
var i = 0;
var myDinosaur

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
} 

// DRAW

function draw()
{
    background(175);
    dino[i].draw();
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