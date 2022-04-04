const Character = require("./Character.js");

it("The character start with 1000 live, level 1 and status live", () => {
  const character = new Character();

  expect(character.health).toEqual(1000);
  expect(character.level).toEqual(1);
  expect(character.status).toEqual("alive");
});
