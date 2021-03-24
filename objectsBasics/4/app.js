// Создайте калькулятор
"use strict";
const DEFAULT_VALUE = 0;

const calculator = {
  operationResult: DEFAULT_VALUE,

  read() {
    const firstValue = +prompt("Введите первое число", DEFAULT_VALUE);
    const secondValue = +prompt("Введите первое число", DEFAULT_VALUE);

    this.firstValue = isNaN(firstValue) ? DEFAULT_VALUE : firstValue;
    this.secondValue = isNaN(secondValue) ? DEFAULT_VALUE : secondValue;
  },

  sum() {
    return (this.result = this.firstValue + this.secondValue);
  },

  mul() {
    return (this.result = this.firstValue * this.secondValue);
  },
};

calculator.read();

console.log(calculator.sum());

console.log(calculator.mul());
