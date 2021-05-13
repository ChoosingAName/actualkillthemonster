const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var killthemonster1;
var firemonster;
var platform;
var invisiblestring;
var bg
var killthemonsterimage

function preload() {
  bg = loadImage("gamingbackground2.png");
  killthemonsterimage = loadImage("superhero1.png")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  killthemonster1 = new killthemonster(400,800,250);
  invisiblestring = new String(killthemonster1.body,{x:500,y:50});
  firemonster = new Monster(1100,550,300);

  box1 = new Box(600,100,70,70);
  box2 = new Box(600,80,70,70);
  box3 = new Box(600,60,70,70);
  box4 = new Box(600,40,70,70);
  box5 = new Box(600,20,70,70);
  box6 = new Box(600,10,70,70);
  box7 = new Box(600,1,70,70);
  box8 = new Box(900,100,70,70);
  box9 = new Box(900,80,70,70);
  box10 = new Box(900,60,70,70);
  box11 = new Box(900,40,70,70);
  box12 = new Box(900,20,70,70);
  box13 = new Box(900,10,70,70);
  box14 = new Box(900,1,70,70);
  box15 = new Box(750,100,70,70);
  box16 = new Box(750,80,70,70);
  box17 = new Box(750,60,70,70);
  box18 = new Box(750,40,70,70);
  box19 = new Box(750,20,70,70);
  box20 = new Box(750,10,70,70);
  box21 = new Box(750,1,70,70);

}

function draw() {
  background(bg);
  Engine.update(engine);

  textSize(40);
  text("kill the monster by dragging the hero", 20,40);
  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  killthemonster1.display();
  invisiblestring.display()
  firemonster.display();



}

function mouseDragged(){

  Matter.Body.setPosition(killthemonster1.body, {x:mouseX , y:mouseY});
}


