class Alligator {
  constructor() {
    this.red = 36;
    this.green = 135;
    this.blue = 40;
    this.width = 100;
    this.length = 250;
    if (random(0, 1) > 0.5) {
      this.direction = "up";
    } else {
      this.direction = "down";
    }
    this.x = 500;
    this.y = 500;
    this.strokeWeight = 4;
  }
  move() {
    if (this.x < random(100, 300)) {
      this.direction = "down";
      this.width = 100;
      this.length = 250;
    }
    if (this.x > random(700, 900)) {
      this.direction = "up";
      this.width = 100;
      this.length = 250;
    }
    if (this.y < random(100, 300)) {
      this.direction = "left";
      this.width = 250;
      this.length = 100;
    }
    if (this.y > random(700, 900)) {
      this.direction = "right";
      this.width = 250;
      this.length = 100;
    }
    if (this.direction === "right") {
      this.x += 2;
    } else if (this.direction === "left") {
      this.x -= 2;
    } else if (this.direction === "up") {
      this.y -= 2;
    } else {
      this.y += 2;
    }
    if (this.x > 1000) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = 1000;
    }
    if (this.y > 1000) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = 1000;
    }
  }
  show() {
    stroke(0);
    strokeWeight(this.strokeWeight);a
    fill(this.red, this.green, this.blue);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.length);
  }
  intersectsBubble(bubble) {
    let circleDistance = {};
    circleDistance.x = abs(bubble.x - this.x);
    circleDistance.y = abs(bubble.y - this.y);
    if (circleDistance.y > this.length / 2 + bubble.r) {
      return false;
    }
    if (circleDistance.x > this.width / 2 + bubble.r) {
      return false;
    }
    if (circleDistance.y <= this.length / 2) {
      return true;
    }
    if (circleDistance.x <= this.width / 2) {
      return true;
    }
    let cornerDistance_sq =
      pow(circleDistance.x - this.width / 2, 2) +
      pow(circleDistance.y - this.length / 2, 2);
    return cornerDistance_sq <= pow(bubble.r, 2);
  }
  intersectsTurtle(turtle) {
    return (
      abs(this.x - turtle.x) < this.width / 2 + turtle.sideLength / 2 &&
      abs(this.y - turtle.y) < this.length / 2 + turtle.sideLength / 2
    );
  }
  intersects(other) {
    return (
      abs(this.x - other.x) < this.width / 2 + other.width / 2 &&
      abs(this.y - other.y) < this.length / 2 + other.length / 2
    );
  }
  setStrokeWeight(value) {
    this.strokeWeight = value;
  }
}
