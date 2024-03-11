"use strict";

var moviesListElement = document.getElementById('movies-list'); // Функція для отримання топ-100 фільмів з API

function getTopMovies() {
  var response, json;
  return regeneratorRuntime.async(function getTopMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=&type=movie&page=1&totalResults=10")));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          json = _context.sent;
          displayMovies(json.Search);
          _context.next = 12;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // Функція для відображення фільмів на сторінці


function displayMovies(movies) {
  var list = '';
  movies.forEach(function (item) {
    list += "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(item.Poster, "\" class=\"card-img-top\" alt=\"").concat(item.Title, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(item.Title, "</h5>\n          <p class=\"card-text\"><b>Year:</b> ").concat(item.Year, "</p>\n          <button class=\"btn btn-primary btn-detail\" data-id='").concat(item.imdbID, "'>Detail</button>\n        </div>\n      </div>");
  });
  document.getElementById('movies-list').innerHTML = list;
} // Функція для виведення топ-100 фільмів за замовчуванням


function topMovies() {
  return regeneratorRuntime.async(function topMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getTopMovies());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Виклик функції topMovies при повному завантаженні сторінки


window.onload = topMovies;