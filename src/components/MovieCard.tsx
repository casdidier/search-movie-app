import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Movie } from '../api';
import { IMAGE_URL } from '../config';

const Card = styled.div``;

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props): ReactElement {
  return (
    <Card>
      <img src={`${IMAGE_URL}w${200}/${movie.poster_path}`} alt={movie.original_title} />
    </Card>
  );
}

export default MovieCard;
