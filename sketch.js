//popup on completion

//essentially backend stuff
function setup() {
  createCanvas(400, 400);
  
  //gets num1
  num1 = createInput();
  num1.position(20,20);
  
  //gets num2
  num2 = createInput();
  num2.position(20,80);
  
  //store answer value
  answer = 0;
  
  //creates add button
  add = createButton('Add');
  add.position(20, 160);
  add.mousePressed(triggerAdd);
  
  //creates subtraction button
  subtraction = createButton('Subtract');
  subtraction.position(20, 200);
  subtraction.mousePressed(triggerSubtract);
  
  //creates multiplication button
  multiplication = createButton('Multiply');
  multiplication.position(20, 240);
  multiplication.mousePressed(triggerMultiply);
  
  //creates division button
  division = createButton('Division');
  division.position(20, 280);
  division.mousePressed(triggerDivision);
}

//essentially frontend stuff
function draw() {
  background(220);
  
  //text representation of num1
  textSize(16);
  text("You input: " + num1.value(), 20, 60)
  text("for your first value", 116, 60)
  
  //text representation of num2
  textSize(16);
  text("You input: " + num2.value(), 20, 120)
  text("for your second value", 120, 120)
  
  //display answer
  textSize(30)
  text("The answer is...", 140, 180)
  text(answer, 140, 220);
  
}

//gives functionality to addition button
function triggerAdd(){
  answer = int(num1.value()) + int(num2.value());
}

//gives functionality to subtraction button
function triggerSubtract(){
  answer = int(num1.value()) - int(num2.value());
}

//gives functionality to multiplication button
function triggerMultiply(){
  answer = int(num1.value()) * int(num2.value());
}

//gives functionality to division button
function triggerDivision(){
  answer = int(num1.value()) / int(num2.value());
}

