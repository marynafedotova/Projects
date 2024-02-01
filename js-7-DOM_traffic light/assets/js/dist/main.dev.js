"use strict";

var currentLightIndex = 0;
var lights = document.querySelectorAll('.light');

function changeLight() {
  // Видаляємо клас "active" з поточного світлодіоду
  lights[currentLightIndex].classList.remove('active'); // Змінюємо поточний індекс для світлодіода

  currentLightIndex = (currentLightIndex + 1) % lights.length; // Додаємо клас "active" та відповідний клас для кольору новому світлодіоду

  lights[currentLightIndex].classList.add('active');
  updateColor();
}

function updateColor() {
  // Забираємо всі класи кольорів усіх світлодіодів
  lights.forEach(function (light) {
    light.classList.remove('red', 'yellow', 'green');
  }); // Додаємо відповідний клас кольору до нового світлодіода

  if (currentLightIndex === 0) {
    lights[currentLightIndex].classList.add('red');
  } else if (currentLightIndex === 1) {
    lights[currentLightIndex].classList.add('yellow');
  } else {
    lights[currentLightIndex].classList.add('green');
  }
}