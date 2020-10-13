//  load data
function loadData() {
    let items = localStorage.getItem("ToDoList");
    return items == null ? [] : JSON.parse(items);
}

//  save data
function saveData() {
    localStorage.setItem("ToDoList", JSON.stringify(items));
}

//  mark done

//  delete

//  add item
function addItem(event) {
    event.preventDefault();
    let textField = document.querySelector("#new");

    items.push({
        text: textField.value,
        done: false,
    });

    textField.value = "";
    saveData();
}

//  build list

//  interactions
document.querySelector("form").addEventListener("submit", addItem);

//  start
let items = loadData();
