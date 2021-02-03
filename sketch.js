const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	b1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	b2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	b3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	b4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	b5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	



	rope1=new rope(b1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(b2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(b3.body,roofObject.body,0, 0)
	rope4=new rope(b4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(b5.body,roofObject.body,bobDiameter*2, 0)

	
	Engine.run(engine);	


  
}


function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

  	}
}
