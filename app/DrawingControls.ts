import { drawCircle, clearCanvas, drawTextBackground } from "./DrawingFunctions"
import {text} from "./UI"
import { ctx, canvas, bgctx, app, bgCanvas } from "./canvas"



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
canvas.addEventListener(
  "touchmove",
  function(event) {
    let touch = event.touches[0]
      drawCircle(
        touch.pageX-canvas.offsetLeft,
        touch.screenY-canvas.offsetTop);
  });
