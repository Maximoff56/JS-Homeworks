'use strict'

while (true) {
    let count = prompt("Введите количество товара для проверки наличия на складе или введите 0 для отмены запроса");
    if (count === "0" || count === null) break;
    if (count.length === 2 && count[count.length - 2] === "1") {
        console.log(`На складе в наличии ${count} товаров`);
        break;
    }
    if (count.length >= 1 && (count[count.length - 1] === "1" || count[count.length - 1] === "2" || count[count.length - 1] ==="3" || count[count.length - 1] === "4")) {
        console.log(`На складе в наличии ${count} товар`);
        break;
    }
    if (count.length >= 1 && (count[count.length - 1] === "5" || count[count.length - 1] === "6" || count[count.length - 1] === "7" || count[count.length - 1] === "8" || count[count.length - 1] === "9" || count[count.length - 1] === "0")) {
        console.log(`На складе в наличии ${count} товаров`);
        break;
    }
}
