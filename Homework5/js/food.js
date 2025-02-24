class food
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        fill(215, 164, 58);
        ellipse(this.x, this.y, 50, 75);
    }
}