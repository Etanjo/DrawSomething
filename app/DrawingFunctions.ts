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

export function drawTextBackground(){
  bgctx.beginPath()
  bgctx.fillStyle = "white"
  bgctx.strokeStyle = "white"
  bgctx.moveTo(600, 630)
   bgctx.lineTo(700, 630)
   bgctx.lineTo(700,700)
   bgctx.lineTo(600,700)
   bgctx.lineTo(600,640)
   bgctx.fill()
   bgctx.stroke()
}