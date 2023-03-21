class Calculator {
    constructor(PI, E) {
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045;
    }

    get pi() {
        return `PI (${this.PI})`;
    }

    get e() {
        return `Euler's number (${this.E})`;
    }

    ratio(x, y, width) {
        const height = (width * y) / x;
        return `height is ${height} on ratio ${x}:${y}`;
    }

    percentage(x, y) {
        const result = (x / y) * 100;
        return `${result}%`;
    }

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            throw new Error('Divisor cannot be 0');
        }
        return x / y;
    }

    modulation(x, y) {
        if (y === 0) {
            throw new Error('Divisor cannot be 0');
        }
        return x % y;
    }

    elevate(x, y) {
        return Math.pow(x, y);
    }

    sqrt(x) {
        return Math.sqrt(x);
    }
    evaluate(input) {
        try {
            return eval(input);
        } catch (error) {
            return "Error";
        }
    }
}

const calculator = new Calculator();

function addToInput(value) {
    const input = document.getElementById("input");
    input.value += value;
}

function clearInput() {
    const input = document.getElementById("input");
    input.value = "";
}

function backspace() {
    const input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
}

function calculate() {
    const input = document.getElementById("input");
    input.value = calculator.evaluate(input.value);
}


console.log(calculator.pi); // Output: PI (3.141592653589793)
console.log(calculator.e); // Output: Euler's number (2.718281828459045)

console.log(calculator.ratio(16, 9, 1920));
console.log(calculator.percentage(20, 100));
console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(2, 3));
console.log(calculator.divide(6, 3));
console.log(calculator.modulation(5, 2));
console.log(calculator.elevate(2, 3));
console.log(calculator.sqrt(25)); 
