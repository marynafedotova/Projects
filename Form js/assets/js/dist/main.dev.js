"use strict";

// import News from "../classes/news.js";
// const NewsAPI = new News();
// (async () => {
//   try {
//     const newList = await NewsAPI.newsListHTML('');
//     console.log(newList);
//     document.body.insertAdjacentHTML('afterbegin', newList);
//     document.addEventListener('click', async function (event) {
//       if (event.target.className === 'btn-detail') {
//         const newData = await NewsAPI.getNewsDetail(event.target.dataset.uuid);
//         console.log(newData);
//       }
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();
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