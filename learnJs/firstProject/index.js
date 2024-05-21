
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
    countEl.textContent++;
}

function save() {
    saveEl.textContent += countEl.innerText + " - ";
    countEl.textContent =  0;
}

