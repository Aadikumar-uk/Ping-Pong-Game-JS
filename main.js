function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  background("red");
  fill("grey")
  rect(200,200,10,10);
  rect(0,160,10,75);
  rect(390,mouseY,10,75);
  textSize(16)
  text("Created by Aadi Kumar",150,50)
  
}
