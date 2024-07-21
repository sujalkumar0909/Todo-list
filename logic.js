let input = document.getElementById("in");
let text = document.querySelector(".text");

function Add() {
    if (input.value === "") {
        alert("Please enter a value");
    } else {
        let newElement = document.createElement("p");
        newElement.innerHTML = `${input.value} <button style="width:50px; height:30px;float:right">Delete</button>`;
        text.appendChild(newElement);
        input.value = "";
        newElement.querySelector("button").addEventListener("click", remove);
    }
}

function remove() {
    this.parentNode.remove();
}