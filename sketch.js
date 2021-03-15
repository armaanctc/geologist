var ground,stone,iron,rubber,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,hammer;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
     
	
	ground = new Ground(650,600,1300,10);
	stone = new Stone(600,450,100,80);
	iron = new Iron(200,350);
	rubber  =new Rubber(1000,570,60);
	hammer  =new Hammer(50,100);

	sand1 = new Sand(400,400,10);
	sand2 = new Sand(410,400,10);
	sand3 = new Sand(415,400,10);
	sand4 = new Sand(420,400,10);
	sand5 = new Sand(430,400,10);
	sand6 = new Sand(435,400,10);
	sand7 = new Sand(445,400,10);
	sand8 = new Sand(450,400,10);
	sand9 = new Sand(465,400,10);
	sand10 = new Sand(475,400,10);
	

	Engine.run(engine);
  
}


function draw() {
  
  background("cyan");

  hammer.display();
  iron.display();
  stone.display();
  rubber.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}



