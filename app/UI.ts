import {drawStartup} from "./StartupFunction"

import {canvas, ctx, bgctx, bgCanvas, setupCanvas} from "./canvas";
import { reset } from "colorette";

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

    setupCanvas(bgCanvas)
  }
)

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='1'){
      clearLines()
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.moveTo(10,663)
      ctx.lineTo(48,663)
      ctx.strokeStyle = "#79c1e0"
      ctx.stroke() 
      }}
)

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='2'){
      clearLines()
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.moveTo(54,663)
      ctx.lineTo(84,663)
      ctx.strokeStyle = "#79c1e0"
      ctx.stroke() 
      }}
)

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='3'){
      clearLines()
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.moveTo(90,663)
      ctx.lineTo(124,663)
      ctx.strokeStyle = "#79c1e0"
      ctx.stroke(); 
      }}
)

 window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='4'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(129,663);
      ctx.lineTo(172,663);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
)   

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='5'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(175,663);
      ctx.lineTo(213,663);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
)   

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='6'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(10,678);
      ctx.lineTo(53,678);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
)  

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='7'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(60,678);
      ctx.lineTo(98,678);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke() ;
      }}
) 
window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='8'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(110,678);
      ctx.lineTo(144,678);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
)   

window.addEventListener(
  "keydown",
  function(event){
    if (event.key=='9'){
      clearLines()
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(150,678);
      ctx.lineTo(193,678);
      ctx.strokeStyle = "#79c1e0";
      ctx.stroke(); 
      }}
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

secretCode.addEventListener("change", function(event){
  text = event.target.value
  if(text == 'Clean'||(text == 'clean'))
  { bgCanvas.style.backgroundImage = 'url("https://www.innovationcharter.org/wp-content/uploads/2016/08/Arnold-Erik-450x450.jpg")'
   bgCanvas.style.backgroundSize = "cover" 
  }
})
