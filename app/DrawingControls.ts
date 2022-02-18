import { drawCircle, clearCanvas, drawTextBackground } from "./DrawingFunctions"
import {text} from "./UI"
import { ctx, canvas, bgctx, app, bgCanvas } from "./canvas"

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
      clearCanvas(0, 0);
    drawTextBackground()
      }
    }
);