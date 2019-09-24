let numAdded = 1;

function addItem() {
    const inputField = document.getElementById("user-input");
    const userText = inputField.value;
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML += "<div class='list-item' id="+ numAdded +"><li>" + userText + "</li><button onclick='removeItem(" + numAdded +  ")'>Delete</button></div>";
    numAdded++;
    document.getElementById("user-input").value = "";
}



function removeItem(id) {
    const element = document.getElementById(id);
    console.log(element);
    element.parentNode.removeChild(element);
    //child.parentNode.removeChild(child);
}