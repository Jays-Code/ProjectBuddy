import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class StartedProjComp extends Component {
    render() {
        return (
            <div>
                <h1>Single started project listed here</h1>
            </div>
        )
    }

    componentDidMount = () => {
        axios.get(`/api/StartedProjects/${this.props.match.params.projId}`).then(res => {
            this.setState({startedProject: res.data})
        })
    }


}

export default StartedProjComp