class Person extends GameObject {
  constructor(config) {
    // it will do the normal constructor stuff of the game object
    super(config);
    this.movingProgressRemaining = 32;
    this.direction = 'right';
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
      this.updatePosition();
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }
}
