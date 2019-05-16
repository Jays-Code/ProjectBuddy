import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class Navbar extends Component {
  render() {

    return (
      <div className="navbar">
          <Link to = "/">Home</Link>
          <Link to = "/About">About</Link>
      </div>
    );
  }
}

export default Navbar;