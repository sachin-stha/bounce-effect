import Ball from "./ball.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvaswidth = 1200;
const canvasheight = 800;

canvas.width = canvaswidth;
canvas.height = canvasheight;

let previousTime = 0;
let ball = new Ball(canvaswidth, canvasheight);
function gameLoop(currentTime) {
  requestAnimationFrame(gameLoop);
  if (currentTime - previousTime < 1) return;
  previousTime = currentTime;

  ctx.clearRect(0, 0, canvaswidth, canvasheight);

  ball.draw(ctx);
  ball.fall();
}
gameLoop();
