import Ship from "../assets/Ship";
test("test constructor", () => {
  let objectLength = 10;
  let object = { length: 10, hits: 0, sunk: false };
  expect(new Ship(objectLength)).toEqual(object);
});
test("test hit function", () => {
  const shipInstance = new Ship(2);
  shipInstance.hit();
  let object = { length: 2, hits: 1, sunk: false };
  expect(shipInstance).toEqual(object);
});

test("test isSunk function", () => {
  const shipInstance = new Ship(2);
  shipInstance.hit();
  shipInstance.hit();
  expect(shipInstance.isSunk()).toEqual(true);
});
