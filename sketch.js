const World=Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var car1, car2, cat, dog, tree, track1, track2, bg1sprite;
//images
var car1Img, car2Img, catImg, dogImg, bg1, bg2, trackImg, treeImg, bg1spriteImg,bg2spriteImg;

var groundCount1 = 0, groundCount2 = 0;
var count = 100;

var lives = 3, charge = 3, trees=3, buildings=3;

var life;
var tree;
var building, buildingImg;
var gameState = "play";
var chargeImg;

var strayGroup, treeGroup, buildingsGroup, livesGroup, chargeGroup;
function preload(){
  car1Img = loadImage("photos/car1.png");
  car2Img = loadImage("photos/car1.png");
  bg1 = loadImage("photos/background1.jpeg");
  bg2 = loadImage("/photos/background2.jpeg");
  catImg = loadAnimation("photos/cat1.png", "photos/cat2.png", "photos/cat3.png", "photos/cat4.png");
  dogImg = loadAnimation("photos/dog1.png", "photos/dog2.png", "photos/dog3.png", "photos/dog4.png")
  treeImg = loadImage("photos/fallentree.jpeg");
  trackImg = loadImage("photos/track.jpeg");
  life = loadImage("photos/lives.png");
  chargeImg = loadImage("photos/electricity.png");
  buildingImg = loadImage("photos/building.jpeg");
}

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  track1 = createSprite(350,750,500,400);
  track1.addImage(trackImg);
  track1.scale = 1;

  track2 = createSprite(1075,700,500,400);
  track2.addImage(trackImg);
  track2.scale = 0.7;

  background1 = createSprite(455, 275, 700, 1000);
  background1.addImage(bg1);
  background1.scale = 1.5;

  //background2 = createSprite(1143, 295, 700, 1000);
  //background2.addImage(bg2);
  //background2.scale = 1.25;
  
  car1 = createSprite(350, 750, 50, 50);
  car1.addImage(car1Img);
  
  car2 = createSprite(1050,750,50,50);
  car2.addImage(car2Img);
  
  midEdge = createSprite(700,400,10,800);

  buildingsGroup = new Group();
  treeGroup = new Group();
  chargeGroup = new Group();
  livesGroup = new Group();
  strayGroup = new Group();
}

function draw() {
  background(0); 
  Engine.update(engine);
  //console.log(groundCount1);

  //CONTROLS OF THE CAR1
  if(keyDown(UP_ARROW)&&track2.y<800){
    track2.y = track2.y+3;

    //RELOADING GROUND
    if(groundCount2 < count){
      if(track2.y>710){
        track2.y = 700;
        groundCount2++;
      }
    }
  }

   //CONTROLS OF THE CAR2
   if(keyDown("w")&&track1.y<800){
    track1.y = track1.y+3;
    
    if(groundCount1 < count){
      //RELOADING GROUND
      if(track1.y>710){
        track1.y = 700;
        groundCount1++;
      }
    }
  }
  

  if(keyDown(RIGHT_ARROW) && car2.x<1350){
    car2.x = car2.x + 3;
  }

  if(keyDown(LEFT_ARROW) && car2.x > 750){
    car2.x = car2.x - 3;
  }

  if(keyDown("a") && car1.x>50){
    car1.x = car1.x - 3;
  }

  if(keyDown("d") && car1.x < 650){
    car1.x = car1.x + 3;
  }

  
  if(groundCount1===Math.round(count/4) || groundCount1===Math.round(count/2) || groundCount1===Math.round(3*count/4)){
    strays1();
    groundCount1++
  }


  if(groundCount2===Math.round(count/4) || groundCount2===Math.round(count/2) || groundCount2===Math.round(3*count/4)){
    strays2();
    groundCount2++      
  }

  if(groundCount2===Math.round(count/5) || groundCount2===Math.round(9*count/10) || groundCount2===Math.round(3*count/5)){
    trees1();
    groundCount1++      
  }

  if(groundCount2===Math.round(count/5) || groundCount2===Math.round(9*count/10) || groundCount2===Math.round(3*count/5)){
    trees2();
    groundCount2++      
  }

  if(groundCount2===Math.round(7*count/10)){
    buildings2();
    groundCount1++      
  }

  if(groundCount2===Math.round(7*count/10)){
    buildings2();
    groundCount2++      
  }
  

  lifeBar1();
  lifeBar2();
  chargeBar1();
  chargeBar2();
  drawSprites();
}