export interface Movie {
  posterPath: string;
  overview: string;
  id: number;
  originalTitle: string;
}

export type MovieList = Movie[];

export const fetchPopularMovieList = async (): Promise<MovieList> => {
  const result: Response =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1e07e5ddc8cd4a8140560452f40758f5&language=en-US&page=1
  `);

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return result.json();
};
