import { createGlobalStyle } from 'styled-components';
import px2vw from './utils/px2vw';

interface ITheme {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
   }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export const lightTheme: ITheme = {
  body: '#FFFFFF',
  text: '#4B5563'
};
export const darkTheme: ITheme = {
  body: '#4B5563',
  text: '#FFFFFF'
};

export const headerLightTheme: ITheme = {
  body: '#60A5FA',
  text: '#1F2937'
};
export const headerDarkTheme: ITheme = {
  body: '#60A5FA',
  text: '#1F2937'
};
