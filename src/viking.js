// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.overrated = true;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    } else {
      return 'A Saxon has received ' + damage + ' points of damage';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomUnluckySaxon = Math.floor(
      Math.random() * this.saxonArmy.length
    );
    const randomAttackingViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const aftermath = this.saxonArmy[randomUnluckySaxon].receiveDamage(
      this.vikingArmy[randomAttackingViking].attack()
    );
    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
      return saxon.health > 0;
    });

    return aftermath;
  }

  saxonAttack() {
    const randomUnluckyViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomAttackingSaxon = Math.floor(
      Math.random() * this.saxonArmy.length
    );
    const aftermath = this.vikingArmy[randomUnluckyViking].receiveDamage(
      this.saxonArmy[randomAttackingSaxon].attack()
    );
    this.vikingArmy = this.vikingArmy.filter(function (viking) {
      return viking.health > 0;
    });
    return aftermath;
  }

  showStatus() {
    if ((!this.saxonArmy.length)) {
      return 'Vikings have won the war of the century!';
    }
    if ((!this.vikingArmy.length)) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
