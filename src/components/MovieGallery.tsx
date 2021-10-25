import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Movie, MovieList } from '../api';
import { IMAGE_URL } from '../config';
import MovieCard from './MovieCard';

const MovieGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 5px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 5px;
  }

  @media (max-width: 480px) {
    height: 100vh;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
  }
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
