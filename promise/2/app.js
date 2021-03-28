// Можно ли "перевыполнить" промис?
let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // выведется 1, потому что мы в самом начале executor завершили промис с результатом 1,
                           // все что идет ниже будет игнорироваться

// Задержка на промисах

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(`promise it's cool`), ms);
    });
}

delay(3000).then((message) => console.log(`${message} выполнилось через 3 секунды`));

// Анимация круга с помощью промиса

function go() {
    showCircle(150, 150, 100)
        .then(div => {
            div.classList.add('message-ball');
            div.append("Hello, world!");
        });
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        });
    })
}