const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const clocks = document.querySelector("#clocks");
const todoContainer = document.querySelector("#todo-container");
const buttonContainer = document.querySelector("#button-container");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    clocks.classList.remove(HIDDEN_CLASSNAME); 
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
    buttonContainer.style.display = "flex";
}

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    paintGreetings(savedUsername);
}