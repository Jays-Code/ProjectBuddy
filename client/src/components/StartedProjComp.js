import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';


class StartedProjComp extends Component {
    state = {
        startedProject: {
            name: '',
            rank: '',
            info: ''
        },
        //redirect: false
    }



    componentDidMount = () => {
        axios.get(`/api/startedProjects/${this.props.match.params.projId}`).then(res => {
            this.setState({ startedProject: res.data })
        })
    }

    deleteProject = () => {
        axios.delete(`/api/startedProjects/${this.props.match.params.projId}`)
        //.then(() => this.setState({ redirect: true }));
    }

    handleChange = (e) => {
        const cloneStartedProject = { ...this.state.startedProject }
        cloneStartedProject[e.target.name] = e.target.value
        this.setState({ startedProject: cloneStartedProject })
    }

    updateStartedProject = () => {
        axios.put(`/api/startedProjects/${this.props.match.params.projId}`, {
            name: this.state.startedProject.name,
            rank: this.state.startedProject.rank,
            info: this.state.startedProject.info
        }).then(res => {
            this.setState({ startedProject: res.data })
        })

    }

    render() {
        /*
                if (this.state.redirect) {
                    return <Redirect to='/api/startedProjects'/>;
                }
                */
        return (
            <div>
                <h1>{this.state.startedProject.name}</h1>
                <h1>{this.state.startedProject.rank}</h1>
                <h1>{this.state.startedProject.info}</h1>
                <div>
                    <button onClick={this.deleteProject}>Delete this project</button>
                </div>
                <div>
                    <form onSubmit={this.updateStartedProject}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.startedProject.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="rank">Rank</label>
                            <input
                                id="rank"
                                type="text"
                                name="rank"
                                onChange={this.handleChange}
                                value={this.state.startedProject.rank}
                            />
                        </div>
                        <div>
                            <label htmlFor="info">Info</label>
                            <textarea
                                id="dinfo"
                                name="info"
                                onChange={this.handleChange}
                                value={this.state.startedProject.info}
                            />
                        </div>
                        <button>Update</button>
                    </form>
                </div>
            </div>


        )

    }




}

export default StartedProjComp