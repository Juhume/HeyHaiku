import React, { Component } from "react";
// import CreateHaiku from "./components/contents/CreateHaiku/CreateHaiku";
// import EditHaiku from "./components/contents/EditHaiku/EditHaiku";
import "./UserHome.css";

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class UserHome extends Component {
  render() {
    return (
      <div>
        <h1>All Haikus</h1>
      </div>
    );
  }
}

export default UserHome;
