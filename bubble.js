class Bubble {
  constructor(x, y, r, red, green, blue, windSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.strokeWeight = 4;
    this.newBlue = blue + 45;
    this.newRed = red + 45;
    this.newGreen = green + 45;
    this.points = floor(random(1, 10));
    this.windSpeed = windSpeed;
  }
  move() {
    this.x += this.windSpeed.x;
    this.y += this.windSpeed.y;
    if (random(0, 1) > 0.5) {
      this.x += random(1, 2);
    } else {
      this.x -= random(1, 2);
    }
    if (random(0, 1) > 0.5) {
      this.y += random(1, 2);
    } else {
      this.y -= random(1, 2);
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

  moveFast() {
    this.x += this.windSpeed.x + 10;
    this.y += this.windSpeed.y + 10;
    if (random(0, 1) > 0.5) {
      this.x += random(1, 2);
    } else {
      this.x -= random(1, 2);
    }
    if (random(0, 1) > 0.5) {
      this.y += random(1, 2);
    } else {
      this.y -= random(1, 2);
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
    strokeWeight(this.strokeWeight);
    fill(this.newRed, this.newGreen, this.newBlue);
    ellipse(this.x, this.y, this.r * 2);
    noStroke();
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.r);
  }
  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
      if (this.r < 200) {
        this.r += 15;
      } else {
        this.r = 50;
      }
    }
  }
  contains() {
    return dist(mouseX, mouseY, this.x, this.y) < this.r;
  }
  intersects(other) {
    return dist(this.x, this.y, other.x, other.y) < this.r + other.r;
  }
  setStrokeWeight(value) {
    this.strokeWeight = value;
  }
  intersectsTurtle(turtle) {
    let circleDistance = {};
    circleDistance.x = abs(turtle.x - this.x);
    circleDistance.y = abs(turtle.y - this.y);

    if (circleDistance.x > turtle.sideLength / 2 + this.r) {
      return false;
    }
    if (circleDistance.y > turtle.sideLength / 2 + this.r) {
      return false;
    }

    if (circleDistance.x <= turtle.sideLength / 2) {
      return true;
    }
    if (circleDistance.y <= turtle.sideLength / 2) {
      return true;
    }

    let cornerDistance_sq =
      pow(circleDistance.x - turtle.sideLength / 2, 2) +
      pow(circleDistance.y - turtle.sideLength / 2, 2);

    return cornerDistance_sq <= pow(this.r, 2);
  }
}
