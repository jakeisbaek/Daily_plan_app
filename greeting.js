const form = document.querySelector(".main_form");
const name = form.querySelector("input");
const greeting = document.querySelector(".main_greeting");
const LOCAL_STORAGE = 'currentUser';
const showingClientName = 'showing';

function saveName(text) {
    localStorage.setItem(LOCAL_STORAGE, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = name.value;
    colourGreeting(currentValue);
    saveName(currentValue);
}

function askName() {
    form.classList.add(showingClientName);
    form.addEventListener("submit", handleSubmit);
}

function colourGreeting(text) {
    form.classList.remove(showingClientName);
    greeting.classList.add(showingClientName);
    greeting.innerText = `Hello ${text}!`;
    greeting.innerHTML += `<br><br><div class="change_name">If you are not ${text}, please click <span class="change_name_btn">here</span></div>`;
    const reset = document.querySelector(".change_name_btn");
    reset.addEventListener("click", changeName);
}

function getName() {
    const currentUser = localStorage.getItem(LOCAL_STORAGE);
    if (currentUser === null) {
        askName();
    } else {
        colourGreeting(currentUser);       
    }    
}

function changeName() {
    window.location.reload();
    localStorage.removeItem(LOCAL_STORAGE);   
}

function init() {
    getName();
}

init();