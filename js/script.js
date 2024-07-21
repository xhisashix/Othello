"use strict";

import OthelloClass from "./OthelloClass.js";
const othelloClass = new OthelloClass();

document.addEventListener("DOMContentLoaded", () => {
  othelloClass.initializeBoard();
});

document.addEventListener("click", (event) => {
  const cell = event.target.closest(".cell");
  if (!cell) {
    return;
  }

  let turn = othelloClass.getTurn();

  const index = parseInt(cell.dataset.index, 10);
  othelloClass.reverseStone(index, turn);

  turn = othelloClass.getTurn();

  document.getElementById("turn").textContent = `${turn} のターン`;
  const putTableIndexes = othelloClass.getPutTableIndexes(turn);
  othelloClass.markPutTableIndexes(putTableIndexes);
});
