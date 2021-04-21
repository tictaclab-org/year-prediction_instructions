let fontSize;
let index;
let font;

function preload() {
  font = loadFont('assets/AveriaSansLibre-Regular.ttf');
}

const words = ["rijk", "beroemd", "verdrietig", "beperkt", "in vorm", "intelligent", "geruïneerd", "gemotiveerd", "oprecht", "gek", "afgestudeerd", "verliefd" , "ziek"];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  index = 0;
  fontSize = 80;
  textSize(fontSize);
  textFont(font);
  textAlign(CENTER);
}

function draw() {
  background(0);
  let c = color('magenta');
  fill(c);
  text(words[index], 0, height/2, width);

  if (index == words.length - 1) {
    index = 0;
  }
  else {
    index++;
  }
}

function mouseClicked() {
  noLoop();
}
