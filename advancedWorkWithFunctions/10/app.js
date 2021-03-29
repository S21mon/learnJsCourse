// Исправьте функцию, теряющую "this"
"use strict";

function askPassword(ok, fail) {
  let password = "rockstar"; /*prompt("Password?", "")*/
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = "rockstar";
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user1.login.bind(user1, true), user1.login.bind(user1, false)); // ?
