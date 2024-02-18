"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   var header = document.querySelector("header");
//   window.addEventListener("scroll", function () {
//     var scrollPosition = window.scrollY;
//     // Якщо ви хочете, щоб ефект починався не відразу, а після певної висоти скролу,
//     // то змініть умову на власний вибір
//     if (scrollPosition > 100) {
//       header.style.background = "rgba(36, 204, 250, 1)"; /* Колір фону при скролі */
//     } else {
//       header.style.background = "rgba(36, 204, 250, 0)"; /* Прозорий фон, коли скрол вверх */
//     }
//   });
// });
// var lazyLoadInstance = new LazyLoad({});
$(function () {
  $("#slider").lightSlider({
    item: 1,
    slideMargin: 0,
    controls: false,
    loop: true,
    auto: true,
    slideMove: 1,
    vertical: true,
    verticalHeight: 800
  });
}); //wow

new WOW().init(); //slider

document.addEventListener('DOMContentLoaded', function () {
  fetch('assets/data.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    createSlider('slider2', data);
  })["catch"](function (error) {
    return console.error('Error fetching data:', error);
  });
});

function createSlider(elementId, jsonData) {
  var sliderContainer = $("#" + elementId);
  var customPrevHtml = '<span class="custom-prev-html">Previous</span>';
  var customNextHtml = '<span class="custom-next-html">Next</span>';
  var ulElement = $("<ul></ul>");
  jsonData.forEach(function (item) {
    var slideElement = $("\n      <li>\n        <div class=\"slide-top\">\n          <img src=\"".concat(item.image, "\" alt=\"").concat(item.title, "\">\n        </div>\n        <div class=\"title\">").concat(item.title, "</div>\n        <div class=\"news-text\">").concat(item.newsText, "</div>\n        <div class=\"author\">\n          <div class=\"avatar\">\n            <img src=\"").concat(item.author.avatar, "\" alt=\"").concat(item.author.name, "\">\n          </div>\n          <div class=\"author-data\">\n          <div class=\"name-author\">").concat(item.author.name, "</div>\n          <div class=\"news-date\">").concat(item.author.date, "</div>\n          </div>\n          </div>\n      </li>\n    "));
    ulElement.append(slideElement);
  });
  sliderContainer.append(ulElement);
  ulElement.lightSlider({
    item: 3,
    controls: false,
    loop: true,
    auto: true,
    slideMove: 1,
    slideMargin: 30,
    pager: true,
    vertical: false,
    prevHtml: customPrevHtml,
    nextHtml: customNextHtml
  });
}

lightGallery(document.getElementById('animated-thumbnails'), {
  thumbnail: true,
  animateThumb: false,
  allowMediaOverlap: true,
  toggleThumb: true
}); //maps

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([41.054501905311206, -79.15649953375353], 13);
  L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var violetIcon = L.icon({
    iconUrl: 'assets/images/Pin.png',
    iconSize: [106, 106],
    iconAnchor: [22, 94]
  });
  L.marker([41.054501905311206, -79.15649953375353], {
    icon: violetIcon
  }).addTo(map);
}

var form = document.getElementById('feedback_form');

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

document.querySelectorAll('.form-control').forEach(function (elem) {
  elem.onfocus = function () {
    if (this.classList.contains('is-invalid')) {
      this.classList.remove('is-invalid');
    }
  };
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var errors = [];
  var nameFld = document.getElementById('exampleInputName');
  var emailFld = document.getElementById('exampleInputEmail1');
  var name = nameFld.value.trim();
  var email = emailFld.value.trim();

  if (name === '') {
    errors.push('Enter your name, please');
    nameFld.classList.add('is-invalid');
  } else if (name.length < 2) {
    errors.push('Your name is too short');
    nameFld.classList.add('is-invalid');
  }

  if (email === '') {
    errors.push('Enter your email, please');
    emailFld.classList.add('is-invalid');
  } else if (!isValidEmail(email)) {
    errors.push('Incorrect email format, please');
    emailFld.classList.add('is-invalid');
  }

  if (errors.length) {
    toast.error(errors.join('. '));
    return;
  }

  var CHAT_ID = '-1002005768837';
  var BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ';
  var message = "<b>Name: </b> ".concat(name, "\r\n<b>Email: </b>").concat(email);
  var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURIComponent(message), "&parse_mode=HTML");
  console.log(url);
  fetch(url, {
    method: 'post'
  }).then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    if (resp.ok) {
      nameFld.value = '';
      emailFld.value = '';
      toast.success('Your message successfully sent.');
    } else toast.error('Some error occured.');
  });
  return false;
});