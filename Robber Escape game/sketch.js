var theif
var theifImg, theifFlippedImg, bgImg




function preload(){
theifImg = loadImage("./Photos/Theif.png");
theifFlippedImg = loadImage("./Photos/Theif Flipped.png");
bgImg = loadImage("./Photos/Road.webp");
}



function setup(){
  createCanvas(500,100)
  theif = createSprite(43, 70, 100, 100);
  theif.addImage("theif", theifImg);
  theif.scale = 0.3
}



function draw(){
  background(bgImg)
  drawSprites()
}

