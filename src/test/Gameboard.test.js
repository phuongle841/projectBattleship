import GameBoard from "../assets/Gameboard";
import Ship from "../assets/Ship";
test("true", () => {
  expect(0).toBe(0);
});

test("place ship", () => {
  let X = 3;
  let Y = 8;
  let X2 = 5;
  let Y2 = 9;
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

test("hit test", () => {
  let X = 2;
  let Y = 1;
  let X2 = 3;
  let Y2 = 5;
  let GameBoardInstance = new GameBoard();
  GameBoardInstance.createShip(X, Y, X2, Y2);
  expect(GameBoardInstance.getHits(2, 1)).toBe(true);
});

test("hit test", () => {
  let X = 2;
  let Y = 8;
  let X2 = 4;
  let Y2 = 9;
  let GameBoardInstance = new GameBoard();
  GameBoardInstance.createShip(X, Y, X2, Y2);
  expect(GameBoardInstance.getHits(2, 8)).toBe(true);
  expect(GameBoardInstance.getHits(3, 8)).toBe(true);
  expect(GameBoardInstance.getHits(4, 8)).toBe(true);
});

test.todo("should have a list of hits");
test.todo("whether or not all of their ships have been sunk");
test("all ship is sunk", () => {
  let X = 3;
  let Y = 7;
  let X2 = 4;
  let Y2 = 8;
  let GameBoardInstance = new GameBoard();
  GameBoardInstance.createShip(X, Y, X2, Y2);
  GameBoardInstance.getHits(3, 7);
  expect(GameBoardInstance.checkAllSunk()).toBe(true);
});
test("not all ship is sunk", () => {
  let X = 3;
  let Y = 7;
  let X2 = 5;
  let Y2 = 8;
  let GameBoardInstance = new GameBoard();
  GameBoardInstance.createShip(X, Y, X2, Y2);
  GameBoardInstance.getHits(3, 8);
  expect(GameBoardInstance.checkAllSunk()).toBe(false);
});
