class Character {
  constructor() {
    this.level = 1;
    this.health = 1000;
    this.alive = true;
  }

  attack(target) {
    if (target.health - 100 <= 0) {
      target.health = 0;
      target.alive = false;
      return;
    }
    target.health = target.health - 100;
  }

  heal() {
    if (this.health + 100 >= 1000) {
      this.health = 1000;
      return;
    }

    this.health = this.health + 100;
  }
}

module.exports = Character;
