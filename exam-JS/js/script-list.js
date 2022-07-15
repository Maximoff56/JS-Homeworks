'use strict'

let new_task_object_full = localStorage.getItem("new_task_object_full");
if (!new_task_object_full) {
    body.innerText = "В списке нет задач";
} else {
    new_task_object_full = JSON.parse(new_task_object_full);
    console.log(new_task_object_full);
        for (let task of new_task_object_full) {

        let div = document.createElement("div");
        div.classList.add("createdDiv")
        document.querySelector("section").append(div);
        div.style.backgroundColor = "rgb(220, 235, 253)";

        let h3 = document.createElement("h3")
        h3.innerText = task.title;
        h3.classList.add("h3");
        div.append(h3);

        let p = document.createElement("p");
        p.innerText = task.description;
        div.append(p);

        let span1 = document.createElement("span");
        span1.innerText = `Выполнить к: ${task.date}`;
        div.append(span1);

        let span2 = document.createElement("span");
        span2.innerText = `Участник: ${task.participiants}`;
        div.append(span2);
    }    
}

let colored_div = document.getElementsByClassName("createdDiv");
for (let i of colored_div) {
i.addEventListener("click", setColor);

function setColor() {

    if (i.style.backgroundColor = "blue") {
        i.addEventListener("click", deleteColor);
            function deleteColor() {
            i.style.backgroundColor = "rgb(220, 235, 253)";
            }
    } else if (i.style.backgroundColor = "rgb(220, 235, 253)") {
        i.addEventListener("click", addColor);
            function addColor() {
            i.style.backgroundColor = "blue";
            }
        }
}
};