import {drawStartup} from "./StartupFunction"

import {canvas, ctx, bgctx, bgCanvas, setupCanvas} from "./canvas";
import { reset } from "colorette";
import {drawTextBackground} from "./DrawingFunctions"

let resetButton = document.querySelector("#reset");

export let secretCode = document.querySelector("#Secret-Code");

export let text;

drawStartup()

resetButton.addEventListener(
  "click",
  function(event){
   ctx.beginPath()

    bgctx.beginPath()

    bgctx.clearRect(0, 0, 700, 700)

    ctx.beginPath()
  
    ctx.lineWidth = 3
      ctx.moveTo(10,663)
      ctx.lineTo(48,663)
      ctx.strokeStyle = "#79c1e0"
      ctx.stroke()

    bgColor = "white"
    bgCanvas.style.backgroundColor = bgColor

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

function drawJackson(){bgCanvas.style.backgroundImage = 'url("https://thebaldcompany.com/wp-content/uploads/2020/12/Samuel-Jackson-Famous-Bald-Men.jpg")'
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
    bgCanvas.style.backgroundColor = "bgColor"
  }
  
})

export let color = "white"
let colorInput = document.querySelector("#color")
colorInput.addEventListener("change", function(event){
  bgctx.strokeStyle = event.target.value
  bgctx.fillStyle = event.target.value
  color = event.target.value
})


let fillButton = document.querySelector("#fill")

fillButton.addEventListener("click", function(event){
  bgCanvas.style.backgroundColor = color
  drawTextBackground()
  bgctx.strokeStyle = event.target.value
  bgctx.fillStyle = event.target.value
})