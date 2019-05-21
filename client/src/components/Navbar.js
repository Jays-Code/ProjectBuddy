import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components';

class Navbar extends Component {
  render() {

    const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    font-weight: bolder;
    background: #004C99;
    padding: 1vw;
    margin: 
    `
    const StyledLink = styled(Link)`
    float: right;
    `

   

    return (
      <StyledDiv className="navbar">
          <Link to = "/">Home</Link>
          <StyledLink to = "/About">About</StyledLink>
      </StyledDiv>
    );
  }
}

export default Navbar;