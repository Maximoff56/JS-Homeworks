'use strict'

console.log("Задание № 2:");
let numbers = [1,-2,3,-4,5,6,7,-8,9,-10,11,12,-13,14,15,16,17,-18,-19,-20];
let subZero = [];
for (let elements of numbers) {
    if (elements < 0) {
        subZero.push(elements);
    }
}
console.log(subZero);

console.log("Задание № 3:");
let grid = [Math.floor(Math.random()*294+6),Math.floor(Math.random()*294+6),Math.floor(Math.random()*294+6),Math.floor(Math.random()*294+6),Math.floor(Math.random()*294+6)];
console.log(grid);
let maxIndex = grid.indexOf(Math.max.apply(null, grid));
let max = grid[maxIndex];
console.log(`${maxIndex}, ${max}`);
let minIndex = grid.indexOf(Math.min.apply(null, grid));
let min = grid[minIndex];
console.log(`${minIndex}, ${min}`);
grid[maxIndex]=min;
grid[minIndex]=max;
console.log(grid);

console.log("Задание № 4:");
let massive = [];
while (true) {
    let words = prompt("Введите фразу или 0 для выхода");
    if (words === "0" || words === null) break;
    else {
        // for (let wrote of massive) {
        //     if (wrote.toLowerCase().startsWith(words.toLowerCase())) {
                massive.push(words);
                console.log(massive);
            }
        }







