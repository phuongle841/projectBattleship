import GameBoard from "../assets/Gameboard";
import Ship from "../assets/Ship";
test("true", () => {
  expect(0).toBe(0);
});

test("place ship", () => {
  let X = 3;
  let Y = 9;
  let X2 = 5;
  let Y2 = 10;
  let GameBoardInstance = new GameBoard();
  expect(GameBoardInstance.createShip(X, Y, X2, Y2)).toBe(true);
});
test("place ship in reverse", () => {
  let X = 3;
  let Y = 7;
  let X2 = 4;
  let Y2 = 9;
  let GameBoardInstance = new GameBoard();
  expect(GameBoardInstance.createShip(X, Y, X2, Y2)).toBe(true);
});

test.todo("should receive attack");
test("hit test", () => {
  let X = 3;
  let Y = 7;
  let X2 = 4;
  let Y2 = 9;
  let GameBoardInstance = new GameBoard();
  GameBoardInstance.createShip(X, Y, X2, Y2);
  let X3 = 1;
  let Y3 = 4;
  let X4 = 2;
  let Y4 = 8;
  GameBoardInstance.createShip(X3, Y3, X4, Y4);
  expect(GameBoardInstance.getHits(3, 8)).toBe(true);
});

test.todo("should have a list of hits");
test.todo("whether or not all of their ships have been sunk");
