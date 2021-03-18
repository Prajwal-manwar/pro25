class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,  options)
    this.image = loadImage("paper.png")
    World.add(world, this.body)    
}
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        scale(0.05)
        fill("pink");
        image(this.image, 0, 0);
        pop();
    }
}