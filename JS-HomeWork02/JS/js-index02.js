'use strict'
console.log("Задание 1:");
let count = 1;
if ( count <= 100 && count >= 90) {
    console.log("Отлично");
} else {
    if ( count < 90 && count >=60) {
        console.log("Хорошо");
    } else {
        if (count < 60 && count >= 40) {
            console.log("Удовлетворительно");
        } else {
            if (count < 40 && count >= 0) {
                console.log("Попробуйте еще раз");
            } else {
                console.log("Ведены некорректные данные")
            }
        }
    }
}

console.log("Задание 2:");
let sum = 12800;
let code= "5111";
switch (code) {
    case "4653":
        console.log(`Ваша скидка - 30%. Сумма к оплате ${sum*0.7}`);
        break;
    case "5698":
    case "5111":
        console.log(`Ваша скидка - 20%. Сумма к оплате ${sum*0.8}`);
        break;
    case "6922":
    case "6113":
    case "6090":
        console.log(`Ваша скидка - 10%. Сумма к оплате ${sum*0.9}`);
        break;
    default:
        console.log("Скидка не предусмотрена");
}

console.log("Задание 3:");
let plates = 1000;
let fairy = 10;
console.log(`Всего было ${plates}  тарелок и моющего средства ${fairy} грамм`);
while ( fairy > 0 && plates >0) {
    fairy = fairy - 0.5;
    plates = plates - 1;
}
console.log(`Осталось помыть ${plates}, а средства уже ${fairy} грамм`);

console.log("Задание 4:");
let random = Math.floor((Math.random()*9)+1);
// console.log(random);
while (true) {
    let num = parseInt(prompt("Введите целое число от 1 до 9 или 0 для выхода"));
    if (num == 0) {
        break;
    }
    if (num>9) {
        console.log("Введено некорректное число");
        continue;
    }
    if (num < random) {
        console.log("Загаданное число больше");
        continue;
    }
    if (num > random) {
        console.log("Загаданное число меньше");
        continue
    }
    if (num = random) {
        console.log("Вы угадали");
        break;
    }
}

console.log("Задание 5:");
let random5 = Math.floor(Math.random()*490+10);
// console.log(random5);
let MIN=25
    , MAX=200;
if (random5>=MIN && random5<=MAX) {
    console.log(`Число ${random5} содержится в интервале (${MIN};${MAX})`);
} else {
    console.log(`Число ${random5} не содержится в интервале (${MIN};${MAX})`);
}

console.log("Задание 6:");
let randomPerson = parseInt(prompt("Введите целое число от 1 до 100 или 0 для выхода"));
let clueMin=1, clueMax=100;
let clue = Math.floor((Math.random()*clueMax)+clueMin);
console.log(clue)
while (true) {
    let rightQ=prompt(`Число равно ${clue}? (Да или Нет)`);
    if (rightQ=="Да") {
        console.log("Угадано, поздравляю!");
        break;
    }
    if (rightQ!="Да" && rightQ!="Нет") {
        console.log("Пожалуйста правильно вводите значения! Начнем сначала...");
        break;
    }
    if (rightQ=="Нет") {
        let more = prompt(`Ваше число больше ${clue}? (Да или Нет)`);
        if (more != "Да" && more != "Нет") {
            console.log("Пожалуйста правильно вводите значения! Начнем сначала...");
            break;
        }
        if (more == "Да") {
            clueMin = clue;
            clue = Math.floor(Math.random() * (clueMax - clueMin) + clueMin);
            continue;
        }
        if (more == "Нет") {
            clueMax = clue;
            clue = Math.floor(Math.random() * (clueMax - clueMin) + clueMin);
            continue;
        }
    }
}
    // switch (rightQ) {
    //     case "Да":
    //         console.log("Угадал!")
    //         break;
    //     case "Нет":
    //


