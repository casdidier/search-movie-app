import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Movie } from '../api';
import { IMAGE_URL } from '../config';

const Card = styled.div`
  &:hover {
    opacity: 0.6;
    height: 100%;
  }
`;

const Image = styled.img`
  /* width: 100%;
  height: 98%; */
  object-fit: cover;
  display: block;
  position: relative;
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props): ReactElement {
  const history = useHistory();

  return (
    <Card>
      <Image
        src={`${IMAGE_URL}w${200}/${movie.poster_path}`}
        alt={movie.original_title}
        onClick={() => {
          history.push(`/movie/${movie.id}`);
        }}
      />
      {/* <CardDescription className="card">{movie.original_title}</CardDescription> */}
    </Card>
  );
}

export default MovieCard;
