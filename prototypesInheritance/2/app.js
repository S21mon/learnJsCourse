"use strict";

// Создайте новый объект с помощью уже существующего
let obj2 = new obj.constructor();
// это сработает только если не менялся прототип функции-конструктора, с помощью которого был создан объект obj
// например
function Car(model) {
  this.model = model;
}

let car1 = new Car("lada");
let car2 = new car1.constructor("mers"); // мы можем так создать потому что Car.prototype.constructor = Car
