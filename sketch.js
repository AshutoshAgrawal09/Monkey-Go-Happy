
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
    foodGroup = createGroup();
    obstaclesGroup = createGroup();

  
  score = 0;
}

 function draw(){


  background(225);
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
   
    food();
   obstacles();
  
  drawSprites(); 
  
   var survivalTime = 0;
  
   stroke("white");
   textSize(20);
   fill("white");
   text("Score: " + score,500,50);
   
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime = Math.ceil(frameCount/frameRate())
   text("Survival Time: " + survivalTime,100,50);
}

function food(){
   if (frameCount % 80 === 0){
     var food = createSprite(600,200,40,10);
      food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(food);
   }

}

function obstacles(){
  if (frameCount % 300 === 0){
   var obstacles = createSprite(600,310,10,40);
   obstacles.velocityX = -(6 + score/100);
 
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.2;
    obstacles.lifetime = 300;
      
   //add each obstacle to the group
    obstaclesGroup.add(obstacles);
  }
}



