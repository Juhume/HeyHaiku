// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (<div>
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" name="username" placeholder='Matsuo Bashō' value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>
        

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" placeholder='******' value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="Click here and take out your writer inside" />
      </form>

      <h4>{this.state.error ? 'Incorrect user or password' : ''}</h4>
    </div>)
  }
}

export default Login;