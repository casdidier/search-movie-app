import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Movie, MovieList } from '../api';
import { IMAGE_URL } from '../config';
import MovieCard from './MovieCard';

const MovieGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
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
