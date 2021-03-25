// Фильтрация уникальных элементов массива

const values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function getUniqueValues(array) {
  const uniqueValues = new Set();
  for (let value of array) {
    uniqueValues.add(value);
  }
  return Array.from(uniqueValues);
}

console.log(getUniqueValues(values));

// Отфильтруйте анаграммы

const anagram = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

function cleanAnagram(array) {
  const uniqueValues = new Map();

  array.forEach((item) => {
    let sortedItem = item.toLowerCase().split("").sort().join("");
    uniqueValues.set(sortedItem, item);
  });

  return Array.from(uniqueValues.values());
}

console.log(cleanAnagram(anagram));

// Перебираемые ключи
let map = new Map();
map.set("name", "Danya");
let keys = Array.from(map.keys());

keys.push("bum");
console.log(keys);
