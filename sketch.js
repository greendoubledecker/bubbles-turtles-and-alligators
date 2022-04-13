let bubbles = [];
let turtles = [];
let alligators = [];
let points = 0;
let windSpeed = {};
function keyPressed() {
  if (keyCode === UP_ARROW) {
    bubbles.push(
      new Bubble(
        random(100, 900),
        random(100, 900),
        random(25, 100),
        random(50, 200),
        random(50, 200),
        random(50, 200),
        windSpeed
      )
    );
  }
  if (keyCode === DOWN_ARROW || bubbles.length > 50) {
    bubbles.pop();
  }
  if (keyCode === LEFT_ARROW || turtles.length > 50) {
    turtles.pop();
  }
  if (keyCode === RIGHT_ARROW) {
    turtles.push(
      new Turtle(random(100, 900), random(100, 900), random(20, 100))
    );
  }
}
function keyTyped() {
  if (key === "s") {
    turtles = [];
    bubbles = [];
    alligators = [];
    points = 0;
  }
  if (key === "a") {
    alligators.push(new Alligator());
  }
  if (key === "d" || alligators.length > 50) {
    alligators.pop();
  }
  if (key === "w") {
    windSpeed = createVector(random(1.05, 1.45), 1);
  }
}
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}
function setup() {
  createCanvas(1000, 1000);
  windSpeed = createVector(random(1.05, 1.45), 1);
}
function draw() {
  background(40, 200, 20);
  for (b of bubbles) {
    let intersecting = false;
    for (c of bubbles) {
      if (b !== c) {
        if (b.intersects(c)) {
          intersecting = true;
        }
      }
    }
    if (intersecting) {
      b.setStrokeWeight(10);
    } else {
      b.setStrokeWeight(4);
    }
    if (b.contains()) {
      b.moveFast();
    } else {
      b.move();
    }
    b.show();
  }
  for (t of turtles) {
    for (b of bubbles) {
      if (t.intersectsBubble(b)) {
        let index = bubbles.indexOf(b);
        points += b.points;
        console.log("points: " + points);
        console.log("A bubble popped");
        if (points > 3000) {
          points = 0;
        }
        bubbles.splice(index, 1);
      }
    }
    let intersects = false;
    for (u of turtles) {
      if (t !== u && t.intersects(u)) {
        intersects = true;
      }
    }
    if (intersects) {
      t.setStrokeWeight(10);
    } else {
      t.setStrokeWeight(4);
    }
    t.show();
    t.move();
  }
  for (a of alligators) {
    for (b of bubbles) {
      if (a.intersectsBubble(b)) {
        let index = bubbles.indexOf(b);
        points += b.points;
        console.log("points: " + points);
        console.log("A bubble popped");
        if (points > 3000) {
          points = 0;
        }
        bubbles.splice(index, 1);
      }
    }
    for (t of turtles) {
      if (a.intersectsTurtle(t)) {
        let index = turtles.indexOf(t);
        points += t.points;
        console.log("points: " + points);
        console.log("A turtle got eaten");
        if (points > 3000) {
          points = 0;
        }
        turtles.splice(index, 1);
      }
    }
    let intersects = false;
    for (b of alligators) {
      if (a !== b && a.intersects(b)) {
        intersects = true;
      }
      if (intersects) {
        a.setStrokeWeight(10);
      } else {
        a.setStrokeWeight(4);
      }
    }
    a.show();
    a.move();
  }
}
