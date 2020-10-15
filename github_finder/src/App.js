import React from 'react';
import './App.css';
import GithubState from './context/github/GithubState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import User from './users/User'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Alert from './layout/Alert'



const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}  />  
                <Route exact path='/about' component={ About } />                
                <Route exact path='/user/:login' component={User}  />  
                <Route component={NotFound} />                
              </Switch>
            </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
