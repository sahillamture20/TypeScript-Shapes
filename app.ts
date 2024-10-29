class Shape {
  constructor(
    public ctx: CanvasRenderingContext2D,
    public originX: number,
    public originY: number
  ) {}
}

class Line extends Shape {
  constructor(
    ctx: CanvasRenderingContext2D,
    originX: number,
    originY: number,
    public x: number,
    public y: number
  ) {
    super(ctx, originX, originY);
  }
  draw(): void {
    this.ctx.moveTo(this.originX, this.originY);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }
}

class Circle extends Shape {
    constructor(
      ctx: CanvasRenderingContext2D,
      originX: number,
      originY: number,
      public radius: number
    ){
        super(ctx, originX, originY);
      }
    draw(): void {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class TextSape extends Shape{
    constructor(
      ctx: CanvasRenderingContext2D,
      originX: number,
      originY: number,
      public text: string){
        super(ctx, originX, originY);
      }
      draw(): void {
        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.text, this.originX, this.originY);
        this.ctx.stroke();
      }
}
class MathHelper {
  static generateRandom(): number {
    return Math.random() * 500;
  }
}

const c = <HTMLCanvasElement>document.getElementById("myCanvas");
let ctx = <CanvasRenderingContext2D>c.getContext("2d");

const btnLine = document.getElementById("drawLine")!;
const btnCircle = document.getElementById("drawCircle")!;
const btnText = document.getElementById("drawText")!;


btnLine.addEventListener("click", () => {
  const line = new Line(
    ctx,
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom()
  );
  line.draw();
});

btnCircle.addEventListener("click", () => {
    const circle = new Circle(
    ctx,
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom()
  );
  circle.draw();
});

btnText.addEventListener("click", () => {
    const text = new TextSape(
      ctx,
      MathHelper.generateRandom(),
      MathHelper.generateRandom(),
      "Sahil"
    );
    text.draw();
});