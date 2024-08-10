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
    this.#checkValid(xBegin, yBegin, xEnd, yEnd);
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
    if (this.#checkInBound(input)) {
      return false;
    } else {
      return true;
    }
  }
  #checkInBound(input) {
    let result = true;
    input.forEach((element) => {
      if (result > 10 && result < 1) {
        result = false;
      }
    });
    return result;
  }
  receiveAttack(x, y) {}
  getHits(X, Y) {
    console.log(this.shipList);
    let result = false;
    this.shipList.forEach((shipInform) => {
      if (
        X >= shipInform.xBegin &&
        X <= shipInform.xEnd &&
        Y >= shipInform.yBegin &&
        Y <= shipInform.yEnd
      ) {
        shipInform.ship.hit();
        result = true;
      }
    });
    return result;
  }
}
export default GameBoard;
