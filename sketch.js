var sea, ship;
var seaImg, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1png","ship-2png","ship-3png","ship-4png");
}

function setup(){
  createCanvas(400,400);
  
  spriteName.addImage(seaImg);

}

function draw() {
  background("blue");
    drawSprites();

    if(sea.x < 0){
      sea.x = sea.width/2;
    }

}
