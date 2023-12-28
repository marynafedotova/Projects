"use strict";

// Змінні для імен та прізвищ
var firstName = "Maryna";
var lastName = "Fedotova";
var userName = "marynafedotova";
var nickName = "MF";
/* Неправильні імена
var 1firstName = "Maryna";
var first-name = "Maryna";
var fitst&Name = "Maryna";
var name = "Maryna";
var var = "Maryna";
*/
// ім'я користувача

function task1() {
  var userName = prompt("Будь ласка, введіть своє ім'я:");
  alert('Привіт, ' + userName + '!');
} // вік користувача


function task2() {
  var birthYear = prompt('Будь ласка, введіть свій рік народження:');
  var currentYear = new Date().getFullYear();
  var age = currentYear - parseInt(birthYear);
  alert('Ваш вік: ' + age + ' років.');
} // периметр квадрата


function task3() {
  var sideLength = prompt('Будь ласка, введіть довжину сторони квадрата у см:');
  var perimeter = 4 * parseFloat(sideLength);
  alert('Периметр квадрата дорівнює: ' + perimeter + ' см.');
} // радіуса кола


function task4() {
  var radius = prompt('Будь ласка, введіть радіус кола у см:', '');
  var area = Math.PI * Math.pow(radius, 2);
  var roundedArea = area.toFixed(2);
  alert('Площа окружності з радіусом складає ' + area.toFixed(2) + ' см.');
} //швидкість


function task5() {
  var distance = prompt('Будь ласка, введіть відстань між містами в кілометрах:');
  var time = prompt('Будь ласка, введіть за скільки годин ви хочете добратися:');
  var speed = parseFloat(distance) / parseFloat(time);
  alert('Щоб встигнути вчасно, необхідно рухатися зі швидкістю ' + speed.toFixed(2) + ' км/год.');
}

function task6() {
  var exchangeRate = 0.85;
  var dollars = prompt('Будь ласка, введіть суму в доларах:');
  var euros = parseFloat(dollars) * exchangeRate;
  alert(dollars + ' доларів дорівнюють ' + euros.toFixed(2) + ' євро.');
}