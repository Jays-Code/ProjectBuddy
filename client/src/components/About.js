import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components';

class About extends Component {
  render() {
    const h4 = styled.h4`
    color: red;
    `
    return (
      <div className="about">
        <h1>ProjectBuddy is a project organizer app.</h1>
        <h4>This is a web app that helps you keep track of your started projects, as well as projects that you would like to start.
With features such as "rank" for your started projects, and "priority" for your projects to start, you will be able to quickly identify the projects that you want to reference.
This is particularly useful for creatives that have may have hundreds of files stored on their computer, in situations where they cannot remember something as trivial as a file name.
</h4>
      </div>
    );
  }
}

export default About;