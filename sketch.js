const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder;
var Umboy;
var umboyImage;
var Drops = []
var maxDrops = 100;

function preload(){
    //umboyImage = loadImage("walking_1.png")
    /*thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")*/
}

function setup(){
   createCanvas(650,1000)
   engine = Engine.create();
   world = engine.world; 


   for(var i=0; i<maxDrops; i++){
       Drops.push(new drops(random(0,400), random(0,400)));
   }
   Umboy = new umbrella(200,700)
}

function draw(){
    background("black");
    Engine.update(engine)

    if(frameCount%20===0) {
    switch(thunder) {
        case 10: thunder= loadImage("1.png")
        break;
        case 20: thunder= loadImage("2.png")
        break;
        default: break;
      }
    }

    for(var i=0; i<Drops.length; i++){
        Drops[i].display();
        Drops[i].update();
        }

    Umboy.display();
    drawSprites();
    //thunder.display();
}   

