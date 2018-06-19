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
	background (255, 204, 0);
	noStroke();


	
	var fontSizeA = Math.round(cardH/10);
	fill('rgba(100%,0%,100%,0.5)');
	textSize(fontSizeA*55);
	text("Shih Chien University", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14);
	textSize(fontSizeA*1);
	text("Shih Chien University", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); 
	fill(51);
	textSize(65);
	text("      Austin Chen", padXmin+bleedPadW, (padYmax*0.65)+fontSizeA*0);
	fill(0, 123, 123); 
	textSize(20);
	text("                                                         Student of ETP", padXmin+bleedPadW, (padYmax*0.75)+fontSizeA*1);
	fill('rgb(0,255,0)'); 
	text("                                          Stud.ID: A0463055", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*2));
	fill('rgba(100%,0%,100%,0.5)');
	text("                            Email: austin.c19970518@gmail.com", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*3));



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
	


	for (var i=0; i<6; i++) {
		push();
		translate(padXmax - (bleedPadW*31.5), padYmax - (bleedPadH*16));
		rotate(TWO_PI*i);
		fill(color(0, 0, 255));
		rectMode(CENTER);
		rect(bleedPadW+bleedPadW*i, 0 + (bleedPadH*3), bleedPadW, bleedPadH*4);
		pop();
	}

	
	for (var i=0; i<5; i++) {
		push();
		translate(padXmax - (bleedPadW*31.5), padYmax - (bleedPadH*10));
		rotate(TWO_PI*i);
		fill('red');
		rectMode(CENTER); 
		rect(bleedPadW+bleedPadW*i, 0 + (bleedPadH*3), bleedPadW, bleedPadH*4);
		pop();
	}

	
	for (var i=0; i<4; i++) {
		push();
		translate(padXmax - (bleedPadW*31.5), padYmax - (bleedPadH*4));
		rotate(TWO_PI*i);
		fill(51);
		rectMode(CENTER); 
		rect(bleedPadW+bleedPadW*i, 0 + (bleedPadH*3), bleedPadW, bleedPadH*4);
		pop();
	}

	
}
















