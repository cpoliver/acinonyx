import React from 'react';

import { CheatSheet } from './components';
import cheatSheetData from './cheat-sheet.json';

import './App.css';

const App = () => (
  <div className="c-app">
    <header className="c-app--header">
      <h1 className="c-app-title">Acinonyx</h1>
      <p className="c-app--intro">
        Beautiful, responsive cheat sheets.
      </p>
    </header>
    <CheatSheet {...cheatSheetData} />
  </div>
);

export default App;
