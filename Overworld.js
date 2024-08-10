class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    console.log("Hello from the Overworld", this);

    const image = new Image();
    image.src = "/images/maps/DemoLower.png";
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };

    const hero = new GameObject({
      x: 5,
      y: 6,
    });
    const npc = new GameObject({
      x: 7,
      y: 9,
      src: "/images/characters/people/npc1.png",
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc.sprite.draw(this.ctx);
    },100)
  }
}
