'use strict'

console.log("Задание №1:");
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function sortMass(numA,numB){
    if (numA===numB) return 0;
    if (numA.length<numB.length) return -1;
    return 1;
}
numbers.sort(sortMass);
console.log(numbers);

console.log("Задание №2:");
let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
function sortText(textA,textB) {
    if (textA===textB) return Math.random()*3-1;
    if (textA<textB) return Math.random()*3-1;
    return Math.random()*3-1;
}
presents.sort(sortText);
console.log(presents);

console.log("Задание №3:");
let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"],
    res = [];
res[0]=first.filter(fir=>fir.includes("Октябрь"));
res[1]=second.filter(sec=>sec.includes("Май"));
console.log(res);

console.log("Задание №4:");
let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
if (temperatures[0].some(temp=>temp>500) || temperatures[1].some(temp=>temp>500) || temperatures[2].some(temp=>temp>500)) {
    console.log("Температу поднималась выше 500")
} else {console.log("Температуры выше 500 не было") };








