// Хранение отметок "не прочитано"
const DEFAULT_READ_STATUS = false;

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readMessages = new WeakSet();

messages.forEach((message) => {
  readMessages.add(message);
});

messages.forEach((message) => {
  console.log(readMessages.has(message));
});

// Хранение времени прочтения
let newMessages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readTimeMessages = new WeakMap();

readTimeMessages.set(newMessages[1], new Date().getDate);
