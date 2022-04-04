const ATTACK_POINTS = 100;
const HEAL_POINTS = 100;
const ALIVE = true;
const DEAD = false;
class Character {
  constructor() {
    this.level = 1;
    this.health = 1000;
    this.alive = ALIVE;
  }

  _isCharacterDead(target) {
    return target.health - ATTACK_POINTS <= 0;
  }

  _canCharacterBeHeal() {
    return this.health + HEAL_POINTS < 1000;
  }

  attack(target) {
    if (this._isCharacterDead(target)) {
      this._killCharacter(target);
      return;
    }
    target.health -= ATTACK_POINTS;
  }

  heal() {
    if (!this.alive) return;
    if (!this._canCharacterBeHeal()) {
      this.health = 1000;
      return;
    }

    this.health += HEAL_POINTS;
  }

  _killCharacter(target) {
    target.health = 0;
    target.alive = DEAD;
  }
}

module.exports = Character;
