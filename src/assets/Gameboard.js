import Ship from "./Ship";
class GameBoard {
  width;
  height;
  closer;
  previousHits;
  hits;
  stuckSpots;
  misses;
  shipList;
  constructor() {
    this.width = 10;
    this.height = 10;
    this.closer = [];
    this.previousHits = [];
    this.hits = [];
    this.stuckSpots = [];
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
    let ATField = this.#createATField(xBegin, yBegin, xEnd, yEnd);
    let shipInform = {
      ship: shipInstance,
      xBegin: xBegin,
      yBegin: yBegin,
      xEnd: xEnd,
      yEnd: yEnd,
      ATField: ATField,
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
    // console.log(input);
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
        this.#checkHitShip(shipInform);
        result = true;
      }
    });
    if (result) {
      this.hits.push([X, Y]);
      let stuckPosition = this.#checkStuckAndShipPoint(X, Y);
      stuckPosition.forEach((element) => {
        this.stuckSpots.push(element);
      });
    } else {
      this.misses.push([X, Y]);
    }
    return result;
  }
  #checkHitShip(ship) {
    console.log(ship.xEnd);
  }
  #createATField(xBegin, yBegin, xEnd, yEnd) {
    let result = [];
    if (xEnd - xBegin == 1) {
      result.push([xBegin, yBegin - 1]);
      result.push([xBegin, yEnd]);
      for (let y = yBegin - 1; y <= yEnd; y++) {
        result.push([xBegin - 1, y]);
        result.push([xEnd + 1, y]);
      }
    } else {
      result.push([xBegin - 1, yBegin]);
      result.push([xEnd, yBegin]);
      for (let x = xBegin - 1; x <= xEnd; x++) {
        result.push([x, yBegin - 1]);
        result.push([x, yEnd]);
      }
    }
    console.log(result);

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
  #checkStuckAndShipPoint(X, Y) {
    let points = [
      [X - 1, Y - 1],
      [X - 1, +Y + 1],
      [+X + 1, Y - 1],
      [+X + 1, +Y + 1],
    ];
    let exceptions = [];
    points.forEach((point) => {
      this.shipList.forEach((shipInform) => {
        if (
          point[0] >= shipInform.xBegin &&
          point[0] < shipInform.xEnd &&
          point[1] >= shipInform.yBegin &&
          point[1] < shipInform.yEnd
        ) {
          exceptions.push(point);
        } else {
        }
      });
    });
    let index = [];
    points.forEach((point, i) => {
      exceptions.forEach((exception) => {
        if (point[0] == exception[0] && point[1] == exception[1]) {
          index.push(i);
        }
      });
    });
    index.forEach((element) => {
      points.splice(element, 1);
    });

    return points;
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
