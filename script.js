class Calculator {
    constructor(PI, E) {
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045;
    }
    //---Glitter---
    get pi() {
        return `PI (${this.PI})`;
    }
    get e() {
        return `Euler's number (${this.E})`;
    }
    // ---Matematische Methoden---
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
        return Math.pow(x,y);
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


//Html buttons onclick and id input
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