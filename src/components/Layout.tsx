import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props): JSX.Element => (
  <Wrapper>
    <Header appName="Movie App" />
    {children}
  </Wrapper>
);
