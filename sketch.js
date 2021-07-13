const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


let left_wall;
let right_wall;

var bottom_wall;
var top_wall;
var ball;

var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  world = engine.world;
  ball = new Ball(200,200,20)

  button1 = createImg('up.png');
  button1.position(220,30);
  button1.size(50,50)
  button1.mouseClicked(vForce);


  button2 = createImg('right.png');
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(hForce);
  
 

 
  
bottom_wall = new Ground(200, 390, 400, 20); 
  
top_wall = new Ground(200,10,400,20)
left_wall = new Ground(10,200,20,400)
right_wall = new Ground(390,200,20,400)
  
}

function draw() 
{
  background("lightblue");
  Engine.update(engine);

  bottom_wall.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();

  ball.show();
  
}

function vForce(){

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0,y:-0.5})
}


function hForce() {

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.5, y:0})
}



