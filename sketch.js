//Create variables here
var dog, database, foodS, foodStock, dogImg, happyDogImg;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250, 300);
  dog.addImage("abcdefg", dogImg);
  dog.scale=0.4

  foodStock = database.ref('food');
  foodStock.on("value", readS)
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeS(foodS)
    dog.addImage(happyDogImg)
    
  }
  textSize(20);
  fill(48, 23, 128);
  
  text("Press Up Arrow to feed Doggo", 125, 470);

 
}

function readS(data){
  foodS=data.val()

}
function writeS(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

