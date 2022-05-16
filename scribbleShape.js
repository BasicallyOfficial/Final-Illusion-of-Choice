class Scribbleshape {
  constructor (xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(360));
    this.s = random(-.1, .1);
  }
  circledisplay() {
    push()
    translate( this.xpos, this.ypos);
    rotate(this.t);
    stroke(178, 135, 232)
    strokeWeight(2)
    noFill()
    scribble.scribbleEllipse(10, 10, 25, 25)
  noFill();
stroke(255, 102, 0);
stroke(0, 0, 0);
    pop()
    }
    rectdisplay() {
      push()
      translate( this.xpos, this.ypos);
      rotate(this.t);
      stroke(240, 235, 141)
      strokeWeight(2)
      noFill()
      scribble.scribbleRect(10, 10, 30, 30)
    noFill();
  stroke(255, 102, 0);
  stroke(0, 0, 0);
      pop()
      }
  }
