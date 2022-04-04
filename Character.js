const ATTACK_POINTS = 100;
const MIN_ATTACK_POINTS = ATTACK_POINTS / 2;
const MAX_ATTACK_POINTS = ATTACK_POINTS + ATTACK_POINTS * 0.5;
const HEAL_POINTS = 100;
const INITAL_HEALTH = 1000;
const ALIVE = true;
const DEAD = false;

class Character {
  constructor(id) {
    this.id = id;
    this.level = 1;
    this.health = INITAL_HEALTH;
    this.alive = ALIVE;
    this.factions = [];
  }

  _canAttack(target) {
    return !(target.id === this.id || this._areAllies(target))
  }

  attack(target) {
    if (!this._canAttack(target)) return;
    
    
    if (this._isCharacterDead(target)) {
      this._killCharacter(target);
      return;
    }

    if (this._useMinAttack(target)) {
      target.health -= MIN_ATTACK_POINTS;
      return;
    }
    if (this._useMaxAttack(target)) {
      target.health -= MAX_ATTACK_POINTS;
      return;
    }
    target.health -= ATTACK_POINTS;
  }

  heal(target) {
    if (!this.alive) return;
    if(target && this._areAllies(target)) {
      target.health += HEAL_POINTS
      return
    }
    if (!this._canCharacterBeHeal()) {
      this.health = INITAL_HEALTH;
      return;
    }

    this.health += HEAL_POINTS;
  }

  joinsFactions(faction) {
    this.factions.push(faction);
  }

  leavesFaction(factionToRemove) {
    const factions = this.factions.filter(faction => { return faction !== factionToRemove })
    this.factions = factions
  }

  _killCharacter(target) {
    target.health = 0;
    target.alive = DEAD;
  }

  _isCharacterDead(target) {
    return target.health - ATTACK_POINTS <= 0;
  }

  _canCharacterBeHeal() {
    return this.health + HEAL_POINTS < INITAL_HEALTH;
  }

  _useMaxAttack(target) {
    return this.level - target.level >= 5;
  }

  _useMinAttack(target) {
    return target.level - this.level >= 5;
  }

  _areAllies(target) {
    return target.factions.some(faction => this.factions.includes(faction) )
  }
}

module.exports = Character;
