class Me {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.1,
            'density' : 0.1,
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world , this.body);
    }
    dsiplay(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}