var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var score
var cars, car1, car2, car3, car4, fruits, fruitGroup, plr1s, plr2s;
var track, car1_img, car2_img
var banana_img,apple_img,melon_img,orange_img
var banana, melon, apple, orange, w, h 
function preload(){
  track = loadImage("images/jungle.jpg");
  car1_img = loadImage("images/basket2.png");
  car2_img = loadImage("images/basket2.png");
  banana_img = loadImage("images/banana2.png");
  apple_img = loadImage("images/apple2.png");
  melon_img = loadImage("images/melon2.png");
  orange_img = loadImage("images/orange2.png");
  
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  fruitGroup = new Group
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 2 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
