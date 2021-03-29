// Отсортируйте массив с буквой ё

let animals = ['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК'];

function sortWord(firstWord, secondWord) {
    let collator = new Intl.Collator();
    return collator.compare(firstWord, secondWord);
}

animals.sort(sortWord);

console.log(animals);