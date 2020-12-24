class drops{
    constructor(x,y) {
        var options = {
            isStatic: false,
            'restitution': 0.8,
            'friction': 0.4,
            'density': 0.7
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius = 5;

        World.add(world, this.rain)
    }
    display() {
        var angle = this.rain.angle;
        push();
        translate(this.rain.position.x, this.rain.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.rain.position.x, this.rain.position.y, this.radius);
        pop();
    }
    update() {
        if(this.rain.position.y > 1000){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }
}