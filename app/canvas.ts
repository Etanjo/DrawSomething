import {drawStartup} from "./StartupFunction"

import {text, secretCode } from "./UI"

export let app = document.querySelector('#app');

export let canvas = document.createElement('canvas');
export let bgCanvas = document.createElement('canvas');

app.appendChild(bgCanvas);
app.appendChild(canvas);

export let width = 700;
export let height = 700;

export function setupCanvas(canvas:HTMLCanvasElement){
canvas.width = 700;
canvas.height = 700;

canvas.style.width = '700px';
canvas.style.height = '700px';
// Add a border to the canvas
canvas.style.borderWidth = '3px';
canvas.style.borderColor = 'DarkCyan';
canvas.style.borderStyle = 'solid';
bgCanvas.style.backgroundColor = "White";
// Center the canvas horizontally
canvas.style.position = 'absolute';
canvas.style.top = '10px';
canvas.style.left = '10px';
}

setupCanvas(canvas);
setupCanvas(bgCanvas);

export let ctx = canvas.getContext('2d');
export let bgctx = bgCanvas.getContext('2d');


