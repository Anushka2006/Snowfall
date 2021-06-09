var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var bg;
var particles = [];
var par2 =[];

function preLoad(){
  bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  //create division objects
  

  for(var h=125; h<=135; h=h+5){
    particles.push(new particle(h,75));
  }
  
 

  

  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  //ground.display();
  
  if(frameCount%40===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10))
  }
  //display the plinkos 
  
   for (var h=0; h< particles.length; h++){
     particles[h].display();
   }

   
   
  //display the divisions
  
  //display the paricles 
 //p1.display();
 //p2.display();
}