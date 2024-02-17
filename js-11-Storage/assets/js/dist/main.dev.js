"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Функція для отримання погоди з OpenWeather API
  function getWeather() {
    var apiKey = 'db760a385a63fc11b7a8fad5b0bc0637';
    var city = 'Lviv'; // Замініть на назву вашого міста

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey); // Перевірка, чи маємо збережені дані в localStorage та чи не минуло 2 години з останнього запиту

    var storedWeather = localStorage.getItem('weatherData');

    if (storedWeather) {
      var _JSON$parse = JSON.parse(storedWeather),
          timestamp = _JSON$parse.timestamp,
          data = _JSON$parse.data;

      var currentTime = new Date().getTime();
      var twoHours = 2 * 60 * 60 * 1000; // 2 години в мілісекундах

      if (currentTime - timestamp < twoHours) {
        displayWeather(data);
        return;
      }
    } // Виконання запиту до OpenWeather API


    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      // Зберігання отриманих даних в localStorage
      var currentTime = new Date().getTime();
      var weatherData = {
        timestamp: currentTime,
        data: data
      };
      localStorage.setItem('weatherData', JSON.stringify(weatherData));
      displayWeather(data);
    })["catch"](function (error) {
      return console.error('Error fetching weather:', error);
    });
  } // Функція для відображення інформації про погоду на сторінці


  function displayWeather(data) {
    var weatherContainer = document.getElementById('weather-container');
    var weatherInfo = document.getElementById('weather-info');
    var temperature = Math.round(data.main.temp - 273.15); // Конвертація з Кельвінів в градуси Цельсія

    var description = data.weather[0].description;
    weatherInfo.innerHTML = "Temperature: ".concat(temperature, "\xB0C, Description: ").concat(description);
  } // Викликати функцію отримання погоди при завантаженні сторінки


  getWeather();
});