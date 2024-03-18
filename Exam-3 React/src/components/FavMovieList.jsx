
import React, { useEffect } from 'react';
import MovieCard from './MovieCard';

export default function FavMovieList({ favList, addToFav, removeFromFav }) {
  useEffect(() => {
    localStorage.setItem('favList', JSON.stringify(favList));
  }, [favList]);
  return (
    <div className="container">
      <div className='title'><h2>Favorite Movies</h2></div>
      <div id="fav-movies-list">
        {favList.map(movie => (
          <MovieCard
            key={movie.id} 
            movie={movie}
            onAddToFav={addToFav}
            onRemoveFromFav={removeFromFav}
            isFav={movie.isFav}
          />
        ))}
      </div>
    </div>
  );
}
