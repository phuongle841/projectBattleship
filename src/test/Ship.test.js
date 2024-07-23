import Ship from "../assets/Ship";
test("test constructor", () => {
  let objectLength = 10;
  let object = { length: 10, hit: 0, sunk: false };
  expect(new Ship(objectLength)).toEqual(object);
});
test("test isSunk function", () => {
  const shipInstance = new Ship(2);
  shipInstance.isSunk();
  let object = { length: 2, hit: 0, sunk: false };
  expect(shipInstance).toEqual(object);
});
test("test hit function", () => {
  const shipInstance = new Ship(2);
  shipInstance.hit();
  let object = { length: 2, hit: 1, sunk: false };
  expect(shipInstance).toEqual(object);
});
