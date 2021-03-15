class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':40
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }