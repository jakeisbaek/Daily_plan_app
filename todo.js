
const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");


const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event){
    const button = event.target;
    const listToDelete = button.parentNode;
    toDoList.removeChild(listToDelete);
    const cleanToDos = toDos.filter((toDo)=>{
        
        return listToDelete.id !== toDo.id.toString();
    })
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const list = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1

    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteToDo)
    span.innerText = text;
    list.appendChild(deleteButton);
    list.appendChild(span);
    
    toDoList.appendChild(list);
    list.id = newId;

    toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function toDohandleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", toDohandleSubmit);

}

init();