// Создаём Accumulator
"use strict";
const DEFAULT_VALUE = 0;

function Accumulator(startingValue = DEFAULT_VALUE) {
  this.value = startingValue;

  this.read = function () {
    const userValue = +prompt("Введите значение", DEFAULT_VALUE);
    this.value += isNaN(userValue) ? DEFAULT_VALUE : userValue;
  };
}

const simpleAccumulator = new Accumulator(6);

simpleAccumulator.read();

console.log(simpleAccumulator.value);
