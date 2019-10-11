
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


          <Link to="/createhaiku">Create Haiku</Link> <br></br>

          <Link to="/generatehaiku">Generate Haiku</Link> <br></br>
        
          <Link to="/myprofile">{this.state.loggedInUser.username}</Link> <br></br>

          <a onClick={this.handleLogout}>Logout</a>



          <div className="header">
            {/* <img src={logo} alt="" height="100"/> */}
            {/* <h2>Welcome {this.state.loggedInUser.username}</h2> */}
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
