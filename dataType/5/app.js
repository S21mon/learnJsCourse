// Переведите текст вида border-left-width в borderLeftWidth
"use strict";
const DELIMETER = "-";
const UNIFIER = "";

function camelize(str) {
  let strArray = str.split(DELIMETER);

  let newStrArray = strArray.map((item, index) =>
    index > 0 ? item[0].toUpperCase() + item.substring(1) : item
  );

  return newStrArray.join(UNIFIER);
}

console.log(camelize("-webkit-transition"));

// Фильтрация по диапазону
const arrayForFiltration = [5, 3, 8, 1];

function filterRange(array, firstValue, secondValue) {
  return array.filter((item) => item >= firstValue && item <= secondValue);
}

console.log(filterRange(arrayForFiltration, 1, 4));

// Фильтрация по диапазону "на месте"
const arrayForPlaceFiltration = [5, 3, 8, 1];

function filterRangeInPlace(array, firstValue, secondValue) {
  array.map((item, index, array) => {
    if (!checkBeingInRange(item, firstValue, secondValue)) {
      array.splice(index, 1);
    }
  });
}

function checkBeingInRange(item, firstValue, secondValue) {
  return item >= firstValue && item <= secondValue;
}

filterRangeInPlace(arrayForPlaceFiltration, 3, 8);

console.log(arrayForPlaceFiltration);

// Сортировать в порядке по убыванию
const arrForSort = [5, 2, 1, -10, 8];

function sortByWaning(firstValue, secondValue) {
  return firstValue > secondValue ? -1 : firstValue < secondValue ? 1 : 0;
}

arrForSort.sort(sortByWaning);

console.log(arrForSort);

// Скопировать и отсортировать массив
const arrForStringSort = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
  return [].concat(array).sort();
}

const sortedArray = copySorted(arrForStringSort);
console.log(sortedArray); // сортированный массив
console.log(arrForStringSort); // начальный массив

// Создать расширяемый калькулятор
const EXPRESSION_DELIMETER = " ";
const FIRST_VALUE_INDEX = 0;
const SECOND_VALUE_INDEX = 2;
const OPERATOR_INDEX = 1;

function Calculator() {
  this.actions = {
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
  };

  this.calculate = function (stringExpression) {
    const signExpressionArray = stringExpression.split(EXPRESSION_DELIMETER);
    let firstValue = +signExpressionArray[FIRST_VALUE_INDEX];
    let secondValue = +signExpressionArray[SECOND_VALUE_INDEX];

    return this.actions[signExpressionArray[OPERATOR_INDEX]](
      firstValue,
      secondValue
    );
  };

  this.addAction = function (action, performedFunction) {
    this.actions[action] = performedFunction;
  };
}

const newCalculator = new Calculator();

newCalculator.addAction(
  "*",
  (firstValue, secondValue) => firstValue * secondValue
);
console.log(newCalculator.calculate("1 + 5"));
console.log(newCalculator.calculate("2 * 6"));

// Трансформировать в массив имён
// Трансформировать в объекты
// две задачи в одной части кода

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const vasyaFullInfo = { name: "Вася", surname: "Пупкин", id: 1 };
const petyaFullInfo = { name: "Петя", surname: "Иванов", id: 2 };
const mashaFullInfo = { name: "Маша", surname: "Петрова", id: 3 };

const users = [vasya, petya, masha];

const usersFullInfo = [vasyaFullInfo, petyaFullInfo, mashaFullInfo];

const names = [];

for (let user of users) {
  names.push(user.name);
}

const usersMapped = usersFullInfo.map(
  (item) =>
    (item = {
      fullName: item.name + " " + item.surname,
      id: item.id,
    })
);

console.log(`${usersMapped[0].fullName} - ${usersMapped[0].id}`);

// Отсортировать пользователей по возрасту
function sortByAge(array) {
  array.sort((firstValue, secondValue) =>
    firstValue.age < secondValue.age
      ? -1
      : firstValue.age > secondValue.age
      ? 1
      : 0
  );
}

sortByAge(users);

console.log(users);

// Получить средний возраст

function getAvgAge(array) {
  return Math.round(
    array.reduce((acc, item) => (acc += item.age), 0) / array.length
  );
}

console.log(getAvgAge(users));

// Оставить уникальные элементы массива

const stringsArray = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function getUniqueArray(array) {
  let sortedArray = [];

  for (let string of array) {
    if (sortedArray.includes(string)) continue;
    sortedArray.push(string);
  }

  return sortedArray;
}

console.log(getUniqueArray(stringsArray));
