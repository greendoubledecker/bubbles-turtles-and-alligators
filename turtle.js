class Turtle {
  constructor(x, y, sideLength) {
    this.red = 0;
    this.green = 153;
    this.blue = 51;
    this.sideLength = sideLength;
    this.x = x;
    this.y = y;
    this.strokeWeight = 4;
    if (random(0, 1) > 0.5) {
      this.direction = "up";
    } else {
      this.direction = "down";
    }
    this.points = floor(random(1, 10));
  }
  show() {
    stroke(0);
    strokeWeight(this.strokeWeight);
    fill(this.red, this.green, this.blue);
    rectMode(CENTER);
    rect(this.x, this.y, this.sideLength);
  }
  move() {
    if (this.x < random(100, 300)) {
      this.direction = "down";
    }
    if (this.x > random(700, 900)) {
      this.direction = "up";
    }
    if (this.y < random(100, 300)) {
      this.direction = "left";
    }
    if (this.y > random(700, 900)) {
      this.direction = "right";
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

  intersects(other) {
    return (
      abs(this.x - other.x) < this.sideLength / 2 + other.sideLength / 2 &&
      abs(this.y - other.y) < this.sideLength / 2 + other.sideLength / 2
    );
  }
  setStrokeWeight(value) {
    this.strokeWeight = value;
  }
  intersectsBubble(bubble) {
    let circleDistance = {};
    circleDistance.x = abs(bubble.x - this.x);
    circleDistance.y = abs(bubble.y - this.y);
    if (circleDistance.x > this.sideLength / 2 + bubble.r) {
      return false;
    }
    if (circleDistance.y > this.sideLength / 2 + bubble.r) {
      return false;
    }
    if (circleDistance.x <= this.sideLength / 2) {
      return true;
    }
    if (circleDistance.y <= this.sideLength / 2) {
      return true;
    }
    let cornerDistance_sq =
      pow(circleDistance.x - this.sideLength / 2, 2) +
      pow(circleDistance.y - this.sideLength / 2, 2);
    return cornerDistance_sq <= pow(bubble.r, 2);
  }
}
