//Ошибка создания экземпляра класса

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        // super(name)
        this.name = name; // а эта строчка не нужна
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined - ошибка потому что мы должны использовать
                                               // super() когда переопределяем конструктор наследуюшего класса
alert(rabbit.name);

