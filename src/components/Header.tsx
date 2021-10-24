import React from 'react';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
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

const ToogleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface Props {
  appName: string;
  isDarkTheme: boolean;
  // toggleTheme: () => React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

export const Header = ({ appName, toggleTheme, isDarkTheme }: Props): JSX.Element => (
  <HeaderContainer>
    <Title>{appName}</Title>
    <ToogleWrapper>
      <LightModeIcon />
      <Switch onClick={() => toggleTheme()} />
      <NightsStayIcon />
    </ToogleWrapper>
  </HeaderContainer>
);
