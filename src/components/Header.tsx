import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

interface Props {
  appName: string;
}

export const Header = ({ appName }: Props): JSX.Element => (
  <HeaderContainer>
    <Title>{appName}</Title>
  </HeaderContainer>
);
