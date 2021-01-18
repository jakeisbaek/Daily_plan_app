const mainClock = document.querySelector(".main_clock");
const mainClockTime = mainClock.querySelector("h1");

function getTime() {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    mainClockTime.innerText = `${hour < 10 ? `0${hour}` : hour }:${minute < 10 ? `0${minute}` : minute }:${second < 10 ? `0${second}` : second }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();