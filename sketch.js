//Create variables here
var dog,dogImg1,dogImg2;
var happyDog;
var foodS;
var foodStock;
var database;

function preload()
{
	//load images here
  dogImg1=loadImage("dogImg.png");
  dogImg2=loadImage("dogImg1.png");
}

function setup() {

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

	createCanvas(500, 500);

  dog=createSprite(250,310,20,20);
  dog.addImage(dogImg1);
  dog.scale=0.25;

  
}


function draw() { 
  background(46,139,87);
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
    

  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("blue");
  stroke(2);
  text("Note: Press UP ARROW to feed Drago Milk",70,50);
  text("Food remaining:"+foodS,70,100);

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({Food:x});

}

