import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

class ProjToStartComp extends Component {
    state = {
        projectToStart: {
            name: '',
            priority: '',
            info: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/projectsToStart/${this.props.match.params.projId}`).then(res => {
            this.setState({ projectToStart: res.data })
        })
    }

    deleteProject = () => {
        axios.delete(`/api/projectsToStart/${this.props.match.params.projId}`).then(<Redirect to="/api/projectsToStart" />)

    }

    render() {
        //console.log(this.state.projectToStart)
        return (
            <div>
                <h1>{this.state.projectToStart.name}</h1>
                <h1>{this.state.projectToStart.priority}</h1>
                <h1>{this.state.projectToStart.info}</h1>
                <div>
                    <button onClick={this.deleteProject}>Delete this project</button>
                </div>
            </div>
        )
        
    }
}

export default ProjToStartComp




