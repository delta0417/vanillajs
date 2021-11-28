const API_KEY = "1af8dcc23fd7bdc6d088cfe831629ca7";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            weather.innerText = `${data.name} | ${data.weather[0].main}`;
        });
}

navigator.geolocation.getCurrentPosition(onGeoOk);