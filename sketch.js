
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var land
var box
var box2
var box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
ball=new Paper(100,500,30,30);
	land = new Ground(400, 670, 1000, 10);
	box=new Log(560,595,16,120);
	box2 = new Log(660, 655,200, 16);
	box3=new Log(760,595,16,120)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
	
  ball.display();
	land.display(); 
	box.display();
	box2.display();
  box3.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW)
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 110, y: -110 })
}


