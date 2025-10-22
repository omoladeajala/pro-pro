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