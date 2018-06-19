var w = 640;
var h = 480;

var cardH = 400;
var cardW = Math.round(cardH*1.450);

var bleedPadW = Math.round(cardW*0.03);
var bleedPadH = Math.round(cardH*0.04);


var bleedXmin = 1;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 1;
var bleedYmax = cardH + (bleedPadH*2);

var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
  createCanvas(bleedXmax, bleedYmax); 
  rect(padXmin, padYmin, padXmax, padYmax); 
  background(color(0, 0, 255));
  for(var i = 2; i < w; i+=70)
    for(var j = 2; j< h; j+=70)
      strokeWeight((i+j)%20);
      stroke(100, 40, 80);
      fill(20, 40, 200);
      ellipse(i, j, 50, 12);

function draw() {
    backgrond(0, 12, 55, 63)
}      
var bleedXmin = 1;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 1;
var bleedYmax = cardH + (bleedPadH*2);

var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;

  
  var fontSizeA = Math.round(cardH/10)
  var fontSizeNorm = Math.round(cardH/14);
  textSize(fontSizeA*1);
  text("Shih Chien University", padXmin+bleedPadW, padYmax*0.4)
  var fontSizeNorm = Math.round(cardH/14); 
  fill(51);
  textSize(60);
  text("Austin Chen", padXmin+bleedPadW, (padYmax*0.65)+fontSizeA*0);
  fill(0, 123, 123); 
  textSize(20);
  text("Student of ETP", padXmin+bleedPadW, (padYmax*0.75)+fontSizeA*1);
  fill('rgb(0,255,0)'); 
  text("Stud.No: A0463055", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*2));
  fill('rgba(100%,0%,100%,0.5)');
  text("Email: austin.c19970518@gmail.com", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*3));



  colorMode(HSB);
    fill('red');
  ellipse(padXmax - (bleedPadW*0), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
  fill('#222222');
  ellipse(padXmax - (bleedPadW*3), padYmin + (bleedPadH*0), bleedPadH, bleedPadW);
  fill('red');
  ellipse(padXmax - (bleedPadW*6), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
  fill('#222222');
  ellipse(padXmax - (bleedPadW*9), padYmin + (bleedPadH*2), bleedPadH, bleedPadW);
  fill(255, 204, 100);
  ellipse(padXmax - (bleedPadW*12), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
  fill('#222222');
  ellipse(padXmax - (bleedPadW*15), padYmin + (bleedPadH*0), bleedPadH, bleedPadW);
  fill(255, 204, 100);
  ellipse(padXmax - (bleedPadW*18), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
    fill('red');
  ellipse(padXmax - (bleedPadW*21), padYmin + (bleedPadH*2), bleedPadH, bleedPadW);
  fill('#222222');
  ellipse(padXmax - (bleedPadW*24), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
  fill('red');
  ellipse(padXmax - (bleedPadW*27), padYmin + (bleedPadH*0), bleedPadH, bleedPadW);
  fill('#222222');
  ellipse(padXmax - (bleedPadW*30), padYmin + (bleedPadH*1), bleedPadH, bleedPadW);
  

    fill(255, 204, 100);
    ellipse(padXmax - (bleedPadW*2), padYmin + (bleedPadH*3), bleedPadH, bleedPadW);
    fill('#222222');
    ellipse(padXmax - (bleedPadW*1), padYmin + (bleedPadH*6), bleedPadH, bleedPadW);
    fill(255, 204, 100);
    ellipse(padXmax - (bleedPadW*0), padYmin + (bleedPadH*9), bleedPadH, bleedPadW);
    fill('#222222');
    ellipse(padXmax - (bleedPadW*1), padYmin + (bleedPadH*12), bleedPadH, bleedPadW);
    fill('red');
    ellipse(padXmax - (bleedPadW*2), padYmin + (bleedPadH*15), bleedPadH, bleedPadW);
    fill('#222222');
    ellipse(padXmax - (bleedPadW*1), padYmin + (bleedPadH*18), bleedPadH, bleedPadW);
    fill('red');
    ellipse(padXmax - (bleedPadW*0), padYmin + (bleedPadH*21), bleedPadH, bleedPadW);
    fill(255, 204, 100);
    ellipse(padXmax - (bleedPadW*1), padYmin + (bleedPadH*24), bleedPadH, bleedPadW);
  


  
}














