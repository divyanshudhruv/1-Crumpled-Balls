class Ground {
    constructor(x, y, width, height) {
        var options = {
            'isStatic':true,
            'restitution': 0.1,
            'friction': 0.3,
            'density': 0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 1000;
        this.height = 10;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        stroke("yellow");
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
    }
};
/*class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("green");
    strokeWeight(4);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
*/