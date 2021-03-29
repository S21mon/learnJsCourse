"use strict";
// Работа с прототипами

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1) - выведется true т.к объект rabbit имеет свое свойство jumps

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2) - null, потому что у rabbit теперь нет такого свойства и он берет его из прототипа animal

delete animal.jumps;

console.log(rabbit.jumps); // ? (3) - undefined - свойства больше нет нигде

// Алгоритм поиска

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);

// Куда будет произведена запись?

let newAnimal = {
  eat() {
    this.full = true;
  },
};

let newRabbit = {
  __proto__: newAnimal,
};

newRabbit.eat(); // свойство full получит объект newRabbit, потому что this будет привязано к нему
console.log(newRabbit.full);

// Почему наедаются оба хомяка?

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
