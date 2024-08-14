import Ship from "./Ship";
class GameBoard {
  width;
  height;
  previousHits;
  hits;
  misses;
  shipList;
  constructor() {
    this.width = 10;
    this.height = 10;
    this.previousHits = [];
    this.hits = [];
    this.misses = [];
    this.shipList = [];
  }
  createShip(xBegin, yBegin, xEnd, yEnd) {
    if (this.#checkValid(xBegin, yBegin, xEnd, yEnd)) {
      return false;
    }
    if (xBegin > xEnd) {
      xEnd = [xBegin, (xBegin = xEnd)][0];
    }
    if (yBegin > yEnd) {
      yEnd = [yBegin, (yBegin = yEnd)][0];
    }

    let length = this.#shipLength(xBegin, yBegin, xEnd, yEnd);
    const shipInstance = new Ship(length);
    let shipInform = {
      ship: shipInstance,
      xBegin: xBegin,
      yBegin: yBegin,
      xEnd: xEnd,
      yEnd: yEnd,
    };
    this.shipList.push(shipInform);
    return true;
  }
  #shipLength(xBegin, yBegin, xEnd, yEnd) {
    if (Math.abs(xBegin - xEnd) == 1) {
      return Math.abs(yBegin - yEnd);
    } else {
      return Math.abs(xBegin - xEnd);
    }
  }
  #checkValid(...input) {
    if (this.#checkInBound(input) && !this.#checkCrossShip(input)) {
      return false;
    } else {
      return true;
    }
  }
  #checkInBound(input) {
    let result = true;
    input.forEach((element) => {
      if (element > 9 && element < 0) {
        result = false;
      }
    });
    return result;
  }
  #checkCrossShip(input) {
    let result = false;
    return result;
  }
  getHits(X, Y) {
    let result = false;
    if (this.#inPreviousHit(X, Y)) {
      return result;
    }
    this.shipList.forEach((shipInform) => {
      if (
        X >= shipInform.xBegin &&
        X < shipInform.xEnd &&
        Y >= shipInform.yBegin &&
        Y < shipInform.yEnd
      ) {
        shipInform.ship.hit();
        result = true;
      }
    });
    result ? this.hits.push([X, Y]) : this.misses.push([X, Y]);
    return result;
  }
  #inPreviousHit(X, Y) {
    let result = false;

    this.hits.forEach((element) => {
      if (element[0] == X && element[1] == Y) {
        result = true;
      }
    });
    this.misses.forEach((element) => {
      if (element[0] == X && element[1] == Y) {
        result = true;
      }
    });
    return result;
  }
  checkAllSunk() {
    let result = true;
    this.shipList.forEach((ship) => {
      if (ship.ship.sunk == false) {
        result = false;
        return;
      }
    });
    return result;
  }
}
export default GameBoard;
