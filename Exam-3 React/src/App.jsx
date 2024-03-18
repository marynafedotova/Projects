import React, { useState, useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteSearch from './components/SiteSearch';
import MovieList from './components/MovieList';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import FavMovieList from './components/FavMovieList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const API_KEY = '21189258955c2454730ab1e173c71ea0';

export default function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  async function fetchTrendingMovies() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      const json = await response.json();
      setTrendingMovies(json.results);
    } catch (error) {
      toast.error('Error fetching trending movies:', error);
    }
  }

  async function searchMovies(search) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`);
      const json = await response.json();
      setSearchResults(json.results);
    } catch (error) {
      toast.error('Error searching movies:', error);
    }
  }
  function addToFav(movie) {
    setFavList(prevFavList => [...prevFavList, { ...movie, isFav: true }]);
  }
  function removeFromFav(movieId) {
    setFavList(prevFavList => {
      const updatedFavList = prevFavList.map(movie => {
        if (movie.id === movieId) {
          return { ...movie, isFav: false };
        }
        return movie;
      });
      return updatedFavList.filter(movie => movie.id !== movieId);
    });
  }
  
  return (
    <>
      <SiteHeader />
      <SiteSearch onSearch={searchMovies} />
      <MovieList
        movies={searchResults.length > 0 ? searchResults : trendingMovies}
        onAddToFav={addToFav}
        removeFromFav={removeFromFav}
        favList={favList}
      />
     <FavMovieList favList={favList} addToFav={addToFav} removeFromFav={removeFromFav} />
      <AboutUs />
      <Contacts />
      <ToastContainer />
    </>
  );
}

