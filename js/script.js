'use strict';

import OthelloClass from "./OthelloClass.js";
const othelloClass = new OthelloClass();

document.addEventListener('DOMContentLoaded', () => {
  othelloClass.initializeBoard();
});

document.addEventListener('click', (event) => {
  const cell = event.target.closest('.cell');
  if (!cell) {
    return;
  }

  let turn = othelloClass.getTurn();

  const index = parseInt(cell.dataset.index, 10);
  console.log(index);
  othelloClass.reverseStone(index, turn);
  const boardState = othelloClass.getBoardState();
  console.log(boardState);

  turn = othelloClass.getTurn();

  const putTableIndexes = othelloClass.getPutTableIndexes(turn);
  othelloClass.markPutTableIndexes(putTableIndexes);

})


