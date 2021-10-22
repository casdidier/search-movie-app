import React, { useEffect, useState } from 'react';
import { fetchPopularMovieList, MovieList } from './api';
import './App.css';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [movieList, setMovieList] = React.useState<MovieList>([] as MovieList);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchPopularMovieList();
      setIsLoading(false);
      setMovieList(result);
    };

    fetchFromApi();
  }, []);

  console.log(movieList);

  return (
    <div className="App">
      <Header appName="Movie App" />
    </div>
  );
};

export default App;
