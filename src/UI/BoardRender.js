class BoardRender {
  GameBoard;
  name;
  base;
  render(GameBoard, name) {
    this.GameBoard = GameBoard;
    this.name = name;
    this.base = document.querySelector(`.${this.name}`);
    this.reRender();
  }
  reRender() {
    this.base.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let x = j;
        let y = i;
        let cell = document.createElement("div");
        cell.dataset.x = x;
        cell.dataset.y = y;
        cell.classList.add("cell");
        cell.textContent = `${x}-${y}`;
        cell.addEventListener("click", () => {
          console.log(this.GameBoard.getHits(cell.dataset.x, cell.dataset.y));
          this.reRender();
        });
        this.base.appendChild(cell);
      }
    }
    this.#checkWithData(this.GameBoard.shipList);
    this.#checkMisses(this.GameBoard.misses);
    this.#checkHit(this.GameBoard.hits);
  }
  #checkWithData(shipList) {
    let cells = this.base.querySelectorAll(".cell");
    shipList.forEach((element) => {
      let strings = this.#RowOrColl(
        element.xBegin,
        element.yBegin,
        element.xEnd,
        element.yEnd
      );
      strings.forEach((element) => {
        cells.forEach((cell) => {
          if (cell.dataset.x == element[0] && cell.dataset.y == element[1]) {
            cell.classList.add("ship");
          }
        });
      });
    });
  }
  #RowOrColl(xBegin, yBegin, xEnd, yEnd) {
    let result = [];

    if (xEnd - xBegin == 1) {
      for (let i = yBegin; i < yEnd; i++) {
        result.push([xBegin, i]);
      }
    } else {
      for (let i = xBegin; i < xEnd; i++) {
        result.push([i, yBegin]);
      }
    }
    return result;
  }
  #checkMisses(positions) {
    let cells = this.base.querySelectorAll(".cell");
    positions.forEach((element) => {
      cells.forEach((cell) => {
        if (cell.dataset.x == element[0] && cell.dataset.y == element[1]) {
          console.log(element);
          cell.classList.add("missed");
        }
      });
    });
  }
  #checkHit(positions) {
    let cells = this.base.querySelectorAll(".cell");
    positions.forEach((element) => {
      cells.forEach((cell) => {
        if (cell.dataset.x == element[0] && cell.dataset.y == element[1]) {
          console.log(element);
          cell.classList.add("hit");
        }
      });
    });
  }
}
export default BoardRender;
