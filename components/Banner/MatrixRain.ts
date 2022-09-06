class Sym {
  characters: string
  fontSize: number
  x: number
  y: number
  canvasWidth: number
  text: string
  constructor(x: number, y: number, fontSize: number, canvasWidth: number) {
    this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = 'A';
    this.canvasWidth = canvasWidth;
  }
  draw(context: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.x * this.fontSize > this.canvasWidth && Math.random() > 0.9995) {
      this.x = 0;
    }
    else {
      this.x += 0.9;
    }
  }
}

class Effect {
  canvasHeight: number;
  fontSize: number;
  canvasWidth: number;
  columns: number;
  symbols: Array<Sym>
  constructor(canvasWidth: number, canvasHeight: number) {
    this.fontSize = 16;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasHeight / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Sym(0, i, this.fontSize, this.canvasWidth);
    }
  }
  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

export default Effect
