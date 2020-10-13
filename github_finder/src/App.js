import React from 'react';
import './App.css';
import { Router } from 'react-router-dom'
import Navbar from './layout/Navbar'


const App = () => {
  return (
    <div className="App">

        <Navbar title='Github Finder' icon='fab fa-github' />

    </div>
  );
}

export default App;
