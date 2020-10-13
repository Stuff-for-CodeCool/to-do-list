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
function markDone(i) {}

//  delete
function deleteEntry(i) {}

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
    buildList();
}

//  build list
function buildList() {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let div = document.createElement("div");
        if (items[i].done) {
            div.classList.add("done");
        }

        let span = document.createElement("span");
        span.innerText = items[i].text;

        let markButton = document.createElement("button");
        markButton.innerText = "Done?";
        markButton.addEventListener("click", function (event) {
            event.preventDefault();
            markDone(i);
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            deleteEntry(i);
        });

        div.appendChild(span);
        div.appendChild(markButton);
        div.appendChild(deleteButton);

        list.appendChild(div);
    }
}

//  interactions
document.querySelector("form").addEventListener("submit", addItem);

//  start
let items = loadData();
buildList();
