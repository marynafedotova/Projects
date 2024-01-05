//Мінімум
//1
var a = 0.1;
var b = 0.2;
const sum = a + b;
const roundedSum = sum.toFixed(1);
console.log(roundedSum);

//2
const c = "1";
const d = 2;
const sum2 = parseInt(c) + d;
console.log(sum2);
//3  в 1 Гб 1024 Мб
function task3() {
  const memory = prompt("Будь ласка, введіть обсяг флешки в Гб:");
  const fileSize = 820;
  const countFile = Math.floor((memory * 1024) / fileSize);
  console.log(countFile);
  alert('Ви можете розмістити на флешці ' + countFile + ' файлів, обсягом 820 Мб');
}
//4
function task4() {
  const sumCash = parseFloat(prompt("Будь ласка, введіть сумму грошей в гаманці:"));
  const sumChoko = parseFloat(prompt("Будь ласка, введіть ціну однією шоколадки:"));
  const countChoko = Math.floor(sumCash / sumChoko);
  const rest = sumCash - countChoko * sumChoko;
  alert('Ви можете купити ' + countChoko + ' шоколадок. Ваша решта складає: ' + rest);
}
//5
function task5() {
  const treeNumber = parseInt(prompt('Будь ласка, введіть тризначне число:'));
  const reversedNumber = parseInt(treeNumber.toString().split('').reverse().join(''));
  alert('Ваше число в зворотньому порядку: ' + reversedNumber);
}
//6

function task6() {
  const depos = parseFloat(prompt("Будь ласка, введіть суму вкладу (UAH):"));
  const annualInterestRate = 0.05;
  const monthlyInterestRate = annualInterestRate / 12;
  const months = 2;
  const percentages = depos * monthlyInterestRate * months;
  alert('Відсоток за вашим вкладом складає: ' + percentages.toFixed(2) + 'UAH');
}



