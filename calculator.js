let num1 = [];
let num2 = [];
let operator = "";

let isNum1Done = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function updateDisplay() {
    let equation = num1.join("") + operator + num2.join("");
    document.getElementById("display").textContent = equation;
    console.log(document.getElementById("display").textContent);
}

function selectNumber(event) {
    document.getElementById("display").textContent = "";

    if (isNum1Done === false) {
        num1.push(event.target.id);
        updateDisplay();
    } else {
        num2.push(event.target.id);
        updateDisplay();
    }
}

const numberBtns = document.getElementsByClassName("number");
for (let btn of numberBtns) {
    btn.addEventListener("click", selectNumber);
}

function selectOperator(event) {
    if (num1.length === 0) return;
    operator = event.target.id;
    isNum1Done = true;
    updateDisplay();
}

const operatorBtns = document.getElementsByClassName("operator");
for (let btn of operatorBtns) {
    btn.addEventListener("click", selectOperator);
}

function operate() {
    let int1 = Number(num1.join(""));
    let int2 = Number(num2.join(""));
    if (operator === "+") {
        document.getElementById("display").textContent = add(int1, int2);
    } else if (operator === "-") {
        document.getElementById("display").textContent = subtract(int1, int2);
    } else if (operator === "*") {
        document.getElementById("display").textContent = multiply(int1, int2);
    } else if (operator === "/") {
        document.getElementById("display").textContent = divide(int1, int2);
    } else {
        redocument.getElementById("display").textContent = "Error";
    }
    clear();
}

function clear(event) {
    num1 = [];
    num2 = [];
    operator = "";

    isNum1Done = false;
    if (event) {
        updateDisplay();
    }
}

const enterBtn = document.getElementById("=");
enterBtn.addEventListener("click", operate);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
