import React from 'react';
import './App.css';
import LanguageBox from './components/LanguageBox';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <LanguageBox />
      <Greeting />
    </div>
  );
}

export default App;
