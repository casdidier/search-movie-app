import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Movie } from '../api';
import { IMAGE_URL } from '../config';

const Card = styled.div`
  position: relative;

  &:hover {
    opacity: 0.6;
    height: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  position: relative;
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  padding: 1.2rem;
  visibility: hidden;
  opacity: 0;

  ${Card}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props): ReactElement {
  const history = useHistory();

  return (
    <Card
      onClick={() => {
        history.push(`/movie/${movie.id}`);
      }}
    >
      <Image src={`${IMAGE_URL}w${200}/${movie.poster_path}`} alt={movie.original_title} />

      <CardDescription>{movie.original_title}</CardDescription>
    </Card>
  );
}

export default MovieCard;
