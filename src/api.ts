/* eslint-disable */
import { API_URL, API_KEY } from './config';

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieDetails {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
}

export type MovieList = Movie[];
export interface MovieResults {
  page: number;
  results: MovieList;
}

export const fetchPopularMovieList = async (): Promise<MovieResults> => {
  const result: Response =
    await fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1
  `);

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return result.json();
};

export const getMovieRequest = async (searchValue: string): Promise<MovieResults> => {
  const result: Response = await fetch(
    `${API_URL}search/movie?api_key=${API_KEY}&page=1&query=${searchValue}`
  );

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return result.json();
};

export const getMovieDetail = async (movieId: number): Promise<IMovieDetails> => {
  const result: Response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return result.json();
};
