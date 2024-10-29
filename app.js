"use strict";
class Shape {
    constructor(ctx, originX, originY) {
        this.ctx = ctx;
        this.originX = originX;
        this.originY = originY;
    }
}
class Line extends Shape {
    constructor(ctx, originX, originY, x, y) {
        super(ctx, originX, originY);
        this.x = x;
        this.y = y;
    }
    draw() {
        this.ctx.moveTo(this.originX, this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    }
}
class Circle extends Shape {
    constructor(ctx, originX, originY, radius) {
        super(ctx, originX, originY);
        this.radius = radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
class TextSape extends Shape {
    constructor(ctx, originX, originY, text) {
        super(ctx, originX, originY);
        this.text = text;
    }
    draw() {
        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.text, this.originX, this.originY);
        this.ctx.stroke();
    }
}
class MathHelper {
    static generateRandom() {
        return Math.random() * 500;
    }
}
const c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
const btnLine = document.getElementById("drawLine");
const btnCircle = document.getElementById("drawCircle");
const btnText = document.getElementById("drawText");
btnLine.addEventListener("click", () => {
    const line = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    line.draw();
});
btnCircle.addEventListener("click", () => {
    const circle = new Circle(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    circle.draw();
});
btnText.addEventListener("click", () => {
    const text = new TextSape(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), "Sahil");
    text.draw();
});
