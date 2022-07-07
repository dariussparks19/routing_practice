import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Welcome from './components/welcome';
import IDComponent from "./components/idpage";
import Word from "./components/wordpage";
import Multi from './multipage';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Word path="/:str"/>
        <IDComponent path="/:id"/>
      </Router>
    </div>
  );
}

export default App;
