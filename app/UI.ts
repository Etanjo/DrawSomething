import {drawStartup} from "./StartupFunction"

import {canvas, ctx, bgctx, bgCanvas, setupCanvas} from "./canvas";
import { reset } from "colorette";
import {drawTextBackground} from "./DrawingFunctions"

let resetButton = document.querySelector("#reset");

export let secretCode = document.querySelector("#Secret-Code");

export let text;

drawStartup()

export function clearLines(x = 1, y = 1){
  ctx.beginPath();
  ctx.lineWidth = 3
      ctx.moveTo(10,663);
      ctx.lineTo(48,663);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3
      ctx.moveTo(10,663);
      ctx.lineTo(48,663);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(90,663);
      ctx.lineTo(124,663);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(129,663);
      ctx.lineTo(172,663);
      ctx.strokeStyle = "White";
      ctx.stroke(); 

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(175,663);
      ctx.lineTo(213,663);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(10,678);
      ctx.lineTo(53,678);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(60,678);
      ctx.lineTo(98,678);
      ctx.strokeStyle = "White";
      ctx.stroke() ;

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(110,678);
      ctx.lineTo(144,678);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(150,678);
      ctx.lineTo(193,678);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(630,663);
      ctx.lineTo(673,663);
      ctx.strokeStyle = "White";
      ctx.stroke();

      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.moveTo(54,663)
      ctx.lineTo(84,663)
      ctx.strokeStyle = "White"
      ctx.stroke()

}

resetButton.addEventListener(
  "click",
  function(event){
   ctx.beginPath()

    bgctx.beginPath()

    bgctx.clearRect(0, 0, 700, 700)

    clearLines()

    ctx.beginPath()
  
    ctx.lineWidth = 3
      ctx.moveTo(10,663)
      ctx.lineTo(48,663)
      ctx.strokeStyle = "#79c1e0"
      ctx.stroke()

    bgCanvas.style.backgroundImage = 'url("https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png")'

    setupCanvas(bgCanvas)
  }
)

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='e'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(630,663);
      ctx.lineTo(673,663);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
)

function drawArnold(){bgCanvas.style.backgroundImage = 'url("https://www.innovationcharter.org/wp-content/uploads/2016/08/Arnold-Erik-450x450.jpg")'
   bgCanvas.style.backgroundSize = "cover" 

   drawTextBackground()
}

function drawDwayne(){bgCanvas.style.backgroundImage = 'url("https://cdn.britannica.com/60/222660-050-064DBA89/Dwayne-Johnson-AKA-The-Rock-2019.jpg")'
   bgCanvas.style.backgroundSize = "cover" 

   drawTextBackground()
}

function drawJackson(){bgCanvas.style.backgroundImage = 'https://thebaldcompany.com/wp-content/uploads/2020/12/Samuel-Jackson-Famous-Bald-Men.jpg'
  bgCanvas.style.backgroundSize = "cover"
  drawTextBackground()
}

secretCode.addEventListener("change", function(event){
  text = event.target.value
  if(text == 'Dwayne' || text == 'dwayne' || text == 'DWAYNE')
  { drawDwayne()
  } else if(text == 'Clean' || text == 'clean' || text == 'CLEAN')
  { drawArnold()
  }
    else if(text == 'Jackson' || text == 'jackson' || text == 'JACKSON'){
    drawJackson()}
  else{
    bgCanvas.style.backgroundImage = 'url("https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png")'
  }
  
})
let colorInput = document.querySelector("#color")
colorInput.addEventListener("change", function(event){
  bgctx.strokeStyle = event.target.value
  bgctx.fillStyle = event.target.value
})