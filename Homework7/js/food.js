class food
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        fill(0, 204, 0);
        ellipse(this.x, this.y, 50, 75);
    }

    move()
    {
        this.x = random(50, 750);
        this.y = random(50, 750);
    }
}