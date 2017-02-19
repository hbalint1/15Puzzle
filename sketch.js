// model variables
var model;

// view variables
var tiles;
var scale;

function setup() {
  createCanvas(500, 500);
  model = new GameLogic();
  tiles = [[],[],[],[]];
  scale = width/4;
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      tiles[i][j] = new Tile(j * scale, i * scale, scale - 3, model.grid[i][j]);
    }
  }
}

function draw() {
  background(51);
  drawTiles();
}

function drawTiles() {
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      tiles[i][j].update(model.grid[i][j]);
      tiles[i][j].display();
    }
  }
}

function mousePressed() {
  // print(floor(mouseX / scale), floor(mouseY / scale));

  var clickedX = floor(mouseY / scale);
  var clickedY = floor(mouseX / scale);

  // print(clickedX, clickedY);
  // print(model.grid[clickedX][clickedY]);
  if(clickedX < 4 && clickedY < 4) {
    if(model.grid[clickedX][clickedY] != 0) {
      model.step(clickedX, clickedY);
    }
  }
}
