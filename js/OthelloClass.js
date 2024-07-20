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
    console.log("getBoardState");
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
    console.log("getTurn");
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
    console.log("putStone");
    const cell = this.board.children[index];
    const stone = document.createElement("div");
    stone.classList.add("stone", color);
    cell.appendChild(stone);
  }
}

export default OthelloClass;
