import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import UserHome from "./components/contents/UserHome/UserHome";
import CreateHaiku from "./components/contents/UserHome/CreateHaiku/CreateHaiku";
import Myprofile from "./components/contents/UserHome/MyProfile/Myprofile";
import GenerateHaiku from "./components/contents/UserHome/GenerateHaiku/GenerateHaiku";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
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

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
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
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect to="/home" />
          <Route
                    exact
                    path="/home"
                    render={() => <UserHome />}
                  />

          <div className="App">
            <header className="App-header">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Route
                    exact
                    path="/createhaiku"
                    render={() => <CreateHaiku />}
                  />
              <Route
                    exact
                    path="/generatehaiku"
                    render={() => <GenerateHaiku />}
                  />
              <Route
                    exact
                    path="/myprofile"
                    render={() => <Myprofile />}
                  />
            </header>
            {/* <UserHome /> */}
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
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
                  Create, share, enjoy it,<br></br> a new world awaits for you,<br></br> Hey Haiku
                  is here.
                </h3>

                <h5>
                  Feeling the inspiration? Log in or sign up below to start
                  creating your best haikus!
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
        </React.Fragment>
      );
    }
  }
}

export default App;
