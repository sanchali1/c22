
//algorithms: set of instructions to do a particular jobob
function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 80, 80);  //fixed rectangle  width=50/2=25
 fr.shapeColor="green"
 mr=createSprite(100,200,80,80)   //width=30/2=15 ,15+25=40
 mr.shapeColor="green"
 pr=createSprite(200,200,80,80)   //width=30/2=15 ,15+25=40
 pr.shapeColor="green"
 sr=createSprite(300,300,80,80)
 sr.shapeColor="green"
}

function draw() {
  background("blue"); 
  mr.x=mouseX
  mr.y=mouseY 
  //console.log(mr.x-fr.x)
 if(santouching(mr,fr))

{
   
  mr.shapeColor="red"
  fr.shapeColor="red"
} 
else
{
  
  mr.shapeColor="green"
  fr.shapeColor="green"
}

 if(santouching(mr,pr))//function call
 {
   mr.shapeColor="purple"
   pr.shapeColor="purple"
 }
 else{
   mr.shapeColor="green"
   pr.shapeColor="green"
 }
 if(santouching(mr,sr))//function call
 {
   mr.shapeColor="pink"
   sr.shapeColor="pink"
 }
 else{
   mr.shapeColor="green"
   sr.shapeColor="green"
 }
  
  drawSprites();
}

