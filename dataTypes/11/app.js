// Создайте дату

const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Покажите день недели
const NAME_DAY_OF_WEEK = {
  0: "ВС",
  1: "ПН",
  2: "ВТ",
  3: "СР",
  4: "ЧТ",
  5: "ПТ",
  6: "СБ",
};

function getWeekDate(date) {
  return NAME_DAY_OF_WEEK[date.getDay()];
}

console.log(getWeekDate(date));

// День недели в европейской нумерации

function getLocalDay(date) {
  return date.getDay() === 7
    ? NAME_DAY_OF_WEEK[0]
    : NAME_DAY_OF_WEEK[date.getDay()];
}

// Какой день месяца был много дней назад?
const COUNT_MS_IN_DAY = 24 * 3600000;
let newDate = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  const daysInMs = days * COUNT_MS_IN_DAY;
  return new Date(date.getTime() - daysInMs).getDate();
}

console.log(getDateAgo(newDate, 365));

// Последнее число месяца?

function getLastDayOfMonth(year, month) {
  const prevMonth = new Date(year, month, 1).getTime();
  const nextMonth = new Date(year, month + 1, 1).getTime();

  return (nextMonth - prevMonth) / COUNT_MS_IN_DAY;
}

console.log(getLastDayOfMonth(2012, 1));

// Сколько сегодня прошло секунд?
const COUNT_MS_IN_SEC = 1000;

function getSecondsToday() {
  const currentTime = new Date();
  const startTodayDay = new Date().setHours(0, 0, 0, 0);

  return Math.floor((currentTime.getTime() - startTodayDay) / COUNT_MS_IN_SEC);
}

console.log(getSecondsToday());

// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
  const currentTime = new Date();
  const nextDay = new Date().setHours(24, 0, 0, 0);

  return Math.floor((nextDay - currentTime.getTime()) / COUNT_MS_IN_SEC);
}

console.log(getSecondsToTomorrow());
