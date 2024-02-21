"use strict";

//header
var header = document.querySelector('header');
window.addEventListener('scroll', function () {
  var scrollDistance = window.scrollY;
  var threshold = 30;

  if (scrollDistance > threshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}); //hamburger-menu

var lazyLoadInstance = new LazyLoad({});
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
    var slideElement = $("\n      <li>\n        <div class=\"slide-top\">\n          <img class=\"lazy\" \n          src=\"".concat(item.image, "\" alt=\"").concat(item.title, "\">\n        </div>\n        <div class=\"title\">").concat(item.title, "</div>\n        <div class=\"news-text\">").concat(item.newsText, "</div>\n        <div class=\"author\">\n          <div class=\"avatar\">\n            <img src=\"").concat(item.author.avatar, "\" alt=\"").concat(item.author.name, "\">\n          </div>\n          <div class=\"author-data\">\n          <div class=\"name-author\">").concat(item.author.name, "</div>\n          <div class=\"news-date\">").concat(item.author.date, "</div>\n          </div>\n          </div>\n      </li>\n    "));
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
} //form


$(document).ready(function () {
  $('.form-control').focus(function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });
  $('#feedback_form').submit(function (e) {
    e.preventDefault();
    var errors = [];
    var nameFld = $('#exampleInputName');
    var emailFld = $('#exampleInputEmail1');
    var name = nameFld.val().trim();
    var email = emailFld.val().trim();

    if (name === '') {
      errors.push('Enter your name, please');
      nameFld.addClass('is-invalid');
    } else if (name.length < 2) {
      errors.push('Your name is too short');
      nameFld.addClass('is-invalid');
    }

    if (email === '') {
      errors.push('Enter your email, please');
      emailFld.addClass('is-invalid');
    } else if (!isValidEmail(email)) {
      errors.push('Incorrect email format, please');
      emailFld.addClass('is-invalid');
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
    $.post(url, function (resp) {
      if (resp.ok) {
        nameFld.val('');
        emailFld.val('');
        toast.success('Your message successfully sent.');
      } else {
        toast.error('Some error occurred.');
      }
    });
  });

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
}); //scroll

document.getElementById('scrollButton').addEventListener('click', function (event) {
  event.preventDefault();
  var targetElement = document.getElementById('news');
  var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});