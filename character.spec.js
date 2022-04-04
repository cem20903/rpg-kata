const Character = require("./Character.js");

it("The character start with 1000 live, level 1 and status live", () => {
  const character = new Character();

  expect(character.health).toEqual(1000);
  expect(character.level).toEqual(1);
  expect(character.alive).toEqual(true);
});

it("A character can attack another character with 100 damage", () => {
  const characterOne = new Character();
  const characterTwo = new Character();

  characterOne.attack(characterTwo);

  expect(characterTwo.health).toEqual(900);
});

it("A character health will be 0 when the damage exceeds its health", () => {
  const characterOne = new Character();
  const characterTwo = new Character();

  for (let i = 10; i >= 0; i--) {
    characterOne.attack(characterTwo);
  }

  expect(characterTwo.health).toEqual(0);
  expect(characterTwo.alive).toEqual(false);
});

it("A character cannot heal if it has 1000 of health", () => {
  const characterOne = new Character();

  characterOne.heal();

  expect(characterOne.health).toEqual(1000);
});

it("A character can heal if it has less than 1000 of health", () => {
  const characterOne = new Character();
  const characterTwo = new Character();

  characterOne.attack(characterTwo);
  characterOne.attack(characterTwo);
  characterTwo.heal();

  expect(characterTwo.health).toEqual(900);
});
