
document.addEventListener('DOMContentLoaded', function() {
  function getWeather() {
      const apiKey = 'db760a385a63fc11b7a8fad5b0bc0637';
      const city = 'Lviv';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const storedWeather = localStorage.getItem('weatherData');
      if (storedWeather) {
          const { timestamp, data } = JSON.parse(storedWeather);
          const currentTime = new Date().getTime();
          const twoHours = 2 * 60 * 60 * 1000;

          if (currentTime - timestamp < twoHours) {
              displayWeather(data);
              return;
          }
      }
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              const currentTime = new Date().getTime();
              const weatherData = { timestamp: currentTime, data: data };
              localStorage.setItem('weatherData', JSON.stringify(weatherData));

              displayWeather(data);
          })
          .catch(error => console.error('Error fetching weather:', error));
  }
  function displayWeather(data) {
      const weatherContainer = document.getElementById('weather-container');
      const weatherInfo = document.getElementById('weather-info');

      const temperature = Math.round(data.main.temp - 273.15); 
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `Temperature: ${temperature}°C, Description: ${description}`;
  }
  getWeather();
});