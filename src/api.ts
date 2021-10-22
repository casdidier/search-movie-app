/* eslint-disable */
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
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1e07e5ddc8cd4a8140560452f40758f5&language=en-US&page=1
  `);

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return result.json();
};
