"use strict";

var currentTime = {
  hours: 20,
  minutes: 59,
  seconds: 45,
  displayTime: function displayTime(elementId) {
    var timeString = "".concat(this.formatTime(this.hours), ":").concat(this.formatTime(this.minutes), ":").concat(this.formatTime(this.seconds));
    document.getElementById(elementId).innerText = timeString;
  },
  formatTime: function formatTime(timePart) {
    return timePart < 10 ? "0".concat(timePart) : timePart;
  },
  addSeconds: function addSeconds(seconds) {
    this.seconds += seconds;
    this.normalizeTime();
  },
  addMinutes: function addMinutes(minutes) {
    this.minutes += minutes;
    this.normalizeTime();
  },
  addHours: function addHours(hours) {
    this.hours += hours;
    this.normalizeTime();
  },
  normalizeTime: function normalizeTime() {
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }

    if (this.hours >= 24) {
      this.hours %= 24;
    }
  }
};

function displayCurrentTime() {
  currentTime.displayTime("time-display");
}

function changeTimeSeconds() {
  var seconds = parseInt(document.getElementById("seconds").value, 10) || 0;
  currentTime.addSeconds(seconds);
  displayCurrentTime();
}

function changeTimeMinutes() {
  var minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
  currentTime.addMinutes(minutes);
  displayCurrentTime();
}

function changeTimeHours() {
  var hours = parseInt(document.getElementById("hours").value, 10) || 0;
  currentTime.addHours(hours);
  displayCurrentTime();
}

displayCurrentTime(); //car

var car = {
  manufacturer: "Wolksvagen",
  model: "Touareg",
  year: 2022,
  averageSpeed: 120,
  fuelTankCapacity: 90,
  fuelConsumption: 14,
  displayInfo: function displayInfo() {
    document.getElementById("manufacturer").textContent = "Manufacturer: " + this.manufacturer;
    document.getElementById("model").textContent = "Model: " + this.model;
    document.getElementById("year").textContent = "Year: " + this.year;
    document.getElementById("averageSpeed").textContent = "Average Speed: " + this.averageSpeed + " km/h";
    document.getElementById("fuelTankCapacity").textContent = "Fuel Tank Capacity: " + this.fuelTankCapacity + " liters";
    document.getElementById("fuelConsumption").textContent = "Fuel Consumption: " + this.fuelConsumption + " liters/100km";
  },
  calculateTimeAndFuel: function calculateTimeAndFuel(distance, speed) {
    var totalHours = Math.round(distance / speed * 100) / 100;
    var breaks = Math.floor(totalHours / 4);
    totalHours += breaks;
    var totalFuel = distance / 100 * this.fuelConsumption;
    return {
      totalTime: totalHours,
      totalFuel: totalFuel
    };
  }
};

function displayResults() {
  var distance = parseFloat(document.getElementById("distance").value) || 0;
  var speed = parseFloat(document.getElementById("speed").value) || 0;
  var result = car.calculateTimeAndFuel(distance, speed);
  var resultContainer = document.getElementById("results");
  var resultHTML = "\n      <p>Total Time to cover ".concat(distance, " km: ").concat(result.totalTime, " hours</p>\n      <p>Total Fuel Needed: ").concat(result.totalFuel, " liters</p>\n  ");
  resultContainer.innerHTML = resultHTML;
}

car.displayInfo();