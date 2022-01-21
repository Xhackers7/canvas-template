import utils from "./utils";
import Circle from "./objects/Circle";

const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: 40,
  y: 40,
};

addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
});

const ctx = canvas.getContext("2d");

const colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];

let circle;
let circle2;
const init = () => {
  circle2 = new Circle(canvas.width / 2, canvas.height / 2, 0, 0, 100, "blue");
  circle = new Circle();
  circle.color = colors[2];
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle.x = mouse.x;
  circle.y = mouse.y;
  circle2.update(ctx);
  circle.update(ctx);
  if (
    utils.distance(circle.x, circle.y, circle2.x, circle2.y) <
    circle.radius + circle2.radius
  )
    circle2.color = colors[0];
  else circle2.color = colors[3];
};

init();
animate();
