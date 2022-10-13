
import {ctx, canvas} from "./canvas"

export function drawStartup(x = 0, y = 0){
  ctx.beginPath();
  ctx.strokeStyle = "Black"
ctx.font = "13px comic sans";
ctx.font = "11px comic sans ";
//ctx.strokeText("Eraser: E", 630, 660);

ctx.font = "11px comic sans ";
ctx.strokeText("Clear: C", 630, 675);

};