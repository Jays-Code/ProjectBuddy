import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components';

class Homepage extends Component {
    /*
        state = { isProjectStarted: false };
    
        toggleIsProjectStarted = () => {
            let isProjectStarted = !this.state.isProjectStarted;
            this.setState({ isProjectStarted });
            //<button onClick={this.toggleIsProjectStarted}></button> --- this line was under h1 tag
            //had originally attempted to use button toggles, but can just switch to new component with Link
        }
    */

    render() {

        const StyledDiv1 =  styled.div`
        justify-content: center;
        padding:190px;
        float: left;
        text-decoration: none;
        font-size: 5vh;
        background: orange;
        border: solid black;
        ;
        `

        const StyledDiv2 = styled.div`
        justify-content: center;
        padding: 190px;
        float: right;
        text-decoration: none;
        font-size: 5vh;
        background: orange;
        border: solid black;
        `

        

        return (
            <div>
                <h1>Welcome to ProjectBuddy!</h1>
                <StyledDiv1><Link to="/startedProjects">Started Projects</Link></StyledDiv1>
                <StyledDiv2><Link to="/projectsToStart">Projects To Start</Link></StyledDiv2>
            </div>
                )
            }
        }
        
export default Homepage