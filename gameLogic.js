class GameLogic {
  constructor() {
    this.grid = [[],[],[],[]];

    this.initializeGrid();
  }

  initializeGrid() {
    // All possible cell value.
    // 0 means, there is no tile at the cell.
    var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Initialize all cell with value between 0 and 15.
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var chosenIndex = floor(random(elements.length));
            this.grid[i][j] = elements[chosenIndex];
            elements.splice(chosenIndex,1);
        }
    }
  }

  step(x, y) {
     if (x > 0 && this.grid[x - 1][y] == 0) {
        this.swap(x - 1, y, x, y);
     }
     else if (y < 3 && this.grid[x][y + 1] == 0) {
       this.swap(x, y + 1, x, y);
     }
     else if (x < 3 && this.grid[x + 1][y] == 0) {
       this.swap(x + 1, y, x, y);
     }
     else if (y > 0 && this.grid[x][y - 1] == 0) {
       this.swap(x, y - 1, x, y);
     }
  }

  swap(x1, y1, x2, y2) {
     this.grid[x1][y1] = this.grid[x2][y2];
     this.grid[x2][y2] = 0;
  }
}
