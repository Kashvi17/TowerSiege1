const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
/*
Matter.Engine;
Matter.World;
*/
var ground;
//var stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box1Image, box2Image, box3Image, box4Image, box5Image, box6Image, box7Image, box8Image, box9Image; 
var polygon, polygonImage;

function preload() {
  polygonImage = loadImage("Image/hexagon.png");
  box1Image = loadImage("Image/orange_rectangle.png");
  box2Image = loadImage("Image/orange_rectangle.png");
  box3Image = loadImage("Image/orange_rectangle.png");
  box4Image = loadImage("Image/orange_rectangle.png");
  box5Image = loadImage("Image/orange_rectangle.png");
  box6Image = loadImage("Image/purple_rectangle.png");
  box7Image = loadImage("Image/purple_rectangle.png");
  box8Image = loadImage("Image/purple_rectangle.png");
  box9Image = loadImage("Image/green_rectangle.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,260,250,10);
  //stand = new Ground(400,230,200,20);

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
  background("pink");  
    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 80, 80);
    image(box1Image, 330,235,30,40);
    image(box2Image, 365,235,30,40);
    image(box3Image, 400,235,30,40);
    image(box4Image, 435,235,30,40);
    image(box5Image, 470,235,30,40);
    image(box6Image, 365,190,30,40);
    image(box7Image, 400,190,30,40);
    image(box8Image, 435,190,30,40);
    image(box9Image, 400,145,30,40); 
    ground.display();
    slingShot.display();    
  drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}