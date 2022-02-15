import { drawCircle, clearCanvas } from "./DrawingFunctions"

import { ctx, canvas, bgctx, app } from "./canvas"

import "./ChangeColors"

canvas.addEventListener(
  "mousemove",
  function(event) {
    ;
    if (event.buttons === 1)
      drawCircle(
        event.offsetX,
        event.offsetY);
  });

window.addEventListener(
  "keydown",
  function(event) {
    ;
    if (event.key == 'c') {
      ;
      clearCanvas(0, 0);
    };
  }
);