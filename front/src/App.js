import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { Link } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import UserHome from "./components/contents/UserHome/UserHome";
import CreateHaiku from "./components/contents/UserHome/CreateHaiku/CreateHaiku";
import Myprofile from "./components/contents/UserHome/MyProfile/Myprofile";
import MyHaikus from "./components/contents/UserHome/MyHaikus/MyHaikus";
import Inspiration from "./components/contents/Inspiration";
import Info from "./components/contents/Info";
import Poems from "./components/contents/Poems";
// import TheHeyHaikuproject from "./components/contents/TheHeyHaikuproject"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Route exact path="/createhaiku" render={() => <CreateHaiku />} />
              <Route
                exact
                path="/myhaikus"
                render={() => <MyHaikus user={this.state.loggedInUser} />}
              />
              <Route exact path="/inspiration" render={() => <Inspiration />} />
              <Route exact path="/myprofile" render={() => <Myprofile />} />
              <Redirect to="/home" />
              <Route exact path="/home" render={() => <UserHome />} />
              <Route exact path="/info" render={() => <Info />} />
              <Route exact path="/poems" render={() => <Poems />} />
              {/* <Route exact path="/theyheyhaikuproject" render={() => <TheHeyHaikuproject />} /> */}


            </header>
          </div>
          <footer>Hey Haiku, a project made with 💓 by <a className="juhume" target="_blank" href='https://github.com/Juhume'>@juhume</a>
           {/* <Link to="/theheyhaikuproject" className="heyhaikuinfo" >the Hey Haiku project</Link> */}
           </footer>
        </React.Fragment>
      );
    } else {
      return (
        
        <React.Fragment>

          <Redirect to="/login" />

          <div className="App">
          
            <header className="App-header">
              
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
            </header>
            <div className="home">
              <div className="hometext">
                <h1>Welcome to Hey Haiku!</h1>
                <h3>
                  Create, share, enjoy it,<br></br> a new world awaits for you,
                  <br></br> Hey Haiku is here.
                </h3>
                <h5>
                  Ready for the world of writing haikus? <br></br>
                  The journey begins now
                </h5>
              </div>
              <div className="login">
                
                <Switch>
                  <Route
                    exact
                    path="/signup"
                    render={() => <Signup getUser={this.getUser} />}
                    
                  />
                  <Route
                    exact
                    path="/login"
                    render={() => <Login getUser={this.getUser} />}
                  />
                </Switch>

              </div>
            </div>
          </div>

          <footer>Hey Haiku, a project made with 💓 by <a className="juhume" target="_blank" href='https://github.com/Juhume'>@juhume</a> 
          {/* <Link to="/theheyhaikuproject" className="heyhaikuinfo" >the Hey Haiku project</Link> */}
          </footer>
        </React.Fragment>
        
      );
    }
  }
}

export default App;
