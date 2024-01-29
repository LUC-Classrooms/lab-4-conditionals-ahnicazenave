function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed == true){ // true or false?
    fill("orange");// if true, change the fill color here
    
  }
  else { 
    fill(255)// otherwise do this:
    
  }
  ellipse(width/2, height/2, 100, 100);
}
