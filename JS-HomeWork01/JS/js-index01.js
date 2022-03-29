// task1
console.log("Задание 1:")
let amount = 110000;
let stopLine = 100000;
let result = amount > stopLine ? `К оплате с учетом скидки 10%: ${amount*0.9} рублей`  : `Сумма к оплате без скидки: ${amount} рублей`;
console.log(result);

// task2
console.log("Задание 2:")
let x = 78;
let y = ((x-(x%10))/10);
let z = (x%10);
console.log (x);
console.log (y);
console.log (z);
console.log (y+z);

// task4
console.log("Задание 4:")
let m = 12;
let n = 56;
console.log(m, n);
n = [m, m=n][0];
console.log(m, n);



