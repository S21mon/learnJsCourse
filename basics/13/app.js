// Повторять цикл, пока ввод неверен

'use strict';

const CONDITION_VALUE = 100;
let userAge;

do {
    userAge = prompt(`Введите число большее ${CONDITION_VALUE}`);
} while (userAge && userAge < CONDITION_VALUE)
