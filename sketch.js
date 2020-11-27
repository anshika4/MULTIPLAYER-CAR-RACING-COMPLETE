var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers = 0;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1Img,car2Img,car3Img,car4Img,ground;
var goldImg,silverImg,bronzeImg;
var passedFinish = false;

function preload()
{
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
  goldImg = loadImage("images/gold.png");
  bronzeImg = loadImage("images/bronze.png");
  silverImg = loadImage("images/silver.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 }


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    game.play();
  }

  if(finishedPlayers === 4)
  {
    game.update(2);
  }

  if(gameState === 2 && finishedPlayers === 4)
  {
    game.displayRanks();
  }


}