
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var groundObject,dustbinObject;

function preload() {
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1300, 675);

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200,450,40);
	groundObject = new Ground(800,height,2000,30);
	dustbinObject = new dustbin(400,250,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject(paperImg);
  dustbinObject(dustbinImg); 

  paperObject.display();
  groundObject.display();
  dustbinObject.display();

  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 } 
	} 



