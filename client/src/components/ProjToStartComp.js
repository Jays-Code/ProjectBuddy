import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import { StyledLink } from '../Style.js'
import { StyledButton } from '../Style'
import { StyledLabel } from '../Style'

class ProjToStartComp extends Component {
    state = {
        projectToStart: {
            name: '',
            priority: '',
            info: ''
        },
        redirect: false
    }

    componentDidMount = () => {
        axios.get(`/api/projectsToStart/${this.props.match.params.projId}`).then(res => {
            this.setState({ projectToStart: res.data })
        })
    }

    deleteProject = () => {
        axios.delete(`/api/projectsToStart/${this.props.match.params.projId}`).then(() => this.setState({ redirect: true }));
      

    }

    render() {
        //console.log(this.state.projectToStart)
        if (this.state.redirect) {
            return <Redirect to='/projectsToStart'/>;
        }
        return (
            <div>
                <h1>{this.state.projectToStart.name}</h1>
                <h1>{this.state.projectToStart.priority}</h1>
                <h1>{this.state.projectToStart.info}</h1>
                <div>
                    <StyledButton onClick={this.deleteProject}>Delete this project</StyledButton>
                </div>
            </div>
        )
        
    }
}

export default ProjToStartComp




