import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme';
import { Header } from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface Props {
  children: JSX.Element;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const Layout = ({ children, toggleTheme, isDarkTheme }: Props): JSX.Element => (
  <Wrapper>
    <GlobalStyles />
    <Header appName="Movie App" toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    {children}
  </Wrapper>
);
