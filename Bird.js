class Bird extends BaseClass {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    console.log(Bird)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
