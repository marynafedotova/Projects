class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value <= 0) {
      console.error("Радіус має бути більше за 0");
      return;
    }
    this._radius = value;
  }
  get diameter() {
    return this._radius * 2;
  }
  calculateArea() {
    const area = Math.PI * Math.pow(this._radius, 2);
    return parseFloat(area.toFixed(2));
  }
  calculateCircumference() {
    const circumference = 2 * Math.PI * this._radius;
    return parseFloat(circumference.toFixed(2));
  }
}
// let myCircle = new Circle(5);
// toast.info("Радіус кола: " + myCircle.radius);
// toast.info("Діаметр кола: " + myCircle.diameter);
// toast.info("Площа кола: " + myCircle.calculateArea());
// toast.info("Довжина кола: " + myCircle.calculateCircumference());

// myCircle.radius = 8;
// toast.info("Новий радіус кола: " + myCircle.radius);
// toast.info("Новий діаметр кола: " + myCircle.diameter);
// toast.info("Нова площа кола: " + myCircle.calculateArea());
// toast.info("Нова довжина кола: " + myCircle.calculateCircumference());

// function displayCircleInfo() {
//   const circleInfoElement = document.getElementById('circle-info');
//   const circleCanvas = document.getElementById('circle-canvas');
//   const context = circleCanvas.getContext('2d');
//   circleInfoElement.innerHTML = `
//     <p>Радіус кола: ${myCircle.radius}</p>
//     <p>Діаметр кола: ${myCircle.diameter}</p>
//     <p>Площа кола: ${myCircle.calculateArea()}</p>
//     <p>Довжина кола: ${myCircle.calculateCircumference()}</p>
//   `;
//     context.fillStyle = '#3498db';
//     context.beginPath();
//     context.arc(circleCanvas.width / 2, circleCanvas.height / 2, this.radius * 10, 0, 2 * Math.PI);
//     context.fill();
//     context.stroke();
// }
// displayCircleInfo();
function displayCircleInfo(circle) {
  const circleInfoElement = document.getElementById('circle-info');
  const circleCanvas = document.getElementById('circle-canvas');
  const context = circleCanvas.getContext('2d');
  circleInfoElement.innerHTML = `
    <p>Радіус кола: ${circle.radius}</p>
    <p>Діаметр кола: ${circle.diameter}</p>
    <p>Площа кола: ${circle.calculateArea()}</p>
    <p>Довжина кола: ${circle.calculateCircumference()}</p>
  `;
  context.fillStyle = '#3498db';
  context.beginPath();
  context.arc(circleCanvas.width / 2, circleCanvas.height / 2, circle.radius * 10, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
}

// Приклад використання класу
let myCircle = new Circle(5);
toast.info("Радіус кола: " + myCircle.radius);
toast.info("Діаметр кола: " + myCircle.diameter);
toast.info("Площа кола: " + myCircle.calculateArea());
toast.info("Довжина кола: " + myCircle.calculateCircumference());

myCircle.radius = 8;
toast.info("Новий радіус кола: " + myCircle.radius);
toast.info("Новий діаметр кола: " + myCircle.diameter);
toast.info("Нова площа кола: " + myCircle.calculateArea());
toast.info("Нова довжина кола: " + myCircle.calculateCircumference());

// Викликати функцію для відображення інформації про коло та малювання графічного зображення кола
displayCircleInfo(myCircle);

