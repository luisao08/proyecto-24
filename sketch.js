const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7;
var hierro1;
var stone1;
var circle1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(250,300,4);
    rubber2 = new Rubber(255,300,4);
    rubber3 = new Rubber(260,300,4);
    rubber4 = new Rubber(265,300,4);
    rubber5 = new Rubber(270,300,4);
    rubber6 = new Rubber(275,300,4);
    rubber7 = new Rubber(280,300,4);
    hierro1 = new Hierro(400,400);
    stone1 = new Stone(550,400);
    circle1 = new Circle(650,400,60)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    hierro1.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    plane.display();
    hammer.display();
    stone1.display();
    circle1.display();
    
 
}