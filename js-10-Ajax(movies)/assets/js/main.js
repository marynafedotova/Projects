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
  const response  = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`)
  const json =  await response.json();
  if(json.Response == 'True'){
    let list = ''
    json.Search.forEach( item => {
      list += `
      <div class="card" style="width: 18rem;">
  <img src="${item.Poster}" class="card-img-top" alt="${item.Title}">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text"><b>Year</b>${item.Year}</p>
    <button class="btn btn-primary btn-detail" data-id='${item.imdbID}'>Deteil</button>
  </div>
</div>`
    }

    )
    document.getElementById('movies-list').innerHTML = list
  }else {
    alert(json.Error)
  }
}
document.addEventListener('click', function(event){
  if(event.target.classList.contains('btn-detail')){
    getDetailMovie(event.target.dataset.id)
  }
})
async function getDetailMovie(id){
  const response  = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
  const json =  await response.json();
console.log(json);
}