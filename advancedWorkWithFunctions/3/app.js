"use strict";
// Независимы ли счётчики?
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter(); // создается лексическое окружение makeCounter(), возвращается функция, которая содержит скрытое свойство которое ссылается на лексическое окружение makeCounter
let counter2 = makeCounter(); // создается НОВОЕ лексическое окружение makeCounter(), также возвращается функция которая содержит скрытое свойство которое ссылается на уже другое лексическое окружение makeCounter()

console.log(counter()); // 0
console.log(counter()); // 1 - следующий вызов выведет 2

console.log(counter2()); // ? - т.к независимы count (разные лексические окружения), то выведется 0
console.log(counter2()); // ? - выведется 1

// Объект счётчика

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let newCounter = new Counter();

console.log(newCounter.up()); // ? - выведет 1
console.log(newCounter.up()); // ? - выведет 2
console.log(newCounter.down()); // ? - выведет 1

// Сумма с помощью замыканий
function sum(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

console.log(sum(1)(2));

// Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(from, to) {
  return function (item) {
    return item >= from && item <= to;
  };
}

function inArray(array) {
  return function (item) {
    return array.includes(item);
  };
}

console.log(...arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(...arr.filter(inArray([1, 2, 10]))); // 1,2

// Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
  return function (firstElem, secondElem) {
    return firstElem[field] > secondElem[field] ? 1 : -1;
  };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

// Армия функций

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // функция shooter
      alert(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

// let army = makeArmy();

/* army[0](); у 0-го стрелка будет номер 10
army[5](); и у 5-го стрелка тоже будет номер 10 */
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// в данном коде ошибка в том что значение порядкового номера это значение лексического окружения функции makeArmy и значение порядкового номера шутера ссылается на него и будет зависеть от конечного значения
// после записи всех шутеров в массив шутеров, значенине порядкового номера станет равным 10 и следовательно выводимое значение всех шутеров будет равным 10
// нужно изменить лексическое окружение порядкового номера - можем это сделать если будем создавать порядковый номер каждый раз прохода цикла for (каждый раз новое окружение со своим значением порядкового номера)

function fixedMakeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = fixedMakeArmy();
army[0]();
