
var spaceShip , missile,scene;
var spaceShipImage, missileImage,asteroidImage,UFOImage, spaceImg;
var score=0


function preload(){
   spaceImg = loadImage("space.png")
   asteroidImage = loadImage("asteroid.png");
   UFOImage=loadImage("UFO.png")
  spaceShipImage = loadImage("spaceShip.png");
  missileImage = loadImage("missile.png");
}

function setup() {
    createCanvas(400, 400);
  
    //creating background
    scene = createSprite(0,0,400,400);
    scene.addImage(spaceImg);
    scene.scale = 2.5
    
    // creating bow to shoot arrow
    spaceShip = createSprite(20,180,20,50);
    spaceShip.addImage(saceShipImage); 
    spaceShip.scale = 1;

    score=0
}

function draw() {
    createCanvas(windowWidth,windowHeight);
    background(0);

    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  spaceShip.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createMissile();
  }
 }