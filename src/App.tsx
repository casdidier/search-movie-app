import React from 'react';
import './App.css';
import { Header } from './components/Header';

const App: React.FC = () => (
  <div className="App">
    <Header appName="Movie App" />
  </div>
);

export default App;
