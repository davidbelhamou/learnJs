let num1 = 8;
let num2 = 2;
let result = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    result.textContent = String(num1 + num2);
    return "Sum: " + result.textContent;

}

function multiply() {
    result.textContent = String(num1 * num2);
    return "Sum: " + result.textContent;
}

function divide() {
    result.textContent = String(num1 / num2);
    return "Sum: " + result.textContent;
}

function substract() {
    result.textContent = String(num1 - num2);
    return "Sum: " + result.textContent;
}