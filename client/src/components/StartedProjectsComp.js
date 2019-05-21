import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
//import Axios from 'axios';
import { StyledLink } from '../Style.js'
import { StyledButton } from '../Style'

class StartedProjectsComp extends Component {



    state = {
        startedProjects: [],

        newStartedProject: {
            name: '',
            rank: '',
            info: ''
        }
    }
    getAllStartedProjects = () => {
        axios.get('api/startedProjects').then(res => {
            this.setState({ startedProjects: res.data })
        })
    }
    componentDidMount = () => {
        this.getAllStartedProjects()
    }

    handleChange = (e) => {
        const cloneNewStartedProject = { ...this.state.newStartedProject }
        cloneNewStartedProject[e.target.name] = e.target.value
        this.setState({ newStartedProject: cloneNewStartedProject })
    }

    createStartedProject = (e) => {
        e.preventDefault()
        console.log("hello world")
        axios.post('/api/startedProjects', {
            name: this.state.newStartedProject.name,
            rank: this.state.newStartedProject.rank,
            info: this.state.newStartedProject.info
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
        // this.props.history.push('/startedProjects')
        this.getAllStartedProjects()
    }


    /*
        changeit=(number)=>{
            Css change pic to yellow or change pick to other pic
            Give value to other thing
            Let copy = this.state.songs.stars
            Copy = number
            This.setState({stars: copy})
            
            Axios.post(api/songs, this.state.songs)
            Then FX Get all songs
            }
            <div onclick={changeit(1) }> IMAGE OF STAR</div>
            <div onclick={changeit(2) }> IMAGE OF STAR</div>
            <div onclick={changeit(3) }> IMAGE OF STAR</div>
            <div onclick={changeit(4) }> IMAGE OF STAR</div>
            <div onclick={changeit(5) }> IMAGE OF STAR</div>
    */
    /*
     changeIt = (number) => {
 
         let copy = this.state.startedProjects.stars
         copy = number
         this.setState({ stars: copy })
 
         axios.post('/api/startedProjects', this.state.startedProjects)
        */
    /*
        <div >
        <div onclick={changeit(1)} > IMAGE OF STAR</div >
        <div onclick={changeit(2)}> IMAGE OF STAR</div>
        <div onclick={changeit(3)}> IMAGE OF STAR</div>
        <div onclick={changeit(4)}> IMAGE OF STAR</div>
        <div onclick={changeit(5)}> IMAGE OF STAR</div>
            </div >
            */

      
/*
getAllStartedProjects = () => {
   axios.get('api/startedProjects').then(res => {
       this.setState({ startedProjects: res.data })
   })
}*/




    render() {
        /*
        const Button = styled.button`
        background: #4CAF50;
        border-radius: 100%
        margin: 1vh
        `;
        */
 


        return (
            <div>
                <h1>Started Projects</h1>

                {
                    this.state.startedProjects.map(startedProject => {
                        return (
                            <div key={startedProject._id}>
                                <StyledLink to={`/startedProjects/${startedProject._id}`}>{startedProject.name}</StyledLink>
                            </div>
                        )
                    })
                }
                <br></br>
                
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
                            id="rank"
                            type="number"
                            name="rank"
                            onChange={this.handleChange}
                            value={this.state.newStartedProject.rank}
                        />
                    </div>
                    <div>
                        <label htmlFor="rank">Info</label>
                        <textarea
                            id="info"
                            type="text"
                            name="info"
                            onChange={this.handleChange}
                            value={this.state.newStartedProject.info}
                        />
                    </div>
                    <StyledButton>Add a previously started project</StyledButton>
                </form>
            </div>
        )
    }
}

export default StartedProjectsComp

////////////
/*
{
    this.state.startedProjects.map(startedProject => {
        return (
            <div key={startedProject.projId}>
                <Link to={`/${startedProject.projId}`}>{startedProject.name}</Link>
            </div>
        )
    })
}

  */