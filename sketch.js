
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1,dustbin2,dustbin3;

function setup() {
  createCanvas(800,300);
  engine = Engine.create();
  world = engine.world;

dustbin1 = new dustbin(650,230,200,20);
	dustbin2 = new dustbin(750,190,20,100);
  dustbin3 = new dustbin(550,190,20,100);
  paper1 = new paper(50,150,15);
 
  
  ground1 = new ground(400,260,900,20);

  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);

  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();
 
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8,y:-8});
  }
}


