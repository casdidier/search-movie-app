import React, { ReactElement } from 'react';
import { Movie, MovieList } from '../api';
import { IMAGE_URL } from '../config';

type Props = {
  movieList: MovieList;
};

export default function MovieGallery({ movieList }: Props): ReactElement {
  return (
    <>
      {movieList.map((movie: Movie) => (
        <div key={movie.id}>
          <img src={`${IMAGE_URL}w${200}/${movie.poster_path}`} alt={movie.original_title} />
          <div>{movie.original_title}</div>
          <div>{movie.overview}</div>
        </div>
      ))}
    </>
  );
}
