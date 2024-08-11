class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // shadow
    this.shadow = new Image();
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    }
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "/images/characters/shadow.png"

    }

    // Configure Animation && Initial State
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "walk-down": [[1,0], [0,0], [3,0], [0,0]]
    };
    this.currentAnimation = "walk-down" || config.currentAnimation ||  "idle-down";
    this.currentAnimationFrame = 0;
    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = config.animationFrameLimit;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this,this.currentAnimationFrame]
  }



  draw(ctx) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y- 18;
    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

    const [frameX, frameY] = this.frame;
    this.isLoaded && ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);
  }
}
