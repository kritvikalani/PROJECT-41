const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder, thunder1, thunder2, thunder3, thunder4;
var Umboy;
var umboyImage;
var Drops = []
var maxDrops = 100;
var rand;

function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){
   createCanvas(650,1000)
   engine = Engine.create();
   world = engine.world; 

    if (frameCount%130===0) {
        for(var i=0; i<maxDrops; i++){
            Drops.push(new drops(random(0,400), random(0,400)));
        }
    }

   Umboy = new umbrella(200,700)
}

function draw(){
    background("black");
    Engine.update(engine)

    rand = Math.round(random(1,4))
    if(frameCount%80===0) {
        thunder = createSprite(random(10, 300), random(10, 30))
    switch(rand) {
        case 1: thunder.addImage(thunder1)
        break;
        case 2: thunder.addImage(thunder2)
        break;
        case 3: thunder.addImage(thunder3)
        break;
        case 4: thunder.addImage(thunder4)
        break;
        default: break;
      }
      thunder.scale = random(0.3, 0.6)
    }

    if(frameCount % 90 === 0 && thunder) {
        thunder.destroy()
    }

    for(var i=0; i< maxDrops; i++){
        Drops[i].display();
        Drops[i].update();
        }

    Umboy.display();
    drawSprites();
    //thunder.display();
}   

