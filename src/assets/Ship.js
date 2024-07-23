class Ship {
  length;
  hit;
  sunk;
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }
  hit() {
    this.hit = this.hit + 1;
  }
  isSunk() {
    return this.hit == this.length;
  }
  doBS() {
    console.log("this is bull shit");
  }
  hit2() {
    this.hit++;
  }
}
// export default Ship;
const shipInstance = new Ship(2);

shipInstance.hit2();
