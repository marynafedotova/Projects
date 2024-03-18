import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onAddToFav, removeFromFav, favList }) {
  const [isFavMap, setIsFavMap] = useState({});

  useEffect(() => {
    const favMap = {};
    favList.forEach(movie => {
      favMap[movie.id] = true;
    });
    movies.forEach(movie => {
      if (!favMap.hasOwnProperty(movie.id)) {
        favMap[movie.id] = false;
      }
    });
    setIsFavMap(favMap);
  }, [favList, movies]);

  return (
    <div className="container">
      <div className='title'><h2>Movie List</h2></div>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToFav={onAddToFav}
            onRemoveFromFav={removeFromFav}
            isFav={isFavMap[movie.id] || false}
          />
        ))}
      </div>
    </div>
  );
}
