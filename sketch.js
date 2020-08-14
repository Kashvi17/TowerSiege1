const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
/*
Matter.Engine;
Matter.World;
*/
var ground;
var stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9; 
var polygon;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(800,380,800,30);
  stand = new Ground(400,230,200,20);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  imageMode(CENTER)

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}


function draw() {
  background(255,255,255);  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    slingshot.display();    
  drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}