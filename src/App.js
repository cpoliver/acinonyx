import React from 'react';

import { CheatSheet } from './components';

import './App.css';

const App = () => (
  <div className="c-app">
    <header className="c-app--header">
      <h1 className="c-app-title">Acinonyx</h1>
      <p className="c-app--intro">
        Beautiful, responsive cheat sheets.
      </p>
    </header>
    <CheatSheet />
  </div>
);

export default App;
