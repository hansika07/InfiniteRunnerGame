
// variables
var cycle, cycleimg;
var lane, laneimg;
var gameState = 0;
var t;


function preload(){
laneimg = loadImage("track copy.jpg");
cycleimg = loadImage("cycle.png");
}



function setup() {
  createCanvas(displayWidth - 50, displayHeight-100);
  
  //lane = createSprite(displayWidth/2, displayHeight/2, displayWidth-30, displayHeight*10);
  //lane.addImage(laneimg);
  //lane.scale=10;

  cycle = createSprite(displayWidth/2, displayHeight-200,200,200);
  cycle.addImage(cycleimg);
  cycle.scale=0.2;
}



function draw() {
 background("white");
//lane.display();

image(laneimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
//cycle.display();
if( keyIsDown(UP_ARROW)){
  cycle.y -= 10;
}

camera.position.x = displayWidth/2;
  camera.position.y = cycle.position.y;
drawSprites();
start();
play();
}

function start(){
if(gameState === 0){
  

  
  

  image(laneimg, 0,-displayHeight*4, displayWidth, displayHeight*5);
  //image.scale= 0.8;

  stroke(200);
  fill("red");
  textSize(50);
  text("PRESS SPACE TO START CYCLING", displayWidth/2-480, displayHeight/2);
}
}

function play(){
if(keyCode===32){
  gameState = 2;

  if(gameState===2 ){
    if(keyIsDown(UP_ARROW)){
      cycle += 2;
    }
  image(laneimg, 0,-displayHeight*4, displayWidth, displayHeight*5);
console.log("hey");
  cycle.display();
  
  

  }
  
}
}


