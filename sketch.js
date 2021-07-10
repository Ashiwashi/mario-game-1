var backgroundimg;
var bgimg;
var gameState = "play";
var mario, marioimg;
var ground;

function preload(){

bgimg = loadImage("images/day.jpg");
marioimg = loadAnimation("images/walk1.png", "images/walk2.png", "images/walk3.png");

}
function setup() {
  createCanvas(1400,600);
  ground = createSprite(700, 600, 1400, 20);

  backgroundimg = createSprite(700, 300, 1400, 600);
  backgroundimg.addImage(bgimg);

  backgroundimg.velocityX = - 6;
 
  mario = createSprite(50, 550);
  mario.addAnimation("player", marioimg);

}

function draw() {
  background("black");  
  

  if (gameState === "play"){

    if (backgroundimg.x < 500){

      backgroundimg.x = 700;

      

    }


    if (keyDown ("SPACE")){

      mario.velocityY = - 10;


    }

    mario.velocityY = mario.velocityY + 1

  }
  
  

  else if (gameState === "end"){



  } 
  
  mario.collide(ground);
  drawSprites();
}