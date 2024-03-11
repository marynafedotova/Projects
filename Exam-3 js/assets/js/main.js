const API_KEY = '21189258955c2454730ab1e173c71ea0';
const btn = document.getElementById('search-btn');

async function getTrendingMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const json = await response.json();
  return json.results;
}

async function displayTrendingMovies() {
  const trendingMovies = await getTrendingMovies();
  let list = '';
  trendingMovies.forEach(movie => {
      list += movieHTML(movie);
  });
  document.getElementById('movies-list').innerHTML = list;
}

window.onload = displayTrendingMovies;

function movieHTML(item){
return `
  <div class="card" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text"><b>Year: </b>${item.release_date}</p>
      <button class="btn btn-primary btn-detail" data-id='${item.id}'>Detail</button>
      <button class="btn btn-warning btn-fav" data-info='${JSON.stringify(item)}'>♥</button>
    </div>
  </div>`;
}

btn.onclick = function(){
  const search = document.getElementById('search').value;
  if(search !== ''){
    searchMovies(search);
  }
};

async function searchMovies(search){
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`);
  const json = await response.json();
  console.log(json);
  if (json.results && json.results.length > 0) {
    let list = '';
    json.results.forEach(item => {
      list += movieHTML(item);
    });
    document.getElementById('movies-list').innerHTML = list;
  } else {
    alert('Помилка: Немає результатів');
  }
}

document.addEventListener('click', function(event){
  if(event.target.classList.contains('btn-detail')){
    getDetailMovie(event.target.dataset.id)
  }
  if(event.target.classList.contains("btn-fav")){
    addToFav(event.target.dataset.info)
  }
});

async function getDetailMovie(id){
  const response  = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const json =  await response.json();
  const detailsModalContainer = document.getElementById('movie-details-modal');

  detailsModalContainer.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${json.poster_path}" class="card-img-top" alt="${json.title}">
    <h2>${json.title}</h2>
    <p><b>Year:</b> ${json.release_date}</p>
    <p><b>Vote average:</b> ${json.vote_average}</p>
    <p><b>Popularity:</b> ${json.popularity}</p>
    <p><b>Overview:</b> ${json.overview}</p>
  `;

  $('#movieModal').modal('show');
}

function movieHTML(item){
  return `
    <div class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text"><b>Year: </b>${item.release_date}</p>
        <button class="btn btn-primary btn-detail" data-id='${item.id}'>Detail</button>
        <button class="btn btn-warning btn-fav" data-info='${JSON.stringify(item)}'>♥</button>
      </div>
    </div>`;
}

function addToFav(info){
  const filmData = JSON.parse(info);
  const favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  const issetIndex = favList.findIndex(el => el.id == filmData.id);
  
  if(issetIndex !== -1){
    favList.splice(issetIndex, 1);
  } else{
    favList.push(filmData);
  }
  
  localStorage.setItem('fav_list', JSON.stringify(favList));
  showFavMovies();
}

function showFavMovies(){
  const favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  let list = '';
  favList.forEach( item => {
    list += movieHTML(item);
  });
  document.getElementById('fav-movies-list').innerHTML = list;
}
showFavMovies();