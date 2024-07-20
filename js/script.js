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

  const index = parseInt(cell.dataset.index, 10);
  console.log(index);
  othelloClass.putStone(index, "black");
})


