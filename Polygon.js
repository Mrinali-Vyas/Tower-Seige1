class Polygon{
    constructor(x, y, width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        fill(255,255,0);
        rect(x, y, width,height);
        pop();
      }
}