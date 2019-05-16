import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StartedProjectsComp from './components/StartedProjectsComp'
import StartedProjComp from './components/StartedProjComp'
import ProjectsToStartComp from './components/ProjectsToStartComp'
import ProjToStartComp from './components/ProjToStartComp'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import About from './components/About'



//navbar would go above className div, below router
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/startedProjects' component={StartedProjectsComp} />
            <Route path='/startedProjects/:projId' component={StartedProjComp} />
            <Route path='/projectsToStart' component={ProjectsToStartComp} />
            <Route path='/projectsToStart/:projId' component={ProjToStartComp} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

