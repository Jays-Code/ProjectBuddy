import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class StartedProjComp extends Component {
    state = {
        startedProject: {
            name: '',
            rank: '',
            info: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/startedProjects/${this.props.match.params.projId}`).then(res => {
            this.setState({ startedProject: res.data })
        })
    }

    deleteProject = () => {
        axios.delete(`/api/startedProjects/${this.props.match.params.projId}`).then(<Redirect to="/api/startedProjects" />)

    }

    render() {

        return (
            <div>
                <h1>{this.state.startedProject.name}</h1>
                <h1>{this.state.startedProject.rank}</h1>
                <h1>{this.state.startedProject.info}</h1>
                <div>
                    <button onClick={this.deleteProject}>Delete this project</button>
                </div>
            </div>
        )
    }




}

export default StartedProjComp