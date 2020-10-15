import React from 'react';
import './App.css';
import GithubState from './context/github/GithubState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import User from './users/User'
import Home from './pages/Home'



const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}  />  
                <Route exact path='/user/:login' component={User}  />  
              </Switch>
            </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
