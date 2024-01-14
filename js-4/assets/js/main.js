//2
function countArgumentsPure(...args) {
  return args.length;
}

function task2() {
  let inputValue = document.getElementById("arg").value;
  let resultDiv = document.getElementById("result2");
  if (inputValue.trim() === "") {
    resultDiv.innerHTML = "Будь ласка, введіть аргументи";
    return;
}
  let argumentsArray = inputValue.split(',');
  resultDiv.innerHTML = `Кількість аргументів: ${countArgumentsPure(...argumentsArray)} `
}
//3
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
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultDiv = document.getElementById("result3");

  if (!isNaN(num1) && !isNaN(num2)) {
      let comparisonResult = compareNumbers(num1, num2);
      resultDiv.innerHTML = `Результат порівняння: ${comparisonResult}`;
  } else {
      resultDiv.innerHTML = "Будь ласка, введіть коректні числові значення";
  }
}
//4

function task4() {
  let num4 = parseInt(document.getElementById("num4").value);
  let resultDiv = document.getElementById("result4");

  if (!isNaN(num4) && num4 >= 0) {
      let factorialResult = factorial(num4);
      resultDiv.innerHTML = `Факторіал ${num4} = ${factorialResult}`;
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
}
//5
function task5() {
  let num5 = parseInt(document.getElementById("num5").value);
  let num6 = parseInt(document.getElementById("num6").value);
  let num7 = parseInt(document.getElementById("num7").value);
  let resultDiv = document.getElementById("result5");

  if (!isNaN(num5) && !isNaN(num6) && !isNaN(num7) && num5 >= 0 && num6 >= 0 && num7 >= 0 && num5 < 10 && num6 < 10 && num7 < 10) {
      let createdNumber = concatenateNumbers(num5, num6, num7);
      resultDiv.innerHTML = `Створене число: ${createdNumber}`;
  } else {
      resultDiv.innerHTML = "Будь ласка, введіть коректні цифри від 0 до 9";
  }
}

function concatenateNumbers(digit1, digit2, digit3) {
  return parseInt(`${digit1}${digit2}${digit3}`);
}
//6
function task6() {
  let num8 = parseInt(document.getElementById("num8").value);
  let num9 = parseInt(document.getElementById("num9").value);
  let resultDiv = document.getElementById("result6");

  if (!isNaN(num8) && !isNaN(num9) && num8 > 0 && num9 > 0) {
    let areaValue = area(num8, num9);
    resultDiv.innerHTML = `Площа ${areaValue}`;
  } else {
    resultDiv.innerHTML = "Будь ласка, введіть коректне додатнє ціле число";
  }

function area(a, b = 0) {
  return a * b;
}
}
//7
function task7() {
  var userNumber = parseInt(document.getElementById("num10").value);
  var resultDiv = document.getElementById("result7");
  if (isNaN(userNumber) || userNumber <= 0) {
    resultDiv.innerHTML = "Введено некоректне або невірне число. Будь ласка, введіть додатне ціле число.";
    return;
  }
  var denominatorSum = getDenominatorSum(userNumber);
  if (denominatorSum === userNumber) {
    resultDiv.innerHTML = `Число ${userNumber} є досконалим числом.`;
  } else {
    resultDiv.innerHTML = `Число ${userNumber} не є досконалим числом.`;
  }
}

function getDenominatorSum(num) {
  var sum = 0;
  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}
//8
function task8() {
  var minRange = parseInt(document.getElementById("num11").value);
  var maxRange = parseInt(document.getElementById("num12").value);
  var resultDiv = document.getElementById("result8");
  if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
    resultDiv.innerHTML = "Введено некоректний діапазон. Будь ласка, введіть коректні мінімальне і максимальне значення.";
    return;
  }
  var perfectNumbersInRange = findPerfectNumbers(minRange, maxRange);
  if (perfectNumbersInRange.length > 0) {
    resultDiv.innerHTML = "Досконалі числа в діапазоні: " + perfectNumbersInRange.join(", ");
  } else {
    resultDiv.innerHTML = "У вказаному діапазоні немає досконалих чисел.";
  }
}
function findPerfectNumbers(min, max) {
  var perfectNumbers = [];
  for (var num = min; num <= max; num++) {
    if (getDenominatorSum(num) === num) {
      perfectNumbers.push(num);
    }
  }
  return perfectNumbers;
}

