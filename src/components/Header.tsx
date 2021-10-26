import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useHistory } from 'react-router-dom';
import { headerLightTheme, headerDarkTheme } from '../theme';

// FIXME: issue toogling colour with headercontainer
const HeaderContainer = styled('div')<{
  isDarkTheme?: boolean;
  children: JSX.Element[];
}>`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  font-weight: 500;
  font-size: 2rem;
  background: ${props => (props.isDarkTheme ? headerDarkTheme.body : headerDarkTheme.body)};
  color: ${props => (props.isDarkTheme ? headerDarkTheme.text : headerLightTheme.text)};
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

const ToogleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BackArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2);
`;

const HOME_URL_PATH = 'http://localhost:3000/';

interface Props {
  appName: string;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const Header = ({ appName, toggleTheme, isDarkTheme }: Props): JSX.Element => {
  const history = useHistory();
  const currentURL = window.location.href;

  let backArrow = <></>;
  if (currentURL !== HOME_URL_PATH) {
    backArrow = (
      <BackArrow onClick={() => history.push('/')}>
        <ArrowBackIosOutlinedIcon fontSize="large" />
      </BackArrow>
    );
  }

  return (
    <HeaderContainer>
      {backArrow}
      <Title>{appName}</Title>
      <ToogleWrapper>
        <LightModeIcon />
        <Switch onClick={() => toggleTheme()} />
        <NightsStayIcon />
      </ToogleWrapper>
    </HeaderContainer>
  );
};
