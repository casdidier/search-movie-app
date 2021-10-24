import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fetchPopularMovieList, MovieList, getMovieRequest } from './api';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import MovieDetail from './components/MovieDetail';
import MovieGallery from './components/MovieGallery';
import { SearchContainer } from './components/SearchContainer';
import Wrapper from './components/Wrapper';
import { GlobalStyles, lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieList>([] as MovieList);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  const history = useHistory();

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

  console.log('theme', theme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout toggleTheme={toggleTheme}>
              <Wrapper>
                <SearchContainer value={searchValue} setSearchValue={setSearchValue} />
                <MovieGallery movieList={movieList} />
              </Wrapper>
            </Layout>
          </Route>
          <Layout toggleTheme={toggleTheme}>
            <Route path="/movie/:id" component={MovieDetail} />
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
