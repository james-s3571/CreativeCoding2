class shapes
{
    constructor(x, y, speed, myModel, SoccerTexture, BoxTexture, EllipsoidTexture, ConeTexture, TorusTexture)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myModel = myModel;
        this.SoccerTexture = SoccerTexture;
        this.BoxTexture = BoxTexture;
        this.EllipsoidTexture = EllipsoidTexture;
        this.ConeTexture = ConeTexture;
        this.TorusTexture = TorusTexture;

        this.boxX = 150;
        this.boxY = 0;
        this.boxZ = 0;

        this.ellipsoidX = 150;
        this.ellipsoidY = 0;
        this.ellipsoidZ = 0;
    }

    updateSpeed(speed)
    {
        this.speed = speed;
    }

    updateX(x)
    {
        this.x = x;
    }
    updateY(y)
    {
        this.y = y;
    }

    draw()
    {
        push();
        translate(this.x - 300, this.y - 250);
        scale(100);
        rotateY(frameCount * this.speed);
        smooth();
        noStroke();
        texture(this.SoccerTexture);
        model(this.myModel);
        pop();

        push();
        translate(150, -300);
        texture(this.BoxTexture);
        rotateY(frameCount * this.speed);
        translate(this.boxX, this.boxY, this.boxZ);
        box(75, 75, 75);
        pop();

        push(); 
        translate(250,0);
        texture(this.TorusTexture);
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed);
        translate(300, 0, 0);
        torus(40, 10, 6, 8);
        pop();

        push(); 
        translate(100,300);
        texture(this.EllipsoidTexture);
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed);
        translate(this.ellipsoidX, this.ellipsoidY, this.ellipsoidZ);
        ellipsoid(40, 10, 80, 40, 40);
        pop();

        push(); 
        translate(-50, -350);
        texture(this.ConeTexture);
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed)
        translate(450, 0, 0);
        cone(50, 50, 10, 15, true);
        pop();
        }

        changeShape()
        {
            this.boxX = random(-700, 700);
            this.boxY = random(-700, 700);
            this.boxZ = random(-700, 700);
        
            this.ellipsoidX = random(-700, 700);
            this.ellipsoidY = random(-700, 700);
            this.ellipsoidZ = random(-700, 700);
        }
}