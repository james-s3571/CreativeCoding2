var text;
let myModel;
let SoccerTexture;
let BoxTexture;
let EllipsoidTexture;
let ConeTexture;
let TorusTexture;
var myModelObject;
var rotateSpeed = .02;
var soccerballX = 300;
var soccerballY = 300;


function preload()
    {
        myModel = loadModel("Assets/SoccerBall.obj");
        SoccerTexture = loadImage("Assets/SoccerBallTexture.jpg");
        BoxTexture = loadImage("Assets/ColorTexture.jpg");
        EllipsoidTexture = loadImage("Assets/LeafTexture.jpg");
        ConeTexture = loadImage("Assets/StoneTexture.jpg");
        TorusTexture = loadImage("Assets/WoodTexture.jpg");
    }

function setup() 
    {
        createCanvas(800, 800, WEBGL);
        text = createGraphics(256, 256);
        myModelObject = new shapes(soccerballX, soccerballY, rotateSpeed, myModel, SoccerTexture, BoxTexture, EllipsoidTexture, TorusTexture, ConeTexture)
    }
  
function draw()
    {
        background(100, 200, 240);

        push();
        text.background(255);
        text.textSize(25);
        translate(-295, -320);
        text.text('James Schoenfelder', 5, 100);
        text.text('Sick Sun', 5, 200)
        texture(text);
        plane(200, 150, 1, 1);
        pop();

        pointLight(255, 255, 205, 100, 100, 300);
        ambientLight(100);

        myModelObject.draw();
        
    }

function mousePressed()
{
    myModelObject.changeShape();
}
