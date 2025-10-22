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
    if (b === 0) {
        return "Error: can't divide by 0";
    }
    return a / b;
}

add(3, 5);
divide(10, 0);

function operate(operate, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operate) {
      case '+':
        return add(a,b);
      case '+':
        return subtract(a,b);
      case '+':
        return multiply(a,b);
      case '+':
        return divide(a,b);
      default:
        return null;
    }
}

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.queryElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
  if (!isNaN(value)) appendNumber(value);
  else if (value === '.') appendDecimal();
  else if (value === 'Clear') clear();
  else if (value === 'X') backspace();
  else if (['+', '-', '*', '/'].includes(value)) setOperator(value);
  else if (value === '=') evaluate();
}

function appendNumber(number) {
  if (display.textContent === '0' || shouldResetDisplay) resetDisplay();
  display.textContent += number;
}

function appendDecimal() {
  if (shouldResetDisplay) resetDisplay();
  if (!display.textContent.includes('.')) display.textContent += '.';
}

function resetDisplay() {
  display.textContent = '';
  shouldResetDisplay = false;
}

function clear() {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
}

function backspace() {
  display.textContent = display.textContent.toString().slice(0, -1) || '0';
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondNumber = display.textContent;
  const result = operate(currentOperator, firstNumber, secondNumber);
  display.textContent = Math.round(result * 1000) / 1000;
  currentOperator = null;
}

