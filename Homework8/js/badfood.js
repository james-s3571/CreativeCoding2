class badfood
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.FoodBad = createSprite(x, y, 50);
    }

    draw()
    {
        fill(153, 0, 0);
        ellipse(this.x, this.y, 50, 75);
    }

    move()
    {
        this.x = random(50, 750);
        this.y = random(50, 750);
    }
}