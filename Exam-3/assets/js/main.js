//5114e398

const API_KEY = '5114e398';
const btn = document.getElementById('search-btn')

btn.onclick = function(){
  const search = document.getElementById('search').value;
  if(search !== ''){
    searchMovies(search)
  }
}

async function searchMovies(search){
  const response  = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`)
  const json =  await response.json();
  if(json.Response == 'True'){
    let list = ''
    json.Search.forEach( item => {
      list += movieHTML(item)
    })
    document.getElementById('movies-list').innerHTML = list
  }else {
    alert(json.Error)
  }
}
document.addEventListener('click', function(event){
  if(event.target.classList.contains('btn-detail')){
    getDetailMovie(event.target.dataset.id)
  }
  if(event.target.classList.contains("btn-fav")){
    addToFav(event.target.dataset.info)
  }
})
function addToFav(info){
  const filmData = JSON.parse(info)
  const rez = localStorage.getItem('fav_list')
  let favList = []
  if(rez){
    favList = JSON.parse(rez)
  }
  const issetIndex = favList.findIndex(el => el.imdbID==filmData.imdbID)
  if(issetIndex !== -1){
    favList.splice(issetIndex, 1)
  } else{
    favList.push(filmData)
  }
  localStorage.setItem('fav_list', JSON.stringify(favList))
  showFavMovies()
}
async function getDetailMovie(id){
  const response  = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
  const json =  await response.json();
// console.log(json);
const detailsModalContainer = document.getElementById('movie-details-modal');

  detailsModalContainer.innerHTML = `
    <img src="${json.Poster}" class="card-img-top" alt="${json.Title}">
    <h2>${json.Title}</h2>
    <p><b>Year:</b> ${json.Year}</p>
    <p><b>Genre:</b> ${json.Genre}</p>
    <p><b>Director:</b> ${json.Director}</p>
    <p><b>Plot:</b> ${json.Plot}</p>
    <!-- Додайте інші потрібні поля -->
  `;

 $('#movieModal').modal('show');}
function movieHTML(item){
  return `
      <div class="card" style="width: 18rem;">
    <img src="${item.Poster}" class="card-img-top" alt="${item.Title}">
    <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text"><b>Year </b>${item.Year}</p>
    <button class="btn btn-primary btn-detail" data-id='${item.imdbID}'>Deteil</button>
    <button class="btn btn-warning btn-fav" data-info='${JSON.stringify(item)}'>♥</button>
    </div>
    </div>`
}

function showFavMovies(){
  const favList = JSON.parse(localStorage.getItem('fav_list')) || []
  let list = ''
  favList.forEach( item => {
    list += movieHTML(item)
  })
  document.getElementById('fav-movies-list').innerHTML = list;
}
showFavMovies()


function setCookie(name,value,hours,path='/'){
  var expires = "";
  if(hours){
    var date= new Date();
    date.setTime(data.getTime() + (hours*60*60*1000));
    expires = "; expires=" + data.toUTCCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path="+path;
}
function getCookie(name) {
 var nameEQ = name + "=";
 var ca = document.cookie.split(';')
 for(var i=0;i <ca.length; i++){
  var c= ca[i];
  while (c.charAt(0)==' ') c = c.substring(nameEQ.length,c.length)
 }
return null;
}
function eraseCookie(name) {
  document.cookie = name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// setCookie('foo', 'bar', 3*30*24)
// setCookie('f002','bar2', 2)