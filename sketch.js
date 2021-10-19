var bgimg
var astronaut



function preload (){
bgimg = loadImage("images/iss.png")
sleep = loadAnimation("images/sleep.png")
brush = loadAnimation("images/brush.png")
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png")
//drink = loadAnimation("imeges/drink1.png","images/drink2.png")
move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")
bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png")
}

function setup() {
  createCanvas(400, 400);

  astronaut=createSprite(300,230,20,20)
 astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bgimg);





  drawSprites();
}

function keyPressed(){
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat)

    astronaut.changeAnimation("eating")
  }
  

  
    if(keyDown(DOWN_ARROW)){
      astronaut.addAnimation("gyming",gym)
  
      astronaut.changeAnimation("gyming")
    }



  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush)

    astronaut.changeAnimation("brushing")
      }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath)

    astronaut.changeAnimation("bathing")  

}
if(keyDown("M")){
  astronaut.addAnimation("moving",move)

  astronaut.changeAnimation("moving")  

}
  }

