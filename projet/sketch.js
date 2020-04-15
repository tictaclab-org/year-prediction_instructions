let words = ["riche", "célèbre", "triste", "confinée", "en forme", "intelligente", "ruinée", "motivée", "sincère", "dingue", "mariée", "diplômée", "olé olé", "studieuse", "amoureuse", "malade"];

let fontSize;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  fontSize = 80;
  textSize(fontSize);
  textFont('Averia Sans Libre');
  textAlign(CENTER);
}

function draw() {
  background(0);
  let c = color('magenta');
  fill(c);
  text(random(words), 0, height/2, width);
}

function mouseClicked() {
  noLoop();
}
