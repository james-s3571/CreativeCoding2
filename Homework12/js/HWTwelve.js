var text;
function setup() 
    {
        createCanvas(800, 800, WEBGL);
        text = createGraphics(256, 256);
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

        pointLight(255, 255, 205, 50, 50, 0);

        push(); 
        translate(-300,150);
        specularMaterial(200, 50, 60);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * -0.04);
        box(75, 75, 75);
        pop();

        push(); 
        translate(250,0);
        specularMaterial(250, 145, 0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * -0.05);
        torus(40, 10, 6, 8);
        pop();

        push(); 
        translate(100,300);
        specularMaterial(100, 190, 110);
        rotateX(frameCount * 0.01);
        ellipsoid(40, 10, 80, 40, 40);
        pop();

        push(); 
        translate(-25, 0);
        normalMaterial();
        rotateX(frameCount * -0.08);
        rotateY(frameCount * 0.1)
        rotateZ(frameCount * -0.02)
        sphere(200, 15, 15);
        pop(); 

        push(); 
        translate(-50, -300);
        ambientMaterial(230, 100, 40);
        rotateX(frameCount * -0.02);
        rotateY(frameCount * 0.2)
        cone(50, 50, 10, 15, true);
        pop();
    }
