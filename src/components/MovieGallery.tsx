import React, { ReactElement } from 'react';
import { Movie, MovieList } from '../api';

type Props = {
  movieList: MovieList;
};

export default function MovieGallery({ movieList }: Props): ReactElement {
  return (
    <>
      {movieList.map(movie => (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div>{movie.original_title}</div>
          <div>{movie.overview}</div>
        </>
      ))}
    </>
  );
}
