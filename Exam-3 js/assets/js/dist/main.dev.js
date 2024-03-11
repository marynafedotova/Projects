"use strict";

var API_KEY = '21189258955c2454730ab1e173c71ea0';
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
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/search/movie?query=".concat(search, "&api_key=").concat(API_KEY)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context.sent;
          console.log(json);

          if (json.results && json.results.length > 0) {
            list = '';
            json.results.forEach(function (item) {
              list += movieHTML(item);
            });
            document.getElementById('movies-list').innerHTML = list;
          } else {
            alert('Помилка: Немає результатів');
          }

        case 8:
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

function getDetailMovie(id) {
  var response, json, detailsModalContainer;
  return regeneratorRuntime.async(function getDetailMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(API_KEY)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context2.sent;
          detailsModalContainer = document.getElementById('movie-details-modal');
          detailsModalContainer.innerHTML = "\n    <img src=\"https://image.tmdb.org/t/p/w500".concat(json.poster_path, "\" class=\"card-img-top\" alt=\"").concat(json.title, "\">\n    <h2>").concat(json.title, "</h2>\n    <p><b>Year:</b> ").concat(json.release_date, "</p>\n    <p><b>Vote average:</b> ").concat(json.vote_average, "</p>\n    <p><b>Popularity:</b> ").concat(json.popularity, "</p>\n    <p><b>Overview:</b> ").concat(json.overview, "</p>\n  ");
          $('#movieModal').modal('show');

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function movieHTML(item) {
  return "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://image.tmdb.org/t/p/w500".concat(item.poster_path, "\" class=\"card-img-top\" alt=\"").concat(item.title, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(item.title, "</h5>\n        <p class=\"card-text\"><b>Year: </b>").concat(item.release_date, "</p>\n        <button class=\"btn btn-primary btn-detail\" data-id='").concat(item.id, "'>Detail</button>\n        <button class=\"btn btn-warning btn-fav\" data-info='").concat(JSON.stringify(item), "'>\u2665</button>\n      </div>\n    </div>");
}

function addToFav(info) {
  var filmData = JSON.parse(info);
  var favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  var issetIndex = favList.findIndex(function (el) {
    return el.id == filmData.id;
  });

  if (issetIndex !== -1) {
    favList.splice(issetIndex, 1);
  } else {
    favList.push(filmData);
  }

  localStorage.setItem('fav_list', JSON.stringify(favList));
  showFavMovies();
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