'use strict'
let new_task_object = {
    title: '',
    description: '',
    date: '',
    participiants: [],
};

let tittle_input = document.getElementById("title");
tittle_input.addEventListener("input", input_handler);

let description_input = document.getElementById("description");
description_input.addEventListener("input", input_handler);

let date_input = document.getElementById("date");
date_input.addEventListener("input", input_handler);

let new_participiant = document.getElementById("participiant");
new_participiant.addEventListener("blur", partisipiants_handler);

function input_handler(objectOfEvent) {
    new_task_object[objectOfEvent.target.id] = objectOfEvent.target.value;
    console.log(new_task_object);

    if (new_task_object.title.length < 5) {
        let attention1 = document.getElementById("attention1");
        attention1.style.display = "block";
    } else {
        attention1.style.display = "none";
    }
    let current_date = new Date().toISOString();
    let task_date = new_task_object.date;
            if (task_date < current_date) {
                let attention2 = document.getElementById("attention2");
                attention2.style.display = "block";
            } else {
                attention2.style.display = "none";
            }
};

let add_button = document.getElementById("add-button");
add_button.addEventListener("click", add_handler);

function add_handler() {
    let count_participiators = document.getElementsByClassName('input-participator').length;
    let add_participiant = document.createElement("div");
    add_participiant.classList.add("add-participator");
    add_participiant.setAttribute("id", "add-participator_" + (count_participiators + 1))
    let input = document.createElement("input");
    input.classList.add("input-participator");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Введите имя участника");
    input.addEventListener("blur", partisipiants_handler);
    input.setAttribute("id", count_participiators);
    add_participiant.prepend(input);
    let remove_button = document.createElement("button");
    remove_button.innerHTML = "&#10006;"
    add_participiant.append(remove_button);
    remove_button.addEventListener("click", ()=>{
       remove_handler("add-participator_" + (count_participiators + 1))
    });
    document.getElementById("participator_aside").append(add_participiant);
}

function partisipiants_handler(objectOfEvent) {
    if(objectOfEvent.target.id == 'participiant'){
        new_task_object.participiants[0] = objectOfEvent.target.value

    } else {
        new_task_object.participiants[parseInt(objectOfEvent.target.id)] = objectOfEvent.target.value;
    }
    console.log(new_task_object);
}
let remove_button = document.getElementById("remove-button");
remove_button.addEventListener("click", ()=>{
    remove_handler("add-participator")
});
function remove_handler(remove_id_block) {
    document.getElementById(remove_id_block).remove()
    let index = parseInt(remove_id_block[remove_id_block.length-1])-1
    new_task_object.participiants.splice(index, 1)
    console.log(new_task_object);
    
};
let add_task = document.getElementById("add-task");
add_task.addEventListener("click", task_handler);

function task_handler() {
    let all_tasks = localStorage.getItem("new_task_object_full");
    if (all_tasks) {
        all_tasks = JSON.parse(all_tasks);
        all_tasks.push(new_task_object);
        all_tasks = JSON.stringify(all_tasks);
        localStorage.setItem("new_task_object_full", all_tasks);
    } else {
        let new_task = JSON.stringify([new_task_object]);
        localStorage.setItem("new_task_object_full", new_task);
    }
}