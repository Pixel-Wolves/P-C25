
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperBall;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width*4,50);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	
	paperBall = new Paper(200,280,100,100);
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperBall.display();

  groundObject.display();
  dustbinObj.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setStatic(paperBall.body,false);
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:300,y:-300})
	}
}

