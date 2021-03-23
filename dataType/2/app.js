// Сумма пользовательских чисел
'use strict';
const ERROR_MESSAGE = 'Произошла ошибка вычисления суммы. Введите значения еще раз.';
const DEFAULT_NUMBER_VALUE = '0';

let firstNumber = +prompt('Введите первое число', DEFAULT_NUMBER_VALUE);
let secondNumber = +prompt('Введите второе число', DEFAULT_NUMBER_VALUE);

function calcSum(firstValue, secondValue) {
    return (isNaN(firstValue) || isNaN(secondValue)) ? ERROR_MESSAGE : firstValue + secondValue;
}

alert( calcSum(firstNumber, secondNumber) );