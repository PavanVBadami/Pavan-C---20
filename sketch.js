var fixrect, movrect;

function setup() {
  createCanvas(1200,800);

  fixrect = createSprite(600,400,50,80);
  fixrect.shapeColor = "green"; 
  movrect = createSprite(400,200,80,30);
  movrect.shapeColor = "green";
  
}

function draw() {

 

  background(255,255,255);  

  movrect.y = World.mouseY;
  movrect.x = World.mouseX;

if(movrect.x - fixrect.x < movrect.width/2 + fixrect.width/2 &&
  fixrect.x - movrect.x < movrect.width/2 + fixrect.width/2 &&
  movrect.y - fixrect.y < movrect.height/2 + fixrect.height/2&&
  fixrect.y - movrect.y < movrect.height/2 + fixrect.height/2){
  fixrect.shapeColor = "red"; 
  movrect.shapeColor = "red";

} 

else{

  fixrect.shapeColor = "green"; 
  movrect.shapeColor = "green";

}


  drawSprites();
}