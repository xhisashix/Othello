'use strict';

import OthelloClass from "./OthelloClass.js";

document.addEventListener('DOMContentLoaded', () => {
  const othelloClass = new OthelloClass();

  othelloClass.initializeBoard();
});

document.addEventListener('click', (event) => {
  console.log(event);
})


