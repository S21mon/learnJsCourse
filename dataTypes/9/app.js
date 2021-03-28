// Сумма свойств объекта
const DEFAULT_VALUE = 0;

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function calcSumSalaries(object) {
  let salariesSum = DEFAULT_VALUE;
  const salaries = Object.values(object);

  if (salaries.length) {
    for (let salarie of salaries) {
      salariesSum += salarie;
    }
  }
  return salariesSum;
}

console.log(calcSumSalaries(salaries));

// Подсчёт количества свойств объекта

let user = {
  name: "John",
  age: 30,
};

function calcPropertyCount(object) {
  return Object.keys(object).length;
}

console.log(calcPropertyCount(user));
