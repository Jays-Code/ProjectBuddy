import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class Homepage extends Component {
    /*
        state = { isProjectStarted: false };
    
        toggleIsProjectStarted = () => {
            let isProjectStarted = !this.state.isProjectStarted;
            this.setState({ isProjectStarted });
            //<button onClick={this.toggleIsProjectStarted}></button> --- this line was under h1 tag
            //had originally attempted to use button toggles, but can just switch to new component with Link
        }
    */

    render() {
        return (
            <div>
                <h1>Welcome to ProjectBuddy!</h1>
                <Link to="/StartedProjects">Started Projects</Link>
                <Link to="/ProjectsToStart">Projects To Start</Link>
            </div>
                )
            }
        }
        
export default Homepage