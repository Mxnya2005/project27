
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new Roof(width/2,height/4,300,20 )
bob1= new Bob(320,500,25);
bob2= new Bob(380,500,25)
bob3= new Bob(420,500,25);
bob4= new Bob(500,500,25)
bob5= new Bob(580,500,25)
rope1= new Rope(bob1.body,roof.body,-80,30)
rope2=new Rope(bob4.body,roof.body,-40,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
  drawSprites();
 
}



