var fixedRect,movingRect;

function setup() {
  createCanvas(800,1000);
  fixedRect = createSprite(600, 100, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug  = true;
  movingRect = createSprite(200, 100, 50, 80);
 movingRect.shapeColor = "green";
  movingRect.debug  = true;
  fixedRect.velocityX = -5;
  movingRect.velocityX = 5;
}

function draw() {
  background(255,255,255);  
  
  
  
  Bounceoff(movingRect, fixedRect);
  drawSprites();
}

function Bounceoff(ob1, ob2){
  if(ob1.x - ob2.x < ob1.width/2+ob2.width/2 && 
    ob2.x - ob1.x < ob1.width/2+ob2.width/2){
    ob2.velocityX = ob2.velocityX*(-1);
    ob1.velocityX = ob1.velocityX*(-1);
  }
  if(ob1.y - ob2.y < ob1.height/2+ob2.height/2 && 
    ob2.y - ob1.y < ob1.height/2+ob2.height/2){
      ob2.velocityY = ob2.velocityY*(-1);
      ob1.velocityY = ob1.velocityY*(-1);
  }


}
