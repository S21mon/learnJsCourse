// Перепишите 'if..else' в '?'

// с использованием 'if..else'
let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

// без использования 'if..else'
message = (login == 'Сотрудник') ? 'Привет' :
          (login == 'Директор') ? 'Здравствуйте' :
          (login == 'Нет логина') ? 'Нет логина' : '';
