var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadAnimation("ghost-standing.png","ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 2;
  doorsGroup = new Group();
climbersGroup = new Group();
  ghost =createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addAnimation("running",ghostImg); 
}

function draw() {
  background(200);
  if (keyDown("left_arrow")){
ghost.x = ghost.x -3;
  }
  if (keyDown("right_arrow")){
    ghost.x = ghost.x +3;
      }

  if (keyDown("space")){
 ghost.velocityY= -10
  }

ghost.velocityY = ghost.velocityY +0.8;

  if(tower.y > 600){
      tower.y = 400
    }
    spawnDoors();
    drawSprites();
}
if(climbersGroup.isTouching(ghost)){ 
ghost.velocityY= 0;
}

function spawnDoors(){
  if (frameCount % 240 == 0){
    door= createSprite(200, -50);
    door.addImage(doorImg);

    climber = createSprite(200,10);
    climber.addImage(climberImg);

    door.x= Math.round(random(120,400));
    door.velocityY= 2;

    climber.x = door.x;
    climber.velocityY = 2;

    ghost.depth = door.depth && climber.depth;
    ghost.depth = ghost.depth + 1;

    door.lifetime = 750;
    doorsGroup.add(door);

    climber.lifetime = 750
    climbersGroup.add(climber);
  }
}