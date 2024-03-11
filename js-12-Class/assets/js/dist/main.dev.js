"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this._radius = radius;
  }

  _createClass(Circle, [{
    key: "calculateArea",
    value: function calculateArea() {
      var area = Math.PI * Math.pow(this._radius, 2);
      return parseFloat(area.toFixed(2));
    }
  }, {
    key: "calculateCircumference",
    value: function calculateCircumference() {
      var circumference = 2 * Math.PI * this._radius;
      return parseFloat(circumference.toFixed(2));
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(value) {
      if (value <= 0) {
        console.error("Радіус має бути більше за 0");
        return;
      }

      this._radius = value;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
}(); // let myCircle = new Circle(5);
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
  var circleInfoElement = document.getElementById('circle-info');
  var circleCanvas = document.getElementById('circle-canvas');
  var context = circleCanvas.getContext('2d');
  circleInfoElement.innerHTML = "\n    <p>\u0420\u0430\u0434\u0456\u0443\u0441 \u043A\u043E\u043B\u0430: ".concat(circle.radius, "</p>\n    <p>\u0414\u0456\u0430\u043C\u0435\u0442\u0440 \u043A\u043E\u043B\u0430: ").concat(circle.diameter, "</p>\n    <p>\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430: ").concat(circle.calculateArea(), "</p>\n    <p>\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043A\u043E\u043B\u0430: ").concat(circle.calculateCircumference(), "</p>\n  ");
  context.fillStyle = '#3498db';
  context.beginPath();
  context.arc(circleCanvas.width / 2, circleCanvas.height / 2, circle.radius * 10, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
} // Приклад використання класу


var myCircle = new Circle(5);
toast.info("Радіус кола: " + myCircle.radius);
toast.info("Діаметр кола: " + myCircle.diameter);
toast.info("Площа кола: " + myCircle.calculateArea());
toast.info("Довжина кола: " + myCircle.calculateCircumference());
myCircle.radius = 8;
toast.info("Новий радіус кола: " + myCircle.radius);
toast.info("Новий діаметр кола: " + myCircle.diameter);
toast.info("Нова площа кола: " + myCircle.calculateArea());
toast.info("Нова довжина кола: " + myCircle.calculateCircumference()); // Викликати функцію для відображення інформації про коло та малювання графічного зображення кола

displayCircleInfo(myCircle);