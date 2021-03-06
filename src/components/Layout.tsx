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
  theme: string;
  toggleTheme: () => void;
}

export const Layout = ({ children, toggleTheme, theme }: Props): JSX.Element => (
  <Wrapper>
    <GlobalStyles />
    <Header appName="Movie App" toggleTheme={toggleTheme} theme={theme} />
    {children}
  </Wrapper>
);
