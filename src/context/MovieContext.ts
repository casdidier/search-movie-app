import React, { useState, useEffect, createContext } from 'react';

// const defaultState = { movieId: 1, goToMovieDetailPage };

interface IMovieContext {
  movieId: number;
  // goToMovieDetailPage: (movieId: number) => React.MouseEventHandler<HTMLImageElement> | undefined;
  goToMovieDetailPage: (movieId: number) => void;
}

const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export default MovieContext;
