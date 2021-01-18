
let latitude = localStorage.getItem("latitude");
let longitude = localStorage.getItem("longitude");
const weather = document.querySelector(".weather");

function handleGeoSuccess(position){
    latitude = position["coords"].latitude;
    longitude = position["coords"].longitude;
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
    getCurrentWeather();
}

function handleGeoError(){
    console.log('navigator error');
}

function getLocation() {
    
    if(latitude === null || longitude === null) {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    }else {
        getCurrentWeather();
    }
    
    
}

async function getCurrentWeather() {
    const API_KEY = '6555e507cb2a46bda2444864effd5b1f';
    try {
        const requestResult = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${API_KEY}`);
        const results = await requestResult.json();
        weather.innerText = `${results.data[0].temp}°C at ${results.data[0].city_name}`;
    }catch(err) {
        console.log(err);
    }
}

function init() {
    getLocation();
}

init();