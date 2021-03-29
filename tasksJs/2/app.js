// Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию.
// Встроенный метод массивов flat использовать нельзя.
'use strict';

const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flattenArray(array) {
    array.forEach(item => {

    })
}

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

// [1, 2, 3, 4, 5, 6]

console.log(flattenArray(array));