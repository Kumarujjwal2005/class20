var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(200,200,60,80);
  fixedRect.shapeColor ="green";

}
red
function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x <movingRect.width/2 + fixedRect.width/2 &&
     movingRect.y-fixedRect.y <movingRect.height/2 +fixedRect.height/2 &&
     fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}