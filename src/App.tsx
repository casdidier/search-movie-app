import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { fetchPopularMovieList, Movie, MovieList, getMovieRequest, getMovieDetail } from './api';
import './App.css';
import { Header } from './components/Header';
import MovieDetail from './components/MovieDetail';
import MovieGallery from './components/MovieGallery';
import { SearchContainer } from './components/SearchContainer';
import Wrapper from './components/Wrapper';
import MovieContext from './context/MovieContext';
import { GlobalStyles } from './globalStyles';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieList>([] as MovieList);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [movieId, setMovieId] = useState(1);
  const history = useHistory();

  const navigateTo = (id: number) => {
    console.log('history', history);
    history.push(`/movie/${id}`);
  };

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

  const goToMovieDetailPage = (id: number) => {
    console.log('movie id', id);
    setMovieId(id);
  };

  // console.log(movieList);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieContext.Provider value={{ movieId, goToMovieDetailPage }}>
            <GlobalStyles />
            <Wrapper>
              <Header appName="Movie App" />
              <SearchContainer value={searchValue} setSearchValue={setSearchValue} />
              <MovieGallery movieList={movieList} />
            </Wrapper>
          </MovieContext.Provider>
        </Route>
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
