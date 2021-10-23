import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovieDetail, IMovieDetails } from '../api';
import { IMAGE_URL } from '../config';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Details = styled.p`
  font-size: 1.2rem;
`;

const Title = styled.h2``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Overview = styled.div`
  display: block;
  width: 20rem;
  text-align: justify;
  margin-bottom: 1.2rem;
`;

const Rating = styled.p``;

const ImageDetail = styled.img`
  width: 25%;
  object-fit: cover;
`;

/* eslint-disable */
export default function MovieDetail(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const [movieDetail, setMovieDetail] = useState({} as IMovieDetails);

  useEffect(() => {
    const fetchFromApi = async () => {
      console.log(id, parseInt(id, 2));
      // setIsLoading(true);
      const result = await getMovieDetail(Number(id));
      // setIsLoading(false);
      console.log('movie details', result);
      setMovieDetail(result);
    };
    fetchFromApi();
  }, []);

  const { original_title, overview, backdrop_path, vote_average } = movieDetail;

  return (
    <Wrapper>
      <Description>
        <Title>{original_title}</Title>
        <Overview>{overview}</Overview>
        <Rating>{vote_average}</Rating>
      </Description>
      <ImageDetail src={`${IMAGE_URL}w${500}/${backdrop_path}`} />
    </Wrapper>
  );
}
