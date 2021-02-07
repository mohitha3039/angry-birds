const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine , ground 
var box1,box2



function setup() {
  createCanvas(800,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;
 ground = new Ground ()
 box1 = new Box ()



}

function draw() {
  background("black"); 
  Engine.update(myEngine)
ground.display ()
box1.display ()


   
}


