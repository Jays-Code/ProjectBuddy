import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import { StyledButton } from '../Style'
import { StyledLabel } from '../Style'


class StartedProjComp extends Component {
    state = {
        startedProject: {
            name: '',
            rank: '',
            info: ''
        },
        redirect: false
    }



    componentDidMount = () => {
        axios.get(`/api/startedProjects/${this.props.match.params.projId}`).then(res => {
            this.setState({ startedProject: res.data })
            console.log("hello")
        })
    }

    deleteProject = () => {
        axios.delete(`/api/startedProjects/${this.props.match.params.projId}`)
        .then(() => this.setState({ redirect: true }));
        
    }

    handleChange = (e) => {
        const cloneStartedProject = { ...this.state.startedProject }
        cloneStartedProject[e.target.name] = e.target.value
        this.setState({ startedProject: cloneStartedProject })
    }

    updateStartedProject = (e) => {
        e.preventDefault()
        axios.put(`/api/startedProjects/${this.props.match.params.projId}`, {
            name: this.state.startedProject.name,
            rank: this.state.startedProject.rank,
            info: this.state.startedProject.info
        })
        // .then(res => {
        //     this.setState({ startedProject: res.data })
            .then(() => this.setState({ redirect: true}))

    }

    render() {
        
                if (this.state.redirect) {
                    return <Redirect to='/startedProjects'/>;
                }
                
        return (
            <div>
                <h1>{this.state.startedProject.name}</h1>
                <h1>{this.state.startedProject.rank}</h1>
                <h1>{this.state.startedProject.info}</h1>
                <div>
                    <StyledButton onClick={this.deleteProject}>Delete this project</StyledButton>
                </div>
                <div>
                    <form onSubmit={this.updateStartedProject}>
                        <div>
                            <StyledLabel htmlFor="name">Name: </StyledLabel>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.startedProject.name}
                            />
                        </div>
                        <br></br>
                        <div>
                            <StyledLabel htmlFor="rank">Rank: </StyledLabel>
                            <input
                                id="rank"
                                type="text"
                                name="rank"
                                onChange={this.handleChange}
                                value={this.state.startedProject.rank}
                            />
                        </div>
                        <br></br>
                        <div>
                            <StyledLabel htmlFor="info">Info: </StyledLabel>
                            <textarea
                                id="info"
                                name="info"
                                onChange={this.handleChange}
                                value={this.state.startedProject.info}
                            />
                        </div>
                        <StyledButton>Update</StyledButton>
                    </form>
                </div>
            </div>


        )

    }




}

export default StartedProjComp