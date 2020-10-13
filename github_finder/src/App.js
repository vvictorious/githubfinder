import React from 'react';
import './App.css';
import GithubState from './context/github/GithubState'
import { Router } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Search from './users/Search'


const App = () => {
  return (
    <GithubState>
      <div className="App">
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Search />
          </div>
      </div>
    </GithubState>
  );
}

export default App;
