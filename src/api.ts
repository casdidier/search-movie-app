/* eslint-disable */
import { API_URL, IMAGE_URL, API_KEY } from './config';

export interface Movie {
  overview: string;
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
}

export type MovieList = Movie[];
interface MovieResults {
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
