var square

function setup() {
  createCanvas(400,400);
  square=createSprite(200,200,50,50)
  console.log("Disco Color :D")
}

function draw() 
{
  background(30);
  

if(keyDown("left")){
  background("lightgreen")
  square.shapeColor="green"
}

if(keyDown("right")){
  background("red")
  square.shapeColor="darkred"
}

if(keyDown("down")){
  background("lightblue")
  square.shapeColor="blue"
}

if(keyDown("up")){
  background("yellow")
  square.shapeColor="darkyellow"
}



  drawSprites()
}




