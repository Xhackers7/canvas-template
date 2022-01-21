class Circle {
  constructor(x = 40, y = 40, dx = 0, dy = 0, radius = 30, color = "black") {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
  update(ctx) {
    this.x += this.dx;
    this.y += this.dy;
    this.draw(ctx);
  }
}

module.exports = Circle;
