function getWeather(){
    const apiKey = '9c54a3185dad9718eb42d83a8061b262';
    const city = document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch((error) =>{
            console.log(`Error fetching current weather: ${error}`);
            alert(`Error fetching current weather: ${error}`);
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch((error) =>{
            console.log(`Error fetching hourly forecast: ${error}`);
            alert(`Error fetching hourly forecast: ${error}`);
        });
}


function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-div')
    const weatherInfoDiv = document.getElementById('weather-info')
    const weatherIcon = document.getElementById('weather-icon')
    const hourlyForecastDiv = document.getElementById('hourly-forecast')

    tempDivInfo.innerHTML = ``
    weatherInfoDiv.innerHTML = ``
    hourlyForecastDiv.innerHTML = ``

    if(data.cod == 404){
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`
    }
    else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconUrl = `<img src = "https://openweathermap.org/img/wn/${description}.png`;

        const temperatureHTML = `
        <p>Temperature: ${temperature} <sup>o</sup>C</p>`;

        const weatherHTML = `
        <p>${cityName}</p>
        <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();

    }
}



function displayHourlyForecast(hourlyData){
    const hourlyForecastDiv = document.getElementById('hourly-forecast')
    const next24Hours = hourlyData.slice(0,8);
    
    next24Hours.forEach(item =>{
        const dateTime = new Date(item.dt *1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyForecastHTML = `
        <div class="hourly-item">
            <p>${hour}:00</p>
            <img src="${iconUrl}" alt="Hourly weather icon">
            <p>${temperature} <sup>o</sup>C</p>
        </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyForecastHTML;
    })
}

function showImage(){
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display ='block';
}