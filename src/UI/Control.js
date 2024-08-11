import Player from "../assets/Player";
import Computer from "../assets/Computer";
import GameBoard from "../assets/Gameboard";
import BoardRender from "./BoardRender";
class Control {
  constructor() {}
}

const Player1 = new Player("join");
const GameBoard1 = new GameBoard();
const Computer1 = new Computer();
const GameBoard2 = new GameBoard();
const BoardRenderInstance = new BoardRender();
GameBoard1.createShip(0, 8, 1, 9);
GameBoard1.createShip(2, 2, 5, 3);

BoardRenderInstance.render(GameBoard1);
