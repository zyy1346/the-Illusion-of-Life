let canvas;
let button;

let ticket = 0;
let voteing = false;

let unhappy = 0;
let happy = 1;
let starState = unhappy;

let starX;
let starY;
let starDis;
let star

function setup() {

  canvas = createCanvas(500, 500);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  starX = width/2;
  starY = height/2;
  starDis = width/6;

  addGUI();
}

function draw() {
  background(0);
  noStroke();
  if(starState == unhappy){
    fill(255,255,0);
    if(starDis > width/4){
      starState = happy;
    }

  }else if(starState == happy){
    fill(255,0,0);
    if(starDis > width/6){
      if(frameCount % 2 == 0) starDis--; 
    }else{
      starState = unhappy;
    }
  }

  circle(starX,starY,starDis);
  fill(255,210,0);
  let centerOffset = starDis/2;
  circle(starX,starY,centerOffset,3);


  if(ticket > 0 ){
    if(frameCount % 30 < 15 && starState == unhappy){
      getticket();
    }

    fill(255,0,127);
    rect(starX,starY+ticket,ticket,ticket/2);

  }else if(voteing){
    voteing = false;
    button.html("vote");
    button.removeClass("inactive");
  }
  

}

function getticket(){

  fill(0);
  circle(starX,starY,star/2);
  ticket --;
  starDis++;

}

function addGUI()
{

  //add a button
  button = createButton("Vote");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    if(!voteing){
      ticket = random(40,80);
      voteing = true;
      button.html("Voteing");
      button.addClass("inactive");
    }
    
}