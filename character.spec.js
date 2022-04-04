const Character = require("./Character.js");

it("The character start with 1000 live, level 1 and status live", () => {
  const character = new Character(1);

  expect(character.health).toEqual(1000);
  expect(character.level).toEqual(1);
  expect(character.alive).toEqual(true);
});

it("A character can attack another character with 100 damage", () => {
  const characterOne = new Character(1);
  const characterTwo = new Character(2);

  characterOne.attack(characterTwo);

  expect(characterTwo.health).toEqual(900);
});

it("A character health will be 0 when the damage exceeds its health", () => {
  const characterOne = new Character(1);
  const characterTwo = new Character(2);

  for (let i = 10; i >= 0; i--) {
    characterOne.attack(characterTwo);
  }

  expect(characterTwo.health).toEqual(0);
  expect(characterTwo.alive).toEqual(false);
});

it("A character cannot heal if it has 1000 of health", () => {
  const characterOne = new Character(1);

  characterOne.heal();

  expect(characterOne.health).toEqual(1000);
});

it("A character can heal if it has less than 1000 of health", () => {
  const characterOne = new Character(1);

  characterOne.health = 800;
  characterOne.heal();

  expect(characterOne.health).toEqual(900);
});

it("A character cannot deal damage to itslef", () => {
  const characterOne = new Character(1);

  characterOne.attack(characterOne);

  expect(characterOne.health).toEqual(1000);
});

it("A character cannot heal another character", () => {
  const characterOne = new Character(1);
  const characterTwo = new Character(2);

  characterOne.attack(characterTwo);
  characterOne.heal(characterTwo);

  expect(characterTwo.health).toEqual(900);
});

it("A character damage is reduced by 50% if the difference between levels is 5 or more ", () => {
  const characterOne = new Character(1);
  const characterTwo = new Character(2);

  characterTwo.level = 6;

  characterOne.attack(characterTwo);

  expect(characterTwo.health).toEqual(950);
});

it("A character damage is increased by 50% if the difference between levels is 5 or more ", () => {
  const characterOne = new Character(1);
  const characterTwo = new Character(2);

  characterOne.level = 6;

  characterOne.attack(characterTwo);

  expect(characterTwo.health).toEqual(850);
});

it("A character does not belong to an initial faction", () => {
  const characterOne = new Character(1);

  expect(characterOne.factions).toEqual([]);
});

it("A character can join a faction", () => {
  const characterOne = new Character(1);

  characterOne.joinsFactions("faction one");

  expect(characterOne.factions).toEqual(["faction one"]);
});

it("A character can join two factions", () => {
  const characterOne = new Character(1);

  characterOne.joinsFactions("faction one");
  characterOne.joinsFactions("faction two");

  expect(characterOne.factions).toEqual(["faction one", "faction two"]);
});
