// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

let snake;
let rez = 20;
let food;
let w;
let h;

var jumpSound
var gs1Sound
var PLAY = 1
var gamestate = PLAY

function setup() {
  createCanvas(windowWidth,windowHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function preload(){
  jumpSound = loadSound("jump.mp3");
  gs1Sound = loadSound("gs1.mp3");
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }


}

function draw() {

  scale(rez);

  background("green");
  if (snake.eat(food)) {
    foodLocation();

    gameState = PLAY();
    
    if (gameState === PLAY){
      gs1Sound.play();
    }

  }
  snake.update();
  snake.show();

       

  if (snake.endGame()) {
    background(255, 0, 0);
    print("END GAME");
     jumpSound.play();
    noLoop();
  }


  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}