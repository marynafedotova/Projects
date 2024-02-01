let currentTime = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  displayTime: function (elementId) {
      const timeString = `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`;
      document.getElementById(elementId).innerText = timeString;
  },

  formatTime: function (timePart) {
      return timePart < 10 ? `0${timePart}` : timePart;
  },

  addSeconds: function (seconds) {
      this.seconds += seconds;
      this.normalizeTime();
  },

  addMinutes: function (minutes) {
      this.minutes += minutes;
      this.normalizeTime();
  },

  addHours: function (hours) {
      this.hours += hours;
      this.normalizeTime();
  },

  normalizeTime: function () {
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
  const seconds = parseInt(document.getElementById("seconds").value, 10) || 0;
  currentTime.addSeconds(seconds);
  displayCurrentTime();
}

function changeTimeMinutes() {
  const minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
  currentTime.addMinutes(minutes);
  displayCurrentTime();
}

function changeTimeHours() {
  const hours = parseInt(document.getElementById("hours").value, 10) || 0;
  currentTime.addHours(hours);
  displayCurrentTime();
}

displayCurrentTime();

//car
let car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2022,
  averageSpeed: 120,
  fuelTankCapacity: 60,
  fuelConsumption: 8,

  displayInfo: function () {
    document.getElementById("manufacturer").textContent = "Manufacturer: " + this.manufacturer;
    document.getElementById("model").textContent = "Model: " + this.model;
    document.getElementById("year").textContent = "Year: " + this.year;
    document.getElementById("averageSpeed").textContent = "Average Speed: " + this.averageSpeed + " km/h";
    document.getElementById("fuelTankCapacity").textContent = "Fuel Tank Capacity: " + this.fuelTankCapacity + " liters";
    document.getElementById("fuelConsumption").textContent = "Fuel Consumption: " + this.fuelConsumption + " liters/100km";
},
  calculateTimeAndFuel: function (distance, speed) {
    let totalHours = Math.round((distance / speed) * 100) / 100;
    let breaks = Math.floor(totalHours / 4);
    totalHours += breaks;
    let totalFuel = (distance / 100) * this.fuelConsumption;
    return {
        totalTime: totalHours,
        totalFuel: totalFuel
    };
}
};

function displayResults() {
  const distance = parseFloat(document.getElementById("distance").value) || 0;
  const speed = parseFloat(document.getElementById("speed").value) || 0;

  const result = car.calculateTimeAndFuel(distance, speed);

  const resultContainer = document.getElementById("results");
  const resultHTML = `
      <p>Total Time to cover ${distance} km: ${result.totalTime} hours</p>
      <p>Total Fuel Needed: ${result.totalFuel} liters</p>
  `;

  resultContainer.innerHTML = resultHTML;
}

car.displayInfo();
