import React from 'react';
import './App.css';
import NamesList from './components/NamesList'
import RandomName from './components/RandomName'

function App() {
  return (
    <div className="App">
     <strong>This is App</strong>
     <NamesList/>
     <RandomName/>
    </div>
  );
}

export default App;
