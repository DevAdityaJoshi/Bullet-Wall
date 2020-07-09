function setup() {
  createCanvas(800,800);
  

wall_1 = createSprite(700,100,50,50);
wall_2 = createSprite(700,300,50,50);
wall_3 = createSprite(700,500,50,50);
wall_4 = createSprite(700,700,50,50);
bullet_4 = createSprite(100,700,40,20);
bullet_3 = createSprite(100,500,40,20);
bullet_2 = createSprite(100,300,40,20);
bullet_1 = createSprite(100,100,40,20);
}

function draw() {
  background(0,0,0);  

if(keyDown("SPACE")){
  bullet_1.velocityX = 3;
  bullet_2.velocityX = 3;
  bullet_3.velocityX = 3;
  bullet_4.velocityX = 3;
}

createEdgeSprites();
bullet_1.collide(wall_1);
bullet_2.collide(wall_2);
bullet_3.collide(wall_3);
bullet_4.collide(wall_4);

if(bullet_1.isTouching(wall_1)){
  bullet_1.shapeColor = "white";
}



if(bullet_2.isTouching(wall_2)){
  bullet_2.shapeColor = "white";
}



if(bullet_3.isTouching(wall_3)){
  bullet_3.shapeColor = "white";
}



if(bullet_4.isTouching(wall_4)){
  bullet_4.shapeColor = "white";
}



  drawSprites();
}