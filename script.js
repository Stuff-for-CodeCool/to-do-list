//  load data
function loadData() {
    let items = localStorage.getItem("ToDoList");
    return items == null ? [] : JSON.parse(items);
}

//  save data

//  mark done

//  delete

//  add item

//  build list

//  interactions

//  start
let items = loadData();
