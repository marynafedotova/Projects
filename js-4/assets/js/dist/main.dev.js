"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//2
function countArgumentsPure() {
  return arguments.length;
}

function task2() {
  var inputValue = document.getElementById("arg").value;
  var resultDiv = document.getElementById("result2");

  if (inputValue.trim() === "") {
    resultDiv.innerHTML = "Будь ласка, введіть аргументи";
    return;
  }

  var argumentsArray = inputValue.split(',');
  resultDiv.innerHTML = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432: ".concat(countArgumentsPure.apply(void 0, _toConsumableArray(argumentsArray)), " ");
} //3


function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function task3() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultDiv = document.getElementById("result3");

  if (!isNaN(num1) && !isNaN(num2)) {
    var comparisonResult = compareNumbers(num1, num2);
    resultDiv.innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F: ".concat(comparisonResult);
  } else {
    resultDiv.innerHTML = "Будь ласка, введіть коректні числові значення";
  }
} //4


function task4() {
  var num4 = parseInt(document.getElementById("num4").value);
  var resultDiv = document.getElementById("result4");

  if (!isNaN(num4) && num4 >= 0) {
    var factorialResult = factorial(num4);
    resultDiv.innerHTML = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B ".concat(num4, " = ").concat(factorialResult);
  } else {
    resultDiv.innerHTML = "Будь ласка, введіть коректне невід'ємне ціле число";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
} //5


function task5() {
  var num5 = parseInt(document.getElementById("num5").value);
  var num6 = parseInt(document.getElementById("num6").value);
  var num7 = parseInt(document.getElementById("num7").value);
  var resultDiv = document.getElementById("result5");

  if (!isNaN(num5) && !isNaN(num6) && !isNaN(num7) && num5 >= 0 && num6 >= 0 && num7 >= 0 && num5 < 10 && num6 < 10 && num7 < 10) {
    var createdNumber = concatenateNumbers(num5, num6, num7);
    resultDiv.innerHTML = "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(createdNumber);
  } else {
    resultDiv.innerHTML = "Будь ласка, введіть коректні цифри від 0 до 9";
  }
}

function concatenateNumbers(digit1, digit2, digit3) {
  return parseInt("".concat(digit1).concat(digit2).concat(digit3));
} //6