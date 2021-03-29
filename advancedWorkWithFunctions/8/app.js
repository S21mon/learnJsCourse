// Вывод каждую секунду
const DELAY_ONE_SEC = 1000;
function printNumbers(from, to) {
  const timer = setInterval(() => {
    while (from < to) {
      alert(from++);
    }
    clearInterval(timer);
  }, DELAY_ONE_SEC);
}

//printNumbers(2, 7);

function printNumbersWithRec(from, to) {
  let timer = setTimeout(function getNumber() {
    alert(from);
    if (from < to) {
      from++;
      console.log(timer);
      timer = setTimeout(getNumber(), DELAY_ONE_SEC);
    }
    clearTimeout(timer);
  }, DELAY_ONE_SEC);
}

printNumbersWithRec(1, 10);
