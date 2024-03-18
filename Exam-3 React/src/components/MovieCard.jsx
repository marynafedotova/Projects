import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const API_KEY = '21189258955c2454730ab1e173c71ea0';

export default function MovieCard({ movie, onAddToFav, onRemoveFromFav, isFav }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isFavState, setIsFav] = useState(isFav);
  useEffect(() => {
    setIsFav(isFav);
  }, [isFav]);
  const handleShowDetails = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`);
      const data = await response.json();
      setMovieDetails(data);
      setShowDetailsModal(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleCloseDetails = () => {
    setShowDetailsModal(false);
  };
  const handleToggleFav = () => {
    if (isFav) {
      onRemoveFromFav(movie.id);
      setIsFav(false);
    } else {
      onAddToFav(movie);
      setIsFav(true);
    }
  }
  return (
    <div className="card">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text"><b>Year: </b>{movie.release_date}</p>
      <button className="btn btn-detail" onClick={handleShowDetails}>Detail</button>
      <button className="btn btn-fav" onClick={handleToggleFav}>
        {isFavState ? '♥' : '♡'}
      </button>
    </div>
      {showDetailsModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h5 className="modal-title">{movieDetails.title}</h5>
              <button type="button" className="close" onClick={handleCloseDetails}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
              <p><b>Year:</b> {movieDetails.release_date}</p>
              <p><b>Vote average:</b> {movieDetails.vote_average}</p>
              <p><b>Popularity:</b> {movieDetails.popularity}</p>
              <p><b>Overview:</b> {movieDetails.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

