//todolist
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input"); 
const todoList = document.querySelector("#todo-list"); 

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    li.classList.add("todo");

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    span.classList.add("todo");
    
    const button = document.createElement("button");
    button.innerText = "x";
    button.classList.add("todo");
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos()
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}


//animation
//const todoContainer = document.querySelector("#tood-container");

function openTodo(){
    todoContainer.classList.add("open");
}

function closeTodo(event){
    if(event.target.classList.contains("todo") === false){
        todoContainer.classList.remove("open");
    }
}

todoContainer.addEventListener("click", openTodo);
document.body.addEventListener("click", closeTodo);
