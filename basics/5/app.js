// Шаблонные строки

let name = "Danya";

alert( `hello ${1}` );      // выведется hello 1 - передаем просто цифру
                            // выражение внутри ${} вычисляется, поэтому можно туда закинуть переменную,
                            // выражение (1+1) и др.

alert( `hello ${"name"}` ); // выведется hello name - передаем просто строку 'name'

alert( `hello ${name}` );   // выведется hello Danya - передаем переменную name
