class Paper{
    constructor(x,y,width,height){
		var options={
            isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
        this.image = loadImage("paper.png");
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		World.add(world, this.body);;
    }

    display(){
        var myPosition=this.body.position;		
        push()
        imageMode(CENTER)
        strokeWeight(4);
        image(this.image, myPosition.x, myPosition.y, this.width, this.height);
        pop()
    }
}