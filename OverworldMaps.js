class OverworldMaps {
  constructor(config) {
    this.gameObject = config.gameObject;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.overworldMaps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObject: {
      hero: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new GameObject({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "/images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObject: {
      hero: new GameObject({
        x: 2,
        y: 1,
      }),
      npc1: new GameObject({
        x: 5,
        y: 4,
        src: "/images/characters/people/npc1.png",
      }),
    },
  },
};
