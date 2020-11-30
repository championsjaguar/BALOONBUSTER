var redb, blueb, greenb, pinkb, bow, arrow, bg;

function preload() {
  //load your images here

  red = loadImage("red.png");
  pink = loadImage("pink.png");
  blue = loadImage("blue.png");
  green = loadImage("green.png");
  arr = loadImage("arrow0.png");
  bo = loadImage("bow0.png");
  bac = loadImage("bg.png");
}

function setup() {
  createCanvas(600, 600);

  bg = createSprite(300, 300, 600, 600);
  bg.addImage("bgr", bac);
  bg.velocityX = -5;

  bow = createSprite(500, 300, 20, 20);

  bow.addImage("bo", bo);

  bow.scale = 1.5;

  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  reder();
  bluer();
  greener();
  pinker();
  arrower();
}

function draw() {
  background("255");

  for (var i = 0; i < redGroup.length; i++) {
    if (redGroup.get(i).isTouching(arrow)) {
      redGroup.get(i).destroy();
    }
  }

  for (var i = 0; i < blueGroup.length; i++) {
    if (blueGroup.get(i).isTouching(arrow)) {
      blueGroup.get(i).destroy();
    }
  }

  for (var i = 0; i < greenGroup.length; i++) {
    if (greenGroup.get(i).isTouching(arrow)) {
      greenGroup.get(i).destroy();
    }
  }

  for (var i = 0; i < pinkGroup.length; i++) {
    if (pinkGroup.get(i).isTouching(arrow)) {
      pinkGroup.get(i).destroy();
    }
  }

  if (bg.x === 0) {
    bg.x = 600;
  }
  if (keyDown("UP_ARROW")) {
    bow.velocityY = -2;
    arrow.velocityY = -2;
  }

  if (keyDown("DOWN_ARROW")) {
    bow.velocityY = 2;
    arrow.velocityY = 2;
  }
  ////////////////////////////////

  if (keyWentUp("UP_ARROW")) {
    bow.velocityY = 0;
    arrow.velocityY = 0;
  }

  if (keyWentUp("DOWN_ARROW")) {
    bow.velocityY = 0;
    arrow.velocityY = 0;
  }

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  if (keyDown("space")) {
    ///////////////////////////////////
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    arrow.velocityX = -6; //////////////////////////////////
  } ////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  for (var i = 0; i < arrowGroup.length; i++) {
    if (arrowGroup.get(i).isTouching(redb)) {
      arrowGroup.get(i).destroy();
    }
  }
  for (var i = 0; i < arrowGroup.length; i++) {
    if (arrowGroup.get(i).isTouching(blueb)) {
      arrowGroup.get(i).destroy();
    }
  }
  for (var i = 0; i < arrowGroup.length; i++) {
    if (arrowGroup.get(i).isTouching(greenb)) {
      arrowGroup.get(i).destroy();
    }
  }
  for (var i = 0; i < arrowGroup.length; i++) {
    if (arrowGroup.get(i).isTouching(pinkb)) {
      arrowGroup.get(i).destroy();
    }
  }

  if (keyDown("LEFT_ARROW")) {
    arrow.x = bow.x;
    arrow.y = bow.y;
    arrow.velocityY = 0;
    arrow.velocityX = 0;
  }
  drawSprites();
}

function reder() {
  for (var r = 100; r < 500; r = r + 100) {
    redb = createSprite(20, r, 20, 20);
    redb.addImage("r", red);
    redb.scale = 0.1;
  }

  redGroup.add(redb);
}

function bluer() {
  for (var b = 250; b < 300; b = b + 100) {
    blueb = createSprite(320, b, 20, 20);
    blueb.addImage("b", blue);
    blueb.scale = 0.1;
  }

  blueGroup.add(blueb);
}

function greener() {
  for (var g = 200; g < 400; g = g + 100) {
    greenb = createSprite(220, g, 20, 20);
    greenb.addImage("g", green);
    greenb.scale = 0.1;
  }
  greenGroup.add(greenb);
}

function pinker() {
  for (var p = 150; p < 400; p = p + 100) {
    pinkb = createSprite(120, p, 20, 20);
    pinkb.addImage("p", pink);
    pinkb.scale = 1.2;

    pinkGroup.add(pinkb);
  }
}

function arrower() {
  arrow = createSprite(bow.x, bow.y, 20, 20);
  arrow.addImage("a", arr);

  arrow.scale = 0.5;
  arrow.debug = true;
  arrow.setCollider("rectangle", 0, -5, 400, 40);
  arrowGroup.add(arrow);

  ///////////////////////////////////////////////
  //
  ////////////////////////////////////////
}
