class OthelloClass {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.board = document.getElementById("board");
  }

  /**
   * ボードの初期化関数
   * @returns {void}
   */
  initializeBoard() {
    for (let i = 0; i < this.rows * this.cols; i++) {
      const cell = document.createElement("div");
      // セルのインデックスをセット
      cell.dataset.index = i;
      cell.classList.add("cell");
      board.appendChild(cell);
    }

    // 初期配置
    this.putStone(27, "black");
    this.putStone(28, "white");
    this.putStone(35, "white");
    this.putStone(36, "black");
  }

  /**
   * 盤面の状態を取得する関数
   * @returns {Array<string>} - 盤面の状態
   */
  getBoardState() {
    const boardState = [];
    for (let i = 0; i < this.rows * this.cols; i++) {
      const cell = this.board.children[i];
      const stone = cell.querySelector(".stone");
      if (stone) {
        boardState[i] = stone.classList.contains("black") ? "black" : "white";
      } else {
        boardState[i] = "empty";
      }
    }
    return boardState;
  }

  /**
   * ターンを管理する関数
   * @returns {string} - 現在のターン
   */
  getTurn() {
    const boardState = this.getBoardState();
    const blackCount = boardState.filter((stone) => stone === "black").length;
    const whiteCount = boardState.filter((stone) => stone === "white").length;
    return blackCount === whiteCount ? "black" : "white";
  }

  /**
   * 石を置く関数
   * @param {number} index - クリックされたセルのインデックス
   * @param {string} color - 置く石の色
   * @returns {void}
   */
  putStone(index, color) {
    const cell = this.board.children[index];
    const stone = document.createElement("div");
    stone.classList.add("stone", color);
    cell.appendChild(stone);
  }

  /**
   * 既存の石を削除する関数
   * @param {number} index - クリックされたセルのインデックス
   * @returns {void}
   */
  removeStone(index) {
    const cell = this.board.children[index];
    const stone = cell.querySelector(".stone");
    if (stone) {
      cell.removeChild(stone);
    }
  }

  /**
   * 石を裏返す関数
   * @param {number} index - クリックされたセルのインデックス
   * @param {string} color - 置く石の色
   * @returns {void}
   */
  reverseStone(index, color) {
    const boardState = this.getBoardState();
    const reverseIndexes = this.getReverseIndexes(index, color);
    reverseIndexes.forEach((reverseIndex) => {
      this.removeStone(reverseIndex);
      this.putStone(reverseIndex, color);
    });

    this.putStone(index, color);

  }

  /**
   * 裏返す石のインデックスを取得する関数
   * @param {number} index - クリックされたセルのインデックス
   * @param {string} color - 置く石の色
   * @returns {Array<number>} - 裏返す石のインデックス
   */
  getReverseIndexes(index, color) {
    const reverseIndexes = [];
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    directions.forEach((direction) => {
      const reverseIndexesInDirection = this.getReverseIndexesInDirection(
        index,
        direction,
        color
      );
      reverseIndexes.push(...reverseIndexesInDirection);
    });

    return reverseIndexes;
  }

  /**
   * 特定の方向に裏返す石のインデックスを取得する関数
   * @param {number} index - クリックされたセルのインデックス
   * @param {Array<number>} direction - 方向
   * @param {string} color - 置く石の色
   * @returns {Array<number>} - 裏返す石のインデックス
   */
  getReverseIndexesInDirection(index, direction, color) {
    const reverseIndexes = [];
    let [dx, dy] = direction;
    let x = index % this.cols;
    let y = Math.floor(index / this.cols);

    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
        return [];
      }

      const targetIndex = y * this.cols + x;
      const targetColor = this.getBoardState()[targetIndex];
      if (targetColor === "empty") {
        return [];
      }

      if (targetColor === color) {
        return reverseIndexes;
      }

      reverseIndexes.push(targetIndex);
    }
  }

  /**
   * 石をおける場所を取得する関数
   * @param {string} color - 置く石の色
   * @returns {Array<number>} - 石をおける場所
   */
  getPutTableIndexes(color) {
    const putTableIndexes = [];
    for (let i = 0; i < this.rows * this.cols; i++) {
      if (this.getReverseIndexes(i, color).length > 0) {
        putTableIndexes.push(i);
      }
    }
    return putTableIndexes;
  }

  /**
   * 石をおける場所へのマークを表示する関数
   * @param {array <number>} putTableIndexes - 石をおける場所
   * @returns {void}
   */
  markPutTableIndexes(putTableIndexes) {
    this.board.querySelectorAll(".put-table").forEach((cell) => {
      cell.classList.remove("put-table");
    });

    putTableIndexes.forEach((index) => {
      const cell = this.board.children[index];
      cell.classList.add("put-table");
    });
  }
}

export default OthelloClass;
