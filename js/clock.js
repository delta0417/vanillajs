//date
const dateContainer = document.querySelector("#date-container");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setDate(){
    const date = new Date();
    const month = months[date.getMonth()];
    const dates = date.getDate();
    const years = date.getFullYear();

    dateContainer.innerText = `${month} ${dates}, ${years}`
}

setDate();
setInterval(setDate, 1000);


//clock1
const clock1 = document.querySelector("#clock1");

function setClock1(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock1.innerText = `${hours}:${minutes}:${seconds}`
}

setClock1();
setInterval(setClock1, 1000);



//clock2
const clock2 = document.querySelector("#clock2");
const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

function setClock2(){
    const date = new Date();
    const hours = (date.getHours())%12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hourHand.style.transform = `rotate(${hours*30+minutes*0.5+seconds*(1/120)}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6+seconds*0.1}deg)`;
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
};

setClock2();
setInterval(setClock2, 1000);



//button
const button1 = document.querySelector("#button-container input:first-child");
const button2 = document.querySelector("#button-container input:last-child");

const CLOCK_KEY = "clock"
const CLICK_KEY = "clicked"

function button1Click(){
    clock1.style.display = "flex";
    clock2.style.display = "none";
    localStorage.setItem(CLOCK_KEY, 1);
}

function button2Click(){
    clock1.style.display = "none";
    clock2.style.display = "flex";
    localStorage.setItem(CLOCK_KEY, 2);
}

button1.addEventListener("click", button1Click);
button2.addEventListener("click", button2Click);

if(localStorage.getItem(CLOCK_KEY)){
    if(parseInt(localStorage.getItem(CLOCK_KEY))===1){
        clock1.style.display = "flex";
        clock2.style.display = "none";
        button1.checked = true;
    }else{
        clock1.style.display = "none";
        clock2.style.display = "flex";
        button2.checked = true;
    }
}