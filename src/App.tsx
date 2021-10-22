import React, { useEffect, useState } from 'react';
import { fetchPopularMovieList, Movie, MovieList, getMovieRequest } from './api';
import './App.css';
import { Header } from './components/Header';
import MovieGallery from './components/MovieGallery';
import { SearchContainer } from './components/SearchContainer';
import Wrapper from './components/Wrapper';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieList>([] as MovieList);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);

      let result;
      if (searchValue === '') {
        result = await fetchPopularMovieList();
      } else {
        result = await getMovieRequest(searchValue);
      }
      setIsLoading(false);
      setMovieList(result.results);
    };
    fetchFromApi();
  }, [searchValue]);

  console.log(movieList);

  return (
    <Wrapper>
      <Header appName="Movie App" />
      <SearchContainer value={searchValue} setSearchValue={setSearchValue} />
      <MovieGallery movieList={movieList} />
    </Wrapper>
  );
};

export default App;
