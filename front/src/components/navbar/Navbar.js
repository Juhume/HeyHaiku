
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import "./Navbar.css"
import logo from './15712200828898277.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <img src={logo} alt="" height="60"/>
          <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link> <br></br>
          
          <Link to="/createhaiku" style={{ textDecoration: 'none' }}>Create Haiku</Link> <br></br>

          <Link to="/myhaikus" style={{ textDecoration: 'none' }}>My Haikus</Link> <br></br>

          <Link to="/inspiration" style={{ textDecoration: 'none' }}>Lack of inspiration?</Link> <br></br>

          <Link to="/info" style={{ textDecoration: 'none' }}>Info</Link>
        
          <Link to="/myprofile" style={{ textDecoration: 'none' }}>{this.state.loggedInUser.username}</Link> <br></br>

          <a onClick={this.handleLogout}>Logout</a>

        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">


              <img src={logo} alt="" height="60"/>


                <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link>

                <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>

          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
