// Проверка на пустоту
"use strict";
const simpleObject = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(simpleObject));
