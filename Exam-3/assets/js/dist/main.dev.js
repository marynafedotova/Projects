"use strict";

//5114e398
var API_KEY = '5114e398';
var btn = document.getElementById('search-btn');

btn.onclick = function () {
  var search = document.getElementById('search').value;

  if (search !== '') {
    searchMovies(search);
  }
};

function searchMovies(search) {
  var response, json, list;
  return regeneratorRuntime.async(function searchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=").concat(search, "&type=movie")));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context.sent;

          if (json.Response == 'True') {
            list = '';
            json.Search.forEach(function (item) {
              list += movieHTML(item);
            });
            document.getElementById('movies-list').innerHTML = list;
          } else {
            alert(json.Error);
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-detail')) {
    getDetailMovie(event.target.dataset.id);
  }

  if (event.target.classList.contains("btn-fav")) {
    addToFav(event.target.dataset.info);
  }
});

function addToFav(info) {
  var filmData = JSON.parse(info);
  var rez = localStorage.getItem('fav_list');
  var favList = [];

  if (rez) {
    favList = JSON.parse(rez);
  }

  var issetIndex = favList.findIndex(function (el) {
    return el.imdbID == filmData.imdbID;
  });

  if (issetIndex !== -1) {
    favList.splice(issetIndex, 1);
  } else {
    favList.push(filmData);
  }

  localStorage.setItem('fav_list', JSON.stringify(favList));
  showFavMovies();
}

function getDetailMovie(id) {
  var response, json, detailsModalContainer;
  return regeneratorRuntime.async(function getDetailMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&i=").concat(id)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context2.sent;
          // console.log(json);
          detailsModalContainer = document.getElementById('movie-details-modal');
          detailsModalContainer.innerHTML = "\n    <img src=\"".concat(json.Poster, "\" class=\"card-img-top\" alt=\"").concat(json.Title, "\">\n    <h2>").concat(json.Title, "</h2>\n    <p><b>Year:</b> ").concat(json.Year, "</p>\n    <p><b>Genre:</b> ").concat(json.Genre, "</p>\n    <p><b>Director:</b> ").concat(json.Director, "</p>\n    <p><b>Plot:</b> ").concat(json.Plot, "</p>\n    <!-- \u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u0456\u043D\u0448\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u043F\u043E\u043B\u044F -->\n  ");
          $('#movieModal').modal('show');

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function movieHTML(item) {
  return "\n      <div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"".concat(item.Poster, "\" class=\"card-img-top\" alt=\"").concat(item.Title, "\">\n    <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(item.Title, "</h5>\n    <p class=\"card-text\"><b>Year </b>").concat(item.Year, "</p>\n    <button class=\"btn btn-primary btn-detail\" data-id='").concat(item.imdbID, "'>Deteil</button>\n    <button class=\"btn btn-warning btn-fav\" data-info='").concat(JSON.stringify(item), "'>\u2665</button>\n    </div>\n    </div>");
}

function showFavMovies() {
  var favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  var list = '';
  favList.forEach(function (item) {
    list += movieHTML(item);
  });
  document.getElementById('fav-movies-list').innerHTML = list;
}

showFavMovies();

function setCookie(name, value, hours) {
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var expires = "";

  if (hours) {
    var date = new Date();
    date.setTime(data.getTime() + hours * 60 * 60 * 1000);
    expires = "; expires=" + data.toUTCCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
} // setCookie('foo', 'bar', 3*30*24)
// setCookie('f002','bar2', 2)