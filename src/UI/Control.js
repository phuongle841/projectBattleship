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
GameBoard1.createShip(1, 1, 2, 5);
GameBoard1.createShip(4, 2, 7, 3);

GameBoard1.createShip(5, 4, 6, 8);
GameBoard1.createShip(0, 1, 1, 2);
GameBoard1.createShip(2, 8, 5, 9);

BoardRenderInstance.render(GameBoard1, Player1.name);
