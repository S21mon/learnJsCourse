// Деструктурирующее присваивание
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin);

// Максимальная зарплата

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function getTopSalary(object) {
  let nameTopEmployees;
  let maxSalarie = 0;
  const salaries = Object.entries(object);

  if (!salaries.length) return null;
  for (let [name, salarie] of salaries) {
    if (salarie > maxSalarie) {
      maxSalarie = salarie;
      nameTopEmployess = name;
    }
  }
  return object[nameTopEmployess];
}

console.log(getTopSalary(salaries));
