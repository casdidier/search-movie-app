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
  //   toggleTheme: () => React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

export const Layout = ({ children, toggleTheme }: Props): JSX.Element => (
  <Wrapper>
    <GlobalStyles />
    <Header appName="Movie App" toggleTheme={toggleTheme} />
    {children}
  </Wrapper>
);
