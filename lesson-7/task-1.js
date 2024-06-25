class Calculator {
	add(firstArg, secondArg) {
		return firstArg + secondArg;
	}

	subtract(firstArg, secondArg) {
		return firstArg - secondArg;
	}

	multiply(firstArg, secondArg) {
		return firstArg * secondArg;
	}

	divide(firstArg, secondArg) {
		return firstArg / secondArg;
	}
}

const calculator = new Calculator();

console.log(calculator.add(10, 5)); // 15

console.log(calculator.subtract(10, 5)); // 5

console.log(calculator.multiply(10, 5)); // 50

console.log(calculator.divide(10, 5)); // 2
