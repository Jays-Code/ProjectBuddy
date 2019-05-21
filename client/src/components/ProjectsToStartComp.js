import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import { StyledLink } from '../Style.js'
import { StyledButton } from '../Style'

class ProjToStartComp extends Component {
    
    state = {
        projectsToStart: [],

        newProjectToStart: {
            name: '',
            priority: '',
            info: ''
        }
    }
getAllProjectsToStart=()=>{
    axios.get('api/projectsToStart').then(res => {
        this.setState({ projectsToStart: res.data })
    })
}
    componentDidMount = () => {
     this.getAllProjectsToStart()
    }

    handleChange = (e) => {
        const cloneNewProjectToStart = { ...this.state.newProjectToStart }
        cloneNewProjectToStart[e.target.name] = e.target.value
        this.setState({ newProjectToStart: cloneNewProjectToStart })
    }

    createProjectToStart = (e) => {
        e.preventDefault()
        axios.post('/api/projectsToStart', {
            name: this.state.newProjectToStart.name,
            priority: this.state.newProjectToStart.priority,
            info: this.state.newProjectToStart.info
        })
            .then(res => {
                const projectsToStartList = [...this.state.projectsToStart]
                projectsToStartList.unshift(res.data)
                this.setState({
                    newProjectToStart: {
                        name: '',
                        priority: '',
                        info: ''
                    },
                    projectsToStart: projectsToStartList
                })
        
          
    })
    // this.props.history.push('/startedProjects')
    this.getAllProjectsToStart()
}
    

    //<form onSubmit = {this.createStartedProject}></form>


    render() {
        return (
            <div>
                <h1>Projects to Start</h1>
                
                {
                    this.state.projectsToStart.map(projectToStart => {
                        return (
                            <div key={projectToStart._id}>
                                <StyledLink to={`/projectsToStart/${projectToStart._id}`}>{projectToStart.name}</StyledLink>
                            </div>
                        )
                    })
                }
                <br></br>
                <form onSubmit={this.createProjectToStart}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newProjectToStart.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="priority">Priority</label>
                        <textarea
                            id="priority"
                            type="number"
                            name="priority"
                            onChange={this.handleChange}
                            value={this.state.newProjectToStart.priority}
                        />
                    </div>
                    <div>
                        <label htmlFor="info">Info</label>
                        <textarea
                            id="info"
                            type="text"
                            name="info"
                            onChange={this.handleChange}
                            value={this.state.newProjectToStart.info}
                        />
                    </div>
                    <StyledButton>Add a new project to start</StyledButton>
                </form>
            </div>
        )
    }
}


export default ProjToStartComp
