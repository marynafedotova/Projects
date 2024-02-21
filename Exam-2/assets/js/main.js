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

//hamburger-menu

var lazyLoadInstance = new LazyLoad({});

$(function() {
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
});

//wow
new WOW().init();

//slider

document.addEventListener('DOMContentLoaded', function () {
  fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
      createSlider('slider2', data);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function createSlider(elementId, jsonData) {
  const sliderContainer = $("#" + elementId);
  const customPrevHtml = '<span class="custom-prev-html">Previous</span>';
  const customNextHtml = '<span class="custom-next-html">Next</span>';
  const ulElement = $("<ul></ul>");
  jsonData.forEach(item => {
    const slideElement = $(`
      <li>
        <div class="slide-top">
          <img class="lazy" 
          src="${item.image}" alt="${item.title}">
        </div>
        <div class="title">${item.title}</div>
        <div class="news-text">${item.newsText}</div>
        <div class="author">
          <div class="avatar">
            <img src="${item.author.avatar}" alt="${item.author.name}">
          </div>
          <div class="author-data">
          <div class="name-author">${item.author.name}</div>
          <div class="news-date">${item.author.date}</div>
          </div>
          </div>
      </li>
    `);
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
    pager:true,
    vertical:false,
    prevHtml: customPrevHtml,
    nextHtml: customNextHtml  
  });
}

lightGallery(document.getElementById('animated-thumbnails'), {
    allowMediaOverlap: true,
    toggleThumb: true
});

//maps

function initMap(link){
  link.remove();
const map = L.map('map').setView([41.054501905311206, -79.15649953375353], 13);

L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const violetIcon = L.icon({
  iconUrl: 'assets/images/Pin.png',
  iconSize:     [106, 106],
  iconAnchor:   [22, 94],
});

L.marker([41.054501905311206, -79.15649953375353], {icon: violetIcon}).addTo(map)}


const form = document.getElementById('feedback_form');

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

document.querySelectorAll('.form-control').forEach(elem => {
  elem.onfocus = function () {
    if (this.classList.contains('is-invalid')) {
      this.classList.remove('is-invalid');
    }
  };
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const errors = [];
  const nameFld = document.getElementById('exampleInputName');
  const emailFld = document.getElementById('exampleInputEmail1');

  const name = nameFld.value.trim();
  const email = emailFld.value.trim();

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

  if(errors.length){
    toast.error(errors.join('. '))
    return
  }
  const CHAT_ID = '-1002005768837';
  const BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ';
  const message = `<b>Name: </b> ${name}\r\n<b>Email: </b>${email}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;
console.log(url);
  fetch(url, {
    method: 'post'
  })
  .then(resp => resp.json())
  .then(resp => {
    if(resp.ok){
      nameFld.value = '';
      emailFld.value = '';
      toast.success('Your message successfully sent.')
    } else(
      toast.error('Some error occured.')
    )
  })
    return false
});

//scroll
document.getElementById('scrollButton').addEventListener('click', function(event) {
  event.preventDefault();
  const targetElement = document.getElementById('news');
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
