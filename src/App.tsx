import React, { useEffect, useState } from 'react';
import { fetchPopularMovieList, Movie, MovieList } from './api';
import './App.css';
import { Header } from './components/Header';
import MovieGallery from './components/MovieGallery';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieList>([] as MovieList);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchPopularMovieList();
      setIsLoading(false);
      setMovieList(result.results);
    };

    fetchFromApi();
  }, []);

  console.log(movieList);

  return (
    <div className="App">
      <Header appName="Movie App" />
      <MovieGallery movieList={movieList} />
    </div>
  );
};

export default App;
