// Псевдослучайный генератор
function* pseudoRandom(seed) {
    let number = seed;
    while(true) {
        number = number * 16807 % 2147483647;
        yield number;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
