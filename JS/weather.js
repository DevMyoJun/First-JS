const API_KEY = "98bd91ca80e17dc9260d76ff256ba3e2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} ºC`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);