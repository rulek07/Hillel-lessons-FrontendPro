search_form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    cleaner();
    
    const src = `http://api.openweathermap.org/data/2.5/weather?q=${search_form.inputCity.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    let openWeather = new XMLHttpRequest();

    openWeather.open('GET', src);
    openWeather.responseType = 'json';
    openWeather.send();

    openWeather.onload = function() {
        if (openWeather.status != 200) {
            console.log(`We don't have data about ${search_form.inputCity.value}`)
            error_wrapper.style.display = 'block';
            error_title.textContent = `We don't know anything about the weather in ${search_form.inputCity.value}. Try entering another city.`;
        } else {
            weather_wrapper.style.display = 'flex';
            weatherTitle.innerHTML = `Weather in ${search_form.inputCity.value}`;
            iconBox.innerHTML = `<img src="http://openweathermap.org/img/w/${openWeather.response.weather[0].icon}.png"></img>`
            
            const weatherDescription = weatherList.appendChild(document.createElement("li"));

            weatherDescription.innerHTML = `<li>Temperature: ${openWeather.response.main.temp} &#8451;.</li> `;
            weatherDescription.innerHTML += `<li>Pressure: ${openWeather.response.main.pressure} Pa.</li>`;
            weatherDescription.innerHTML += `<li>Description: ${openWeather.response.weather[0].description}.</li>`;
            weatherDescription.innerHTML += `<li>Humidity: ${openWeather.response.main.humidity} g/m&#179;.</li>`;
            weatherDescription.innerHTML += `<li>Wind speed: ${openWeather.response.wind.speed} m/s.</li>`;
            weatherDescription.innerHTML += `<li>Wind direction: ${openWeather.response.wind.deg} &#176;.</li>`;
        }
    }
};

function cleaner(){
    weatherTitle.textContent = '';
    weatherList.textContent = '';
    weather_wrapper.style.display = 'none';
    error_wrapper.style.display = 'none';
}