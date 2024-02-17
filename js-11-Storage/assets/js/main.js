

document.addEventListener('DOMContentLoaded', function() {
  // Функція для отримання погоди з OpenWeather API
  function getWeather() {
      const apiKey = 'db760a385a63fc11b7a8fad5b0bc0637';
      const city = 'Lviv'; // Замініть на назву вашого міста
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      // Перевірка, чи маємо збережені дані в localStorage та чи не минуло 2 години з останнього запиту
      const storedWeather = localStorage.getItem('weatherData');
      if (storedWeather) {
          const { timestamp, data } = JSON.parse(storedWeather);
          const currentTime = new Date().getTime();
          const twoHours = 2 * 60 * 60 * 1000; // 2 години в мілісекундах

          if (currentTime - timestamp < twoHours) {
              displayWeather(data);
              return;
          }
      }

      // Виконання запиту до OpenWeather API
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Зберігання отриманих даних в localStorage
              const currentTime = new Date().getTime();
              const weatherData = { timestamp: currentTime, data: data };
              localStorage.setItem('weatherData', JSON.stringify(weatherData));

              displayWeather(data);
          })
          .catch(error => console.error('Error fetching weather:', error));
  }

  // Функція для відображення інформації про погоду на сторінці
  function displayWeather(data) {
      const weatherContainer = document.getElementById('weather-container');
      const weatherInfo = document.getElementById('weather-info');

      const temperature = Math.round(data.main.temp - 273.15); // Конвертація з Кельвінів в градуси Цельсія
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `Temperature: ${temperature}°C, Description: ${description}`;
  }

  // Викликати функцію отримання погоди при завантаженні сторінки
  getWeather();
});