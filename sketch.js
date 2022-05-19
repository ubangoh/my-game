const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ball
var g
var world,engine
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var options = {
  density : 0.01,
  restitution: 0.3
}
ball=Matter.Bodies.circle(200, 300, 50, options)
g= new Ground(400,600,800,30)

World.add(world,ball)


  ellipseMode(CENTER)
  rectMode(CENTER);

}


function draw() {
  Engine.update(engine)
  background(0);
 g.show();
 ellipse(ball.position.x,ball.position.y,50,50)
}
 