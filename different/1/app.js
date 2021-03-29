// Ошибка при чтении несуществующего свойства

let user = {
    name: 'Danya'
}

function wrap(target) {
    return new Proxy(target, {
        get(target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new Error('Ошибка: такого свойства не существует');
            }
        }
    });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);

// Получение элемента массива с отрицательной позиции

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, property) {
        if (property < 0) {
            return target[target.length + +property];
        } else {
            return target[property];
        }
    }
});

console.log(array[-1]);
console.log(array[-2]);
