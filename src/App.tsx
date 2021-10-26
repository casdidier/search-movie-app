import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fetchPopularMovieList, MovieList, getMovieRequest } from './api';
import './App.css';
import { Layout } from './components/Layout';
import MovieDetail from './components/MovieDetail';
import MovieGallery from './components/MovieGallery';
import { SearchContainer } from './components/SearchContainer';
import Wrapper from './components/Wrapper';
import { lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieList>([] as MovieList);
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  useEffect(() => {
    const fetchFromApi = async () => {
      let result;
      if (searchValue === '') {
        result = await fetchPopularMovieList();
      } else {
        result = await getMovieRequest(searchValue);
      }
      setMovieList(result.results);
    };
    fetchFromApi();
  }, [searchValue]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout toggleTheme={toggleTheme} isDarkTheme>
              <Wrapper>
                <SearchContainer value={searchValue} setSearchValue={setSearchValue} />
                <MovieGallery movieList={movieList} />
              </Wrapper>
            </Layout>
          </Route>
          <Layout toggleTheme={toggleTheme} isDarkTheme>
            <Route path="/movie/:id" component={MovieDetail} />
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
