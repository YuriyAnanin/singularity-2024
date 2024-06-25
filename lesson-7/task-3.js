const pi = 3.14159;

class Circle {
	constructor(size) {
		this.size = size;
	}

	getArea() {
		return Math.pow(this.size, 2) * pi;
	}

	getPerimeter() {
		return 2 * pi * this.size;
	}
}

let circy = new Circle(11);
console.log(circy.getArea()); // 380.132711084365
console.log(circy.getPerimeter()); // 69.115038378975451
