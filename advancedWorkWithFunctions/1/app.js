// Вычислить сумму чисел до данного
"use strict";
const DEFAULT_VALUE = 0;

function sumTo(number) {
  return number ? number + sumTo(number - 1) : number;
}

console.log(sumTo(5050));

// Вычислить факториал

function factorial(number) {
  return number - 1 > 0 ? number * factorial(number - 1) : number;
}

console.log(factorial(5));

// Числа Фибоначчи

function fibonachiNumber(number) {
  return number >= 1
    ? fibonachiNumber(number - 2) + fibonachiNumber(number - 1)
    : number;
}

console.log(fibonachiNumber(7));

// Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printListWithRec(list) {
  console.log(list.value);
  if (list.next) {
    printListWithRec(list.next);
  }
}

printList(list);
printListWithRec(list);

// Вывод односвязного списка в обратном порядке

function printReverseList(list) {
  const flattenList = [];
  while (list) {
    flattenList.push(list.value);
    list = list.next;
  }

  flattenList.reverse().forEach((item) => console.log(item));
}

function printReverseListWithRec(list) {
  if (list.next) {
    printReverseListWithRec(list.next);
  }
  console.log(list.value);
}

printReverseList(list);
printReverseListWithRec(list);
