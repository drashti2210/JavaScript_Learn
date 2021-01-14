// Demo classes
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
}
const s = new Rectangle(4, 5);
console.log(s.area);


class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}
const poly = new Polygon(1, 2, 3, 4);
console.log([...poly.getSides()]);

