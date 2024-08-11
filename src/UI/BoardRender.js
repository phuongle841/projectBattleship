class BoardRender {
  render(GameBoard) {
    let base1 = document.querySelector(".player1");
    let base2 = document.querySelector(".player2");
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let x = i;
        let y = j;
        let cell = document.createElement("div");
        cell.dataset.x = x;
        cell.dataset.y = y;
        cell.classList.add("cell");
        cell.textContent = `${x}-${y}`;

        base1.appendChild(cell);
      }
    }
    this.#checkWithData(GameBoard.shipList);
  }
  #checkWithData(shipList) {
    let base1 = document.querySelectorAll(".player1>.cell");
    shipList.forEach((element) => {
      let strings = this.#RowOrColl(
        element.xBegin,
        element.yBegin,
        element.xEnd,
        element.yEnd
      );
      strings.forEach((element) => {
        base1.forEach((cell) => {
          if (cell.dataset.x == element[0] && cell.dataset.y == element[1]) {
            cell.classList.add("ship");
          }
        });
      });
    });
  }
  #RowOrColl(xBegin, yBegin, xEnd, yEnd) {
    let result = [];
    if (xEnd - xEnd == 1) {
      for (let i = yBegin + 1; i <= yEnd; i++) {
        result.push([xEnd, i]);
      }
    } else {
      for (let i = xBegin + 1; i <= xEnd; i++) {
        result.push([i, yEnd]);
      }
    }
    return result;
  }
}
export default BoardRender;
