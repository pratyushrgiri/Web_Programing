const apiKey ="API_KEY"; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
const forecastCards = document.getElementById('forecast-cards');
const submitButton = document.getElementById('submit');
async function fetchWeather(city) {
    
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    // console.log(weatherResponse);

    if (!weatherResponse.ok) {
        console.error('Error fetching weather data:', weatherResponse.statusText);
        document.getElementById('city-name').textContent = 'N/A';
        document.getElementById('temperature').textContent = '--- °C';
        document.getElementById('description').textContent = '---';
        return;
    }

    const weatherData = await weatherResponse.json();
    // console.log(weatherData);

    displayWeather(weatherData);
}

function displayWeather(weatherData) {
    document.getElementById('city-name').textContent = weatherData.name;
    document.getElementById('temperature').textContent = `${Math.floor(weatherData.main.temp)} °C`;
    document.getElementById('description').textContent = weatherData.weather[0].description;
}

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        await fetchWeather(city);
    }
});