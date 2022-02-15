
import {ctx, canvas} from "./canvas"

export function drawStartup(x = 0, y = 0){
  ctx.beginPath();
  ctx.strokeStyle = "Black"
ctx.font = "13px comic sans";
ctx.strokeText("Change Colors:", 10, 645);

ctx.font = "11px comic sans ";
ctx.strokeText("Black: 1", 10, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Red: 2", 54, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Blue: 3", 90, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Purple: 4", 129, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Green: 5", 175, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Yellow: 6", 10, 675);

ctx.font = "11px comic sans ";
ctx.strokeText("Brown: 7", 60, 675);

ctx.font = "11px comic sans ";
ctx.strokeText("Grey: 8", 110, 675);

ctx.font = "11px comic sans ";
ctx.strokeText("Orange: 9", 150, 675);

ctx.font = "11px comic sans ";
ctx.strokeText("Eraser: E", 630, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Clear: C", 630, 675);
 ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(10,663);
      ctx.lineTo(48,663);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke();
};