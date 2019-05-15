import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class StartedProjectsComp extends Component {
    render() {
        return (
            <div>
                <h1>Started Projects(Why cant my Link show?)</h1>
                <Link to="/">(this is a test)Go Back to Home</Link>
            </div>
        )
    }
}

export default StartedProjectsComp