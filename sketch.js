let gameState = 'title';
let playerD;
let directionD;
var scribble = new Scribble();
var img2;
var img3;
var img4;
var img101;
var img102;
var door;
var escape;
let myShapes = [];

function preload() {
  // load image
  img2 = loadImage("Assets/background01.png");
  img3 = loadImage("Assets/background02.png");
  img4 = loadImage("Assets/background03.png");
  img101 = loadImage("Assets/background04.png");
  img102 = loadImage("Assets/background05.png");
  //background music
  var sound = new Howl({
    src: ['Assets/Music.mp3']
  });
    sound.play();
    Howler.volume(0.2);
  door = loadSound("Assets/Door.wav");
  escape = loadSound("Assets/Escape.wav");
}

function setup() {
  playerD = new player(300, 300, 5, 30);
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  frameRate(60);
  for (let i = 0; i < 30; i++) {
   let x = random(width*.075, width*.925);
    let y = random(height*.075, height*.925);
   myShapes[i] = new Scribbleshape(x,y);
 }
}

function draw() {
  switch (gameState) {
    case 'title':
      Titlescreen();
      break;
    case 'stage1':
      level1();
      break;
      case 'stage1.1':
        level101();
        break;
      case 'stage1.2':
        level102();
        break;
    case 'stage2':
      level2();
      break;
    case 'stage3':
      level3();
      break;
    case 'Tstage1':
      text1();
      break;
    case 'stage4':
      level4();
      break;
    case 'Tstage2':
      text2();
      break;
    case 'stage5':
      level5();
      break;
    case 'endstage':
      Gameover();
      break;
      case 'escape':
        Gamewin();
        break;
  }
}


//handle keyboard inputs
function keyPressed() {
  switch (key) {
    case 'a':
      directionD = 'left';
      break;
    case 'd':
      directionD = 'right';
      break;
    case 'w':
      directionD = 'up';
      break;
    case 's':
      directionD = 'down';
      break;
  }
}

function Titlescreen() {
  background(255, 255, 255);
  for (let i = 0; i < 25; i++) {
    if (i % 2 == 0) {
  myShapes[i].circledisplay();
} else {
  myShapes[i].rectdisplay();
}

}
  push();
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  pop();
  textSize(55);
  textAlign(CENTER);
  textFont('Comic Sans MS');
  text('The Illusion Of Choice', width * 0.5, height * 0.33);
  textSize(30);
  text('What Does It Mean To Have Free Will?', width * 0.5, height * 0.5)
  text('You Will Press Enter', width * 0.5, height * 0.7)
}

function level1() {
  background(255, 255, 255);
  push()
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(156, 29, 0);
  scribble.scribbleRect(150, 600, 100, 20);
  stroke(0, 98, 237);
  scribble.scribbleRect(450, 600, 100, 20);
  pop()
  push()
  textSize(35);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Walk through the RED door', width * 0.5, height * 0.25);
  pop()
  playerD.hitCheck1();
}

function level101() {
  background(255, 255, 255);
  push()
  image(img101, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(156, 29, 0);
  scribble.scribbleRect(150, 600, 100, 20);
  stroke(0, 98, 237);
  scribble.scribbleRect(450, 600, 100, 20);
  pop()
  push()
  textSize(35);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Now,', width * 0.5, height * 0.25);
  text('Walk through the BLUE door', width * 0.5, height * 0.35);
  pop()
  playerD.hitCheck101();
}

function level102() {
  background(255, 255, 255);
  push()
  image(img102, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(156, 29, 0);
  scribble.scribbleRect(0, 400, 20, 100);
  stroke(0, 98, 237);
  scribble.scribbleRect(600, 400, 20, 100);
  pop()
  push()
  textSize(35);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Hmmmmm...', width * 0.5, height * 0.2);
  text('Walk through the RED door again', width * 0.5, height * 0.3);
  pop()
  playerD.hitCheck102();
}

function level2() {
  background(255, 255, 255);
  push()
  image(img2, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(148, 148, 148);
  scribble.scribbleRect(150, 600, 100, 20);
  stroke(0);
  scribble.scribbleRect(450, 600, 100, 20);
  pop()
  push()
  textSize(18);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('So predictable... the moment that I asked you to pick a door', width * 0.5, height * 0.23);
  text('it was already decided which one you would choose', width * 0.5, height * 0.3);
  textSize(23);
  text('Now, walk through the door on YOUR LEFT', width * 0.5, height * 0.65);
  pop()
  playerD.hitCheck2();
}

function level3() {
  background(255, 255, 255);
  push()
  image(img3, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(156, 29, 0);
  scribble.scribbleRect(150, 600, 100, 20);
  stroke(0, 98, 237);
  scribble.scribbleRect(450, 600, 100, 20);
  pop()
  push()
  textSize(20);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Did you choose YOUR left, or your CHARACTER\'S left?', width * 0.5, height * 0.25);
  textSize(16);
  text('However you interpreted it, you were always going to choose that door', width * 0.5, height * 0.3);
  textSize(23);
  text('Because that\'s just who you are', width * 0.5, height * 0.35);
  textSize(23);
  text('Now, walk through whatever door you\'d like...', width * 0.5, height * 0.65);
  pop()
  playerD.hitCheck3();
}

function text1() {
  push();
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  pop();
  push()
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Now, did you really just "choose" that door?', width * 0.5, height * 0.3);
  textSize(14);
  text('Because no matter which one you "chose" you were always going to pick that door', width * 0.5, height * 0.4);
  text('There is no alternate world where you chose differently', width * 0.5, height * 0.45);
  textSize(15);
  text('The same as there is no such thing as random chance', width * 0.5, height * 0.55);
  text('The future has already been decided, we just don\'t know the outcome yet', width * 0.5, height * 0.65);
  textSize(35);
  text('You Will Press Enter', width * 0.5, height * 0.85);
  pop()
}

function level4() {
  background(255, 255, 255);
  push()
  image(img4, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(156, 29, 0);
  scribble.scribbleRect(100, 600, 100, 20);
  stroke(0, 98, 237);
  scribble.scribbleRect(500, 600, 100, 20);
  stroke(1, 140, 11);
  scribble.scribbleRect(300, 600, 100, 20);
  stroke(247, 0, 255);
  scribble.scribbleRect(600, 500, 20, 100);
  stroke(212, 123, 0);
  scribble.scribbleRect(0, 500, 20, 100);
  stroke(0, 188, 191);
  scribble.scribbleRect(600, 300, 20, 100);
  stroke(107, 0, 161);
  scribble.scribbleRect(0, 300, 20, 100);
  stroke(0, 0, 0);
  scribble.scribbleRect(600, 100, 20, 100);
  stroke(171, 0, 97);
  scribble.scribbleRect(0, 100, 20, 100);
  stroke(173, 183, 255);
  scribble.scribbleRect(100, 0, 100, 20);
  stroke(79, 46, 8);
  scribble.scribbleRect(500, 0, 100, 20);
  stroke(255, 255, 255);
  scribble.scribbleRect(300, 0, 100, 20);
  pop()
  push()
  textSize(55);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  textSize(25);
  text('Go on, you have so many choices...', width * 0.5, height * 0.45);
  pop()
  playerD.hitCheck4();
  playerD.hitCheck41();
  playerD.hitCheck42();
  playerD.hitCheck43();
}

function text2() {
  push();
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  pop();
  push();
  textSize(23);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Comic Sans MS');
  text('Even if you spun a wheel or picked at random,', width * 0.5, height * 0.2);
  textSize(20);
  text('You were always going to walk through that door', width * 0.5, height * 0.3);
  textSize(20);
  text('Whether I prompt you or not', width * 0.5, height * 0.45);
  textSize(23);
  text('Your decision has already been made', width * 0.5, height * 0.63);
    text('Before you know you have a choice', width * 0.5, height * 0.68);
  textSize(35);
  text('You Will Press Enter', width * 0.5, height * 0.85);
  pop()
}

function level5() {
  background(0);
  push()
  strokeWeight(10);
  noFill();
  pop()
  playerD.display();
  playerD.move();
  playerD.bound();
  push();
  strokeWeight(25);
  stroke(255, 255, 255);
  scribble.scribbleRect(150, 600, 100, 20);
  stroke(255, 255, 255);
  scribble.scribbleRect(450, 600, 100, 20);
  pop()
  playerD.hitCheck5();
  playerD.hitCheck51();
}

function Gameover() {
  background(0);
  push();
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  pop();
  push();
  fill(255, 255, 255);
  textSize(22);
  textAlign(CENTER);
  textFont('Play');
  text('Everything the future holds has already been decided', width * 0.5, height * 0.2);
  text('Since the moment time began to turn', width * 0.5, height * 0.25);
  textSize(25);
  text('Fate is just the universe working like dominoes', width * 0.5, height * 0.45);
  textSize(20);
  text('With all of the pieces already set up', width * 0.5, height * 0.5);
  text('Each domino not knowing when it was meant to fall', width * 0.5, height * 0.7);
  textSize(35);
  textFont('Comic Sans MS');
  text('Try Again With Enter', width * 0.5, height * 0.85);
  pop()
}

function Gamewin() {
  background(255, 255, 255);
  push();
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  pop();
  push();
  fill(0);
  textSize(30);
  textAlign(CENTER);
  textFont('Rajdhani');
  text('Although I could be wrong...', width * 0.5, height * 0.15);
  textSize(28);
  text('Maybe humanity is made of more than just', width * 0.5, height * 0.28);
  textSize(23);
  text('Brain chemistry and electrical currents', width * 0.5, height * 0.35);
  text('Firing off in a predetermined manner', width * 0.5, height * 0.4);
  textSize(24);
  text('Perhaps some transcendental entity or force', width * 0.5, height * 0.55);
  text('Allows us to be more than just impulsive animals', width * 0.5, height * 0.6);
  textSize(28);
  text('Just maybe...', width * 0.5, height * 0.72);
  text('A soul can truly decide it\'s own fate', width * 0.5, height * 0.82);
  textSize(40);
  text('Enter', width * 0.5, height * 0.95);
  pop()
}

function keyReleased() {
  if (key == 'a') {
    if (directionD == 'left') {
      directionD = 'still';
    }
  } else if (key == 'd') {
    if (directionD == 'right') {
      directionD = 'still';
    }
  } else if (key == 'w') {
    if (directionD == 'up') {
      directionD = 'still';
    }
  } else if (key == 's') {
    if (directionD == 'down') {
      directionD = 'still';
    }
  }

  if (gameState === 'title') {
    if (keyCode === ENTER) {
      gameState = 'stage1';
      door.play();
    }
  } else if (gameState === 'endstage' || gameState === 'escape') {
    if (keyCode === ENTER) {
      gameState = 'title';
      }
  } else if (gameState === 'Tstage1') {
    if (keyCode === ENTER) {
      gameState = 'stage4';
    }
  } else if (gameState === 'Tstage2') {
    if (keyCode === ENTER) {
      gameState = 'stage5';
    }
  }
}
