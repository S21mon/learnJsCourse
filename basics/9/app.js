// Операторы сравнения

5 > 4                   // true
"ананас" > "яблоко"     // false сравниваются посимвольно 'я' > 'а'
"2" > "12"              // true сравниваются также посимвольно '2' > '1'
undefined == null       // true - undefined равен null и ничему другому
undefined === null      // false - разные типы
null == "\n0\n"         // false - потому что null равен только undefined и ничему другому
null === +"\n0\n"       // false - потому что разные типы
