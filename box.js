class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
  
  display() {
    //console.log(this.body.speed);
    if(this.body.speed < 3){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
      }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      pop();
    }
    
  }

}