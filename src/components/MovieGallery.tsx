import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Movie, MovieList } from '../api';
import { IMAGE_URL } from '../config';
import MovieCard from './MovieCard';

const MovieGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 5px;
`;

type Props = {
  movieList: MovieList;
};

export default function MovieGallery({ movieList }: Props): ReactElement {
  return (
    <MovieGalleryContainer>
      {movieList.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGalleryContainer>
  );
}
