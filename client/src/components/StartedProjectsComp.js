import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class StartedProjectsComp extends Component {

    state = {
        startedProjects: [],
        newStartedProject: {
            name: '',
            rank: '',
            description: ''
        }
    }

    componentDidMount = () => {
        axios.get('api/startedProjects').then(res => {
            this.setState({ startedProjects: res.data })
        })
    }

    handleChange = (e) => {
        const cloneNewStartedProject = { ...this.state.newStartedProject }
        cloneNewStartedProject[e.target.name] = e.target.value
        this.setState({ newStartedProject: cloneNewStartedProject })
    }

    createStartedProject = (e) => {
        e.preventDefault()
        axios.post('/api/startedProjects', {
            name: this.state.newStartedProject.name,
            rank: this.state.newStartedProject.rank,
            info: this.state.newCreature.info
        })
            .then(res => {
                const startedProjectsList = [...this.state.startedProjects]
                startedProjectsList.unshift(res.data)
                this.setState({
                    newStartedProject: {
                        name: '',
                        rank: '',
                        info: ''
                    },
                    startedProjects: startedProjectsList
                })
            })
    }


    //<form onSubmit = {this.createStartedProject}></form>


    render() {
        return (
            <div>
                <h1>Started Projects</h1>
                <Link to="/">Go Back to Home</Link>
                <form onSubmit={this.createStartedProject}>
    <div>
        <label htmlFor="name">Name</label>
        <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.newStartedProject.name}
        />
    </div>
    <div>
        <label htmlFor="rank">Rank</label>
        <textarea
            id="description"
            type="number"
            name="description"
            onChange={this.handleChange}
            value={this.state.newStartedProject.rank}
        />
    </div>
    <div>
        <label htmlFor="rank">Info</label>
        <textarea
            id="info"
            type="number"
            name="info"
            onChange={this.handleChange}
            value={this.state.newStartedProject.rank}
        />
    </div>
    <button>Add a previously started project</button>
</form>
            </div>
        )
    }
}

export default StartedProjectsComp

////////////
{
    this.state.startedProjects.map(startedProject => {
        return (
            <div key={startedProject.projId}>
                <Link to={`/${startedProject.projId}`}>{startedProject.name}</Link>
            </div>
        )
    })
}

  