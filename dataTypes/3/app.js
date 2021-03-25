// Усечение строки
'use strict';
const DEFAULT_STRING = 'я строка пиу';
const DEFAULT_MAX_LENGTH = '0';
const LAST_CHARACTER_LINE = '...';

let userStr = prompt('Введите строку', DEFAULT_STRING);
let maxLength = +prompt('Введите число', DEFAULT_MAX_LENGTH)

function truncate(str, length) {
    return (str.length > length) ? str.substr(0, length  - 1) + LAST_CHARACTER_LINE : str;
}

alert( `А вот и ваша строчка ${truncate(userStr, maxLength)}` );