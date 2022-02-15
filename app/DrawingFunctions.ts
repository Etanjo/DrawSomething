import {ctx, canvas, bgctx} from "./canvas"


export function drawCircle(x, y){
bgctx.beginPath()

bgctx.moveTo(x, y+5);

bgctx.ellipse(x, y, 5, 5, 240, 0, 90); 

bgctx.stroke();

bgctx.fill();}


export function clearCanvas(x = 0,y = 0){
  bgctx.beginPath();

  bgctx.moveTo(0,0);

  bgctx.clearRect(0,0,700,700);
}