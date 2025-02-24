class dinosaur
{
    constructor(path)
    {
        this.path = path;
        this.myImage = loadImage(this.path);
        this.x = x;
        this.y = y;
        this.imageWidth = 150;
        this.imageHeight = 200;
    } 

    draw()
    {
        image(this.myImage, this.x, this.y, 150, 200);  
    }

    hasCollided(x2, y2, w2, h2) 
    {
        return (
          this.x < x2 + w2 &&
          this.x +  this.imageWidth > x2 &&
          this.y < y2 + h2 &&
          this.y + this.imageHeight > y2
        );
    }
}