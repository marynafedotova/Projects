"use strict";

//Мінімум
//1
var a = 0.1;
var b = 0.2;
var sum = a + b;
var roundedSum = sum.toFixed(1);
console.log(roundedSum); //2

var c = "1";
var d = 2;
var sum2 = parseInt(c) + d;
console.log(sum2); //3  в 1 Гб 1024 Мб

function task3() {
  var memory = prompt("Будь ласка, введіть обсяг флешки в Гб:");
  var fileSize = 820;
  var countFile = Math.floor(memory * 1024 / fileSize);
  console.log(countFile);
  alert('Ви можете розмістити на флешці ' + countFile + ' файлів, обсягом 820 Мб');
} //4


function task4() {
  var sumCash = parseFloat(prompt("Будь ласка, введіть сумму грошей в гаманці:"));
  var sumChoko = parseFloat(prompt("Будь ласка, введіть ціну однією шоколадки:"));
  var countChoko = Math.floor(sumCash / sumChoko);
  var rest = sumCash - countChoko * sumChoko;
  alert('Ви можете купити ' + countChoko + ' шоколадок. Ваша решта складає: ' + rest);
} //5


function task5() {
  var treeNumber = parseInt(prompt('Будь ласка, введіть тризначне число:'));
  var reversedNumber = parseInt(treeNumber.toString().split('').reverse().join(''));
  alert('Ваше число в зворотньому порядку: ' + reversedNumber);
} //6


function task6() {
  var depos = parseFloat(prompt("Будь ласка, введіть суму вкладу (UAH):"));
  var annualInterestRate = 0.05;
  var monthlyInterestRate = annualInterestRate / 12;
  var months = 2;
  var percentages = depos * monthlyInterestRate * months;
  alert('Відсоток за вашим вкладом складає: ' + percentages.toFixed(2) + 'UAH');
}