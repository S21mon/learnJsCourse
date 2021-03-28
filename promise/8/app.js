// Перепишите, используя async/await
/* используется Promise
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}


 */
// используется async / await

async function loadJson(url) {
    let response = await fetch(url);
    return response.status === 200 ? await response.json() : throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

// Перепишите, используя async/await

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson2(url) {
    let response = await fetch(url);
    return response.status === 200 ? await response.json() : throw new HttpError(response);}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let response = null;
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            response = await loadJson2(`https://api.github.com/users/${name}`);
            break;
        } catch (error) {
            if (error instanceof HttpError && error.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    console.log(`Полное имя: ${response.name}.`);
    return response;
}

demoGithubUser();

// Вызовите async–функцию из "обычной"

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait()
        .then(number => console.log(number))
        .catch(error => console.log(error));
}