class Paper {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': false,
            'restitution': 0.5,
            'friction': 0.3,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, 26, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("magenta")
        strokeWeight(1)
        fill("magenta");
        ellipse(0, 0, this.width, this.height);
        pop();
    }

    
}

