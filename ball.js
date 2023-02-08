export default class Ball {
  constructor(canvaswidth, canvasheight) {
    this.canvaswidth = canvaswidth;
    this.canvasheight = canvasheight;

    this.radius = 20;
    this.position = { x: 100, y: 100 };
    this.color = "red";
    this.gravity = 0.2;
    this.bounceEffect = 0.5;
    this.gravitySpeed = 0;
    this.acc = { x: 0, y: 0 };
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  fall() {
    this.gravitySpeed += this.gravity;
    this.position.x += this.acc.x;
    this.position.y += this.acc.y + this.gravitySpeed;
    this.hitGround();
  }

  hitGround() {
    if (this.position.y > this.canvasheight - this.radius) {
      this.position.y = this.canvasheight - this.radius;
      this.gravitySpeed = -(this.gravitySpeed * this.bounceEffect);
    }
  }
}
