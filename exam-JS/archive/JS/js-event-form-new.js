'use strict';

document.forms["add-event"].elements.title.addEventListener("input", function () {
    if (this.validity.valueMissing) {
        this.nextElementSibling.innerText = "Необходимо ввести значение"
        return;
    }
    if (this.validity.tooShort) {
        this.nextElementSibling.innerText = "Минимальное количество символов для ввода - 2";
        return;
    }
    if (this.validity.tooLong) {
        this.nextElementSibling.innerText = "Максимальное количество символов для ввода - 300";
        return;
    }
})

document.forms["add-event"].elements.about.addEventListener("input", function () {
    if (this.validity.valueMissing) {
        this.nextElementSibling.innerText = "Необходимо ввести значение"
        return;
    }
    if (this.validity.tooShort) {
        this.nextElementSibling.innerText = "Минимальное количество символов для ввода - 10";
        return;
    }
    if (this.validity.tooLong) {
        this.nextElementSibling.innerText = "Максимальное количество символов для ввода - 3000";
        return;
    }
})

document.forms["add-event"].elements.dateTime.addEventListener("input", function () {
    let currentTime = Date.now();
    if (this.validity.valueMissing) {
        this.nextElementSibling.innerText = "Необходимо ввести значение"
        return;
    }
    if (this < currentTime) {
        this.nextElementSibling.innerText = "Дата, на которую вы хотите записаться уже прошла";
        return;
    }
})

document.forms["add-event"].elements.plusMember.addEventListener("click", function (){
    let memberSection = document.querySelector(".column-member");
    let newMember = document.createElement("div");
    newMember.
    newMember.classList.add("newMember");
    newMember.innerHTML =
    `<input type="text" placeholder="Введите ФИО участника">
    <input type="text" placeholder="Введите автомобиль участника">
    <input type="reset" value="X" name="deleteMember">
    `;
    memberSection.append(newMember);
})

// document.forms["add-event"].elements.deleteMember.addEventListener("click", function (){
//     document.forms["add-event"].elements.addMember.remove();
// })



