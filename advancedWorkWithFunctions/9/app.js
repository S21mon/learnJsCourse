// Декоратор-шпион
"use strict";

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function sum() {
    sum.calls.push([].concat(...arguments));
    func.apply(this, arguments);
  }

  sum.calls = [];
  return sum;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// Задерживающий декоратор
function f(x) {
  console.log(x);
}

function delayDecorator(func, delay) {
  return function () {
    const timer = setTimeout(func.call(this, ...arguments), delay);
    clearTimeout(timer);
  };
}

// создаём обёртки
let f1000 = delayDecorator(f, 1000);
let f1500 = delayDecorator(f, 1500);

//f1000("test"); // показывает "test" после 1000 мс
//f1500("asdasdasd"); // показывает "test" после 1500 мс

// Декоратор debounce

function debounce(func, delay) {
  let startTime = Date.now();
  return function () {
    const currentTime = Date.now();
    if (currentTime - startTime > delay) {
      startTime = currentTime;
      func.apply(this, arguments);
    }
  };
}

let fff = debounce(console.log, 1000);

fff(1); // выполняется немедленно
fff(2); // проигнорирован

setTimeout(() => fff(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => fff(4), 1100); // выполняется
setTimeout(() => fff(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
