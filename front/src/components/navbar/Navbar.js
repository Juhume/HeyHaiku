
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import "./Navbar.css"


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

          <Link to="/home" ><img className="logo" src="https://res.cloudinary.com/dq8yw5qca/image/upload/v1571341540/15712200828898277_g7ulk7.png" alt="logo" height="60"/></Link>

          <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link> <br></br>
          
          <Link to="/createhaiku" style={{ textDecoration: 'none' }}>Create Haiku</Link> <br></br>

          <Link to="/inspiration" style={{ textDecoration: 'none' }}>Lack of inspiration?</Link> <br></br>

          <Link to="/poems" style={{ textDecoration: 'none' }}>Random poem</Link> <br></br>

          <Link to="/myhaikus" style={{ textDecoration: 'none' }}>{this.state.loggedInUser.username}'s haikus</Link> <br></br>

          <Link to="/info" style={{ textDecoration: 'none' }}>About haikus</Link>


          <a onClick={this.handleLogout}>Logout</a>

        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">


              <img className="logo" src="https://res.cloudinary.com/dq8yw5qca/image/upload/v1571341540/15712200828898277_g7ulk7.png" alt="logo" height="60"/>


                <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link>

                <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>

          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
