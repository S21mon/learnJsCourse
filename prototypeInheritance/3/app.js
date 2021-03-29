'use strict';

// Добавить функциям метод "f.defer(ms)"
if (!Function.prototype.defer) {
    Function.prototype.defer = function(delay) {
        setTimeout(() => this(), delay);
    }
}

function f() {
    console.log('hello');
}

f.defer(1000);

// Добавьте функциям декорирующий метод "defer()"

if (!Function.prototype.secondDefer) {
    Function.prototype.secondDefer = function(delay) {
        let that = this;
        return function () {
            setTimeout(() => that.apply(this, arguments), delay);
        }
    }
}

function func(a, b) {
    console.log(a + b);
}

func.secondDefer(1000)(1, 2);
