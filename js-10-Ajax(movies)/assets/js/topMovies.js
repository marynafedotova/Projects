const moviesListElement = document.getElementById('movies-list');

// Функція для отримання топ-100 фільмів з API
async function getTopMovies() {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=&type=movie&page=1&totalResults=10`);
    const json = await response.json();
    displayMovies(json.Search);
  } catch (error) {
    // alert(json.Error)
  }
}

// Функція для відображення фільмів на сторінці
function displayMovies(movies) {
  let list = '';
  movies.forEach(item => {
    list += `
      <div class="card" style="width: 18rem;">
        <img src="${item.Poster}" class="card-img-top" alt="${item.Title}">
        <div class="card-body">
          <h5 class="card-title">${item.Title}</h5>
          <p class="card-text"><b>Year:</b> ${item.Year}</p>
          <button class="btn btn-primary btn-detail" data-id='${item.imdbID}'>Detail</button>
        </div>
      </div>`;
  });
  document.getElementById('movies-list').innerHTML = list;
}

// Функція для виведення топ-100 фільмів за замовчуванням
async function topMovies() {
  await getTopMovies();
}

// Виклик функції topMovies при повному завантаженні сторінки
window.onload = topMovies;
