import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
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
    const StyledApp = styled.div`
    background:palevioletred;
    text-align: center;
    border: solid black;
    `
    
    return (
      <Router>
        <Navbar></Navbar>
        <StyledApp>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/startedProjects' component={StartedProjectsComp} />
            <Route exact path='/startedProjects/:projId' component={StartedProjComp} />
            <Route exact path='/projectsToStart' component={ProjectsToStartComp} />
            <Route exact path='/projectsToStart/:projId' component={ProjToStartComp} />
            <Route exact path='/about' component={About} />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;

