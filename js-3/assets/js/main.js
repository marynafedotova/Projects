// 1
function task1() {
  var ageInput = document.getElementById("age");
  var resultDiv = document.getElementById("result1");
  var age = ageInput.value;
  if (age === "") {
      resultDiv.innerHTML = "Ви не ввели вік.";
      return;
  }
  age = parseInt(age);
  if (isNaN(age) || age < 0) {
      resultDiv.innerHTML = "Введено некоректні дані. Будь ласка, введіть додатнє число.";
  } else {
      if (age < 12) {
          resultDiv.innerHTML = "Ви дитина.";
      } else if (age < 18) {
          resultDiv.innerHTML = "Ви підліток.";
      } else if (age < 60) {
          resultDiv.innerHTML = "Ви дорослий.";
      } else if (age < 120) {
          resultDiv.innerHTML = "Ви пенсіонер.";
      } else {
          resultDiv.innerHTML = "Некоректно введені дані, будь ласка, введіть правильно свій вік.";
      }
  }
}
//2
function task2() {
  var numberInput = document.getElementById("number");
  var resultDiv = document.getElementById("result2");
  var userNumber = numberInput.value;
  if (userNumber === "") {
      resultDiv.innerHTML = "Ви не ввели число.";
      return;
  }
  userNumber = parseInt(userNumber);
  if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
      resultDiv.innerHTML = "Введено некоректне число. Будь ласка, введіть число від 0 до 9.";
  } else {
      var specialCharacter;

      switch (userNumber) {
          case 0:
              specialCharacter = ")";
              break;
          case 1:
              specialCharacter = "!";
              break;
          case 2:
              specialCharacter = "@";
              break;
          case 3:
              specialCharacter = "#";
              break;
          case 4:
              specialCharacter = "$";
              break;
          case 5:
              specialCharacter = "%";
              break;
          case 6:
              specialCharacter = "^";
              break;
          case 7:
              specialCharacter = "&";
              break;
          case 8:
              specialCharacter = "*";
              break;
          case 9:
              specialCharacter = "(";
              break;
          default:
              specialCharacter = "Невідомий символ";
      }
      resultDiv.innerHTML = "Спецсимвол для введеного числа: " + specialCharacter;
  }
}

//3
function task3() {
  var num1Input = document.getElementById("num1");
  var num2Input = document.getElementById("num2");
  var resultDiv = document.getElementById("result3");
  var firstNumber = num1Input.value;
  var secondNumber = num2Input.value;
  if (firstNumber === "" || secondNumber === "") {
      resultDiv.innerHTML = "Ви не ввели обидва числа.";
      return;
  }
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
      resultDiv.innerHTML = "Введено некоректні дані. Будь ласка, введіть числа.";
  } else {
      if (secondNumber < firstNumber) {
          var temp = firstNumber;
          firstNumber = secondNumber;
          secondNumber = temp;
      }
      var sum = 0;
      for (var i = firstNumber; i <= secondNumber; i++) {
          sum += i;
      }
      resultDiv.innerHTML = "Сума чисел у заданому діапазоні: " + sum;
  }
}
//4
function task4() {
  var num1Input = document.getElementById("num3");
  var num2Input = document.getElementById("num4");
  var resultDiv = document.getElementById("result4");
  var num1 = num1Input.value;
  var num2 = num2Input.value;
  if (num1 === "" || num2 === "") {
      resultDiv.innerHTML = "Ви не ввели обидва числа.";
      return;
  }
  var a = parseInt(num1);
  var b = parseInt(num2);
  if (isNaN(a) || isNaN(b)) {
      resultDiv.innerHTML = "Введено некоректні дані. Будь ласка, введіть числа.";
  } else {
      var min = a < b ? a : b;
      var bigCommonDenominator;
      for (var i = 0; i <= min; i++) {
          if (a % i === 0 && b % i === 0) {
              bigCommonDenominator = i;
          }
      }
      resultDiv.innerHTML = "Найбільший спільний дільник: " + bigCommonDenominator;
  }
}
//5
function task5() {
  var num5Input = document.getElementById("num5");
  var resultDiv = document.getElementById("result5");
  var userNumber = num5Input.value;
  if (userNumber === "") {
      resultDiv.innerHTML = "Ви не ввели число.";
      return;
  }
  userNumber = parseInt(userNumber);
  if (isNaN(userNumber)) {
      resultDiv.innerHTML = "Введено некоректне число. Будь ласка, введіть число.";
  } else {
      var denominator = "";
      for (var i = 1; i <= userNumber; i++) {
          if (userNumber % i === 0) {
              denominator += i + ", ";
          }
      }
      denominator = denominator.slice(0, -2);
      resultDiv.innerHTML = "Дільники числа " + userNumber + ": " + denominator;
  }
}
//6
function task6(){
var num = document.getElementById("num6").value;
var resultDiv = document.getElementById("result6");
var units = num % 10;
var tens = Math.floor(num / 10) % 10;
var hundreds = Math.floor(num / 100) % 10;
var thousands = Math.floor(num / 1000) % 10;
var tenThousands = Math.floor(num / 10000) % 10;
if (units === tenThousands && tens === thousands) {
  resultDiv.innerHTML = "Число " + num + " є паліндромом.";
} else {
  resultDiv.innerHTML = "Число " + num + " не є паліндромом.";
}
}
//7
function task7() {
  var purchaseInput = document.getElementById("num7");
  var resultDiv = document.getElementById("result7");
  var purchaseAmount = parseFloat(purchaseInput.value);
  if (isNaN(purchaseAmount)) {
    resultDiv.innerHTML = "Введено некоректну суму покупки. Будь ласка, введіть число.";
  } else {
    var discount;
    if (purchaseAmount >= 200 && purchaseAmount < 300) {
      discount = 0.03;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
      discount = 0.05;
    } else if (purchaseAmount >= 500) {
      discount = 0.07;
    } else {
      discount = 0;
    }
    var discountedAmount = purchaseAmount - purchaseAmount * discount;
    resultDiv.innerHTML = "Сума до оплати зі знижкою: " + discountedAmount.toFixed(2);
  }
}
//8
function task8() {
  var inputNumbers = prompt("Введіть 10 чисел, розділених пробілами:");
  var numbers = inputNumbers.split(" ");
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < numbers.length; i++) {
    var num = parseFloat(numbers[i]);
    if (!isNaN(num)) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }
  var resultDiv = document.getElementById("result8");
  resultDiv.innerHTML = "Додатні: " + positiveCount + "<br>" +
                        "Від'ємні: " + negativeCount + "<br>" +
                        "Нулі: " + zeroCount + "<br>" +
                        "Парні: " + evenCount + "<br>" +
                        "Непарні: " + oddCount;
}
//9
function task9() {
  let currentDayNumber = 0;
  let currenDayName = ''; 
  let answer = true;     
do{     
  switch(currentDayNumber){
    case 0:
      currenDayName = 'Понеділок';
      break;
    case 1:
      currenDayName = 'Вівторок';
      break;
    case 2:
      currenDayName = 'Середа';
      break;
    case 3:
      currenDayName = 'Четвер';
      break;
    case 4:
      currenDayName = "П'ятниця";
      break;
    case 5:
      currenDayName = 'Субота';
      break;
    case 6:
      currenDayName = 'Неділя';
      break;
    }

  answer = confirm(`${currenDayName}. Показати наступний день?`)
  if(answer){
    currentDayNumber++
  }
  if (currentDayNumber == 7){
    currentDayNumber = 0;
  }
} while(answer)
} 

//10
function task10() {
  var minRange = 0;
  var maxRange = 100;
  var guessed = false;
  while (!guessed) {
    var guess = Math.floor((minRange + maxRange) / 2);
    var userResponse = prompt("Ваше число > " + guess + ", < " + guess + " або == " + guess + "? (Введіть '>' або '<' або '==')");
    if (userResponse === ">") {
      minRange = guess + 1;
    } else if (userResponse === "<") {
      maxRange = guess - 1;
    } else if (userResponse === "==") {
      guessed = true;
      var resultDiv = document.getElementById("result10");
      resultDiv.innerHTML = "Ви загадали число " + guess + "!";
    } else {
      resultDiv.innerHTML ="Будь ласка, введіть правильну відповідь ('>', '<' або '==').";
    }
  }
}
//11

function task11() {
  var resultText = "";
  for (var i = 2; i <= 9; i++) {
    resultText += "<div style='display: flex; flex-direction: column;'><strong>" + i + ":</strong> ";

    for (var j = 2; j <= 9; j++) {
      resultText += "<div>" + i + " * " + j + " = " + (i * j) + "</div>";
    }

    resultText += "</div>";
  }
  var resultDiv = document.getElementById("result11");
  resultDiv.innerHTML = resultText;
}
//12
function leapYear(y) {
  return y % 4 == 0 && y % 100 !== 0 || y % 400 == 0;
}

function task12() {
  let dayIn = parseInt(document.getElementById("day").value),
      monthIn = parseInt(document.getElementById("month").value),
      yearIn = parseInt(document.getElementById("year").value);
  let dayOut = dayIn,
      monthOut = monthIn,
      yearOut = yearIn;

  dayOut += 1;

  switch (monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayOut > 31) {
        dayOut = 1;
        monthOut += 1;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dayOut > 30) {
        dayOut = 1;
        monthOut += 1;
      }
      break;
    case 2:
      if (leapYear(yearOut)) {
        if (dayOut > 29) {
          dayOut = 1;
          monthOut += 1;
        }
      } else {
        if (dayOut > 28) {
          dayOut = 1;
          monthOut += 1;
        }
      }
      break;
  }

  if (monthOut > 12) {
    monthOut = 1;
    yearOut += 1;
  }

  var resultDiv = document.getElementById("result12");
  resultDiv.innerHTML = `Наступна дата: ${dayOut}/${monthOut}/${yearOut}`;
}






