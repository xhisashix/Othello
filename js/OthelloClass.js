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
    console.log("initializeBoard");
    for (let i = 0; i < this.rows * this.cols; i++) {
      const cell = document.createElement("div");
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
   * 石を置く関数
   * @param {number} index - クリックされたセルのインデックス
   * @param {string} color - 置く石の色
   * @returns {void}
   */
  putStone(index, color) {
    console.log("putStone");
    const cell = this.board.children[index];
    const stone = document.createElement("div");
    stone.classList.add("stone", color);
    cell.appendChild(stone);
  }
}

export default OthelloClass;
