import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class StartedProjectsComp extends Component {
    render() {
        return (
            <div>
                <h1>Started Projects</h1>
                <Link to="/">Go Back to Home</Link>
            </div>
        )
    }
}

export default StartedProjectsComp